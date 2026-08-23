import { useEffect } from "react";

export default function LandingPage() {
useEffect(() => {
const text = '[ Brain → Signal → "Hello World" ]';
let i = 0;
const demoBox = document.getElementById("typing-box");
if (!demoBox) return;

const interval = setInterval(() => {
  demoBox.innerText = text.slice(0, i);
  i++;
  if (i > text.length) clearInterval(interval);
}, 100);

return () => clearInterval(interval);


}, []);

return ( <div className="w-full">
{/* Hero Section */} <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-indigo-100 to-white px-6 animate-fadeIn"> <h1 className="text-4xl md:text-6xl font-bold text-indigo-900 mb-4 animate-slideUp">
BrainScore – Turning Thoughts into Words </h1> <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6 animate-slideUp">
Capturing EEG signals and transforming them into meaningful text in real-time. </p>


    <div
      id="typing-box"
      className="text-xl md:text-2xl font-mono text-indigo-700 border border-indigo-300 rounded-lg px-4 py-3 shadow-md bg-white mb-8 animate-pulse"
    ></div>

    <div className="flex gap-4 animate-slideUp">
      <a
        href="/dashboard"
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:scale-105 transition-transform"
      >
        Explore Dashboard
      </a>
      <a
        href="/about"
        className="px-6 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-50 hover:scale-105 transition-transform"
      >
        Learn More
      </a>
    </div>
  </section>

  {/* About Section */}
  <section className="py-16 bg-white px-6 animate-slideUp">
    <h1 className="text-2xl font-bold text-center text-indigo-900 mb-6">
      What is BrainScore?
    </h1>
    <p className="text-gray-700 text-center max-w-2xl mx-auto">
      BrainScore bridges brain activity and communication by transforming EEG
      signals into words. Designed to empower people facing communication
      barriers, it represents the future of human–computer interaction.
    </p>
  </section>

  {/* Features Section */}
  <section className="py-20 bg-indigo-50 px-6 animate-slideUp">
    <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
      Key Features
    </h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
      <div className="p-6 bg-white rounded-xl shadow-md hover:scale-105 transition-transform border-2 border-indigo-100 bg-gradient-to-b from-white to-indigo-50">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Lightweight & Non-Invasive</h3>
        <p className="text-gray-600">Comfortable wearable EEG cap with dry/wet electrodes, capturing brain signals safely without discomfort.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md hover:scale-105 transition-transform border-2 border-indigo-100 bg-gradient-to-b from-white to-indigo-50">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Real-Time Signal Processing</h3>
        <p className="text-gray-600">Captures and processes neural oscillations instantly for minimal latency decoding.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md hover:scale-105 transition-transform border-2 border-indigo-100 bg-gradient-to-b from-white to-indigo-50">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Brain-to-Text Conversion</h3>
        <p className="text-gray-600">Decodes brain signals into words or sentences, enabling seamless communication on a screen or connected application.</p>
      </div>
    </div>
  </section>

  {/* Demo Video Section */}
  <section className="py-20 bg-white px-6 animate-slideUp">
    <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">Watch BrainScore in Action</h2>
    <div className="max-w-4xl mx-auto h-64 bg-gray-200 rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition-transform overflow-hidden">
      <video src="/assets/video.mp4" poster="/assets/inora.jpg" className="w-full h-full rounded-xl object-cover" controls autoPlay loop muted />
    </div>
  </section>
</div>

);
}
