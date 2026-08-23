import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Proxy route to Python ML backend
app.post("/api/predict", async (req, res) => {
  try {
    const response = await axios.post("http://127.0.0.1:5001/predict", req.body);
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Prediction failed" });
  }
});

app.listen(5000, () => console.log("Node server running on port 5000"));
