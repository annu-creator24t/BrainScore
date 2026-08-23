import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // 🧠 State variables
  const [predictedWord, setPredictedWord] = useState("Waiting...");
  const [recentPredictions, setRecentPredictions] = useState(["World", "Brain", "Signal", "Help", "Learn"]);
  const [metrics, setMetrics] = useState([
    { title: "Total Predictions", value: 120 },
    { title: "Connected NGOs", value: 8 },
    { title: "Connected Hospitals", value: 5 },
  ]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const partners = [
    { name: "Helping Hands", logo: "/assets/Ngo1.png" },
    { name: "Smile Foundation", logo: "/assets/Ngo2.jpg" },
    { name: "Apollo Hospital", logo: "/assets/Hos1.jpg" },
    { name: "Fortis Healthcare", logo: "/assets/Hos2.jpg" },
  ];

  // 📂 Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // ⚙️ Send file to Flask for prediction
  const handleUpload = async () => {
    if (!file) return alert("Please select a CSV file first!");
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/predict_csv", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const prediction = res.data.prediction ?? "Unknown";

      // 🧠 Update predicted word
      setPredictedWord(prediction);

      // 🕒 Update recent predictions list
      setRecentPredictions((prev) => [prediction, ...prev.slice(0, 4)]);

      // 📊 Increment total predictions count
      setMetrics((prev) =>
        prev.map((m) =>
          m.title === "Total Predictions" ? { ...m, value: m.value + 1 } : m
        )
      );
    } catch (err) {
      console.error("Prediction error:", err);
      alert("⚠️ Error connecting to backend or processing file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-indigo-50">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-10">ChittaVani</h2>
        <nav className="flex flex-col gap-4 text-lg">
          <Link to="/" className="hover:text-indigo-300 transition">Home</Link>
          <Link to="/NgoHospital" className="hover:text-indigo-300 transition">NgoHospital</Link>
          <Link to="/about" className="hover:text-indigo-300 transition">About</Link>
          <Link to="/dashboard" className="hover:text-indigo-300 transition">Dashboard</Link>
          <Link to="/contact" className="hover:text-indigo-300 transition">Contact</Link>
          <Link to="/blogs" className="hover:text-indigo-300 transition">Blogs</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-8">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-indigo-900">Dashboard</h1>
          <div className="bg-indigo-800 text-white rounded-full px-3 py-1">Admin</div>
        </div>

        {/* Prediction Box */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg p-12 text-center border hover:scale-105 hover:shadow-indigo-300 transition-all mb-12 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6">Predicted Word</h2>
          <div className="text-8xl font-extrabold text-indigo-900 animate-pulse mb-6">
            {predictedWord}
          </div>

          {/* File Upload */}
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="mb-4 border border-indigo-300 rounded-lg px-3 py-2"
          />
          <button
            onClick={handleUpload}
            disabled={loading}
            className="px-8 py-3 bg-indigo-700 text-white rounded-full font-semibold hover:bg-indigo-800 transition disabled:opacity-50"
          >
            {loading ? "Predicting..." : "Upload & Predict"}
          </button>
        </div>

        {/* Metrics */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center border hover:scale-105 hover:shadow-indigo-300 transition-all"
            >
              <h4 className="text-lg font-semibold text-indigo-800 mb-2">
                {metric.title}
              </h4>
              <p className="text-2xl font-bold text-indigo-900">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Predictions */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-6 border mb-12">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4">
            Recent Predictions
          </h3>
          <div className="flex flex-wrap gap-3">
            {recentPredictions.map((word, index) => (
              <span
                key={index}
                className="bg-indigo-100/80 text-indigo-900 rounded-full px-3 py-1 font-medium hover:bg-indigo-200 transition cursor-pointer"
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Connected Partners */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            Connected Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center hover:scale-105 hover:shadow-indigo-300 transition-all border"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 object-contain mb-2"
                />
                <p className="text-sm font-medium text-gray-700 text-center">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
