from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
import torch.nn as nn
import numpy as np
import pandas as pd
import joblib
import os

# --------------------------
# 1️⃣ Model class (same as training)
# --------------------------
class EEG_CNN(nn.Module):
    def __init__(self, in_ch=1, num_classes=2):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(in_ch, 16, kernel_size=3, padding=1), nn.ReLU(),
            nn.Conv2d(16, 32, kernel_size=3, padding=1), nn.ReLU(),
            nn.MaxPool2d(2, 2),
            nn.Conv2d(32, 64, kernel_size=3, padding=1), nn.ReLU(),
            nn.MaxPool2d(2, 2),
        )
        with torch.no_grad():
            dummy = torch.zeros(1, in_ch, 8, 8)
            f = self.features(dummy)
            flat_dim = f.view(1, -1).shape[1]
        self.classifier = nn.Sequential(
            nn.Linear(flat_dim, 128), nn.ReLU(), nn.Dropout(0.3),
            nn.Linear(128, num_classes)
        )

    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), -1)
        return self.classifier(x)


# --------------------------
# 2️⃣ Load model and scaler
# --------------------------
device = torch.device("cpu")
model = EEG_CNN().to(device)
model.load_state_dict(torch.load("inora_cnn_final.pt", map_location=device))
model.eval()

scaler = joblib.load("scaler.joblib")


# --------------------------
# 3️⃣ Flask setup
# --------------------------
app = Flask(__name__)
CORS(app)


# 🔹 Route 1: Normal JSON data prediction
@app.route("/api/predict", methods=["POST"])
def predict():
    data = request.get_json()

    if not data or "features" not in data:
        return jsonify({"error": "Missing 'features' in request"}), 400

    arr = np.array(data["features"], dtype=float)

    if arr.shape == (64,):
        arr = arr.reshape(1, 8, 8)
    elif arr.shape != (1, 8, 8):
        return jsonify({"error": f"Invalid input shape {arr.shape}, expected (64,) or (8,8)"}), 400

    X_flat = arr.reshape(1, -1)
    X_scaled = scaler.transform(X_flat).reshape(1, 1, 8, 8)

    x_t = torch.tensor(X_scaled, dtype=torch.float32).to(device)
    with torch.no_grad():
        preds = model(x_t)
        pred_class = torch.argmax(preds, dim=1).item()

    return jsonify({"prediction": int(pred_class)})


# 🔹 Route 2: CSV upload prediction
@app.route("/api/predict_csv", methods=["POST"])
def predict_csv():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]

    if not file.filename.endswith(".csv"):
        return jsonify({"error": "File must be a CSV"}), 400

    try:
        # ✅ Read the CSV properly as a table
        df = pd.read_csv(file, header=None)  # ✅ CHANGED

        # ✅ Ensure it’s 8x8 (like your conduct table)
        if df.shape != (8, 8):
            return jsonify({"error": f"CSV must be 8x8, got shape {df.shape}"}), 400

        # ✅ Flatten it into 64 values
        data = df.values.flatten().astype(float)  # ✅ CHANGED

        # ✅ Scale and reshape for CNN
        X_scaled = scaler.transform(data.reshape(1, -1)).reshape(1, 1, 8, 8)

        # ✅ Predict
        x_t = torch.tensor(X_scaled, dtype=torch.float32).to(device)
        with torch.no_grad():
            preds = model(x_t)
            pred_class = torch.argmax(preds, dim=1).item()

        # ✅ Human-readable label
        class_map = {0: "Hello", 1: "World"}
        predicted_word = class_map.get(pred_class, f"Class {pred_class}")

        return jsonify({"prediction": predicted_word})

    except Exception as e:
        print("Error processing CSV:", str(e))
        return jsonify({"error": f"Error processing CSV: {str(e)}"}), 500


# --------------------------
# 4️⃣ Run server
# --------------------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
