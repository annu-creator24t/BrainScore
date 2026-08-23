import React from "react";

export default function Blog() {
  const blogs = [
    {
      title: "Researchers Train AI to Read Minds",
      desc: "A breakthrough in AI research now allows brain signals to be decoded into text, enabling direct communication from thought to screen.",
      link: "https://www.news-medical.net/news/20250304/Researchers-train-AI-to-read-mindse28094by-decoding-brain-signals-into-text.aspx",
    },
    {
      title: "Brain-Computer Interfaces: Progress and Prospects",
      desc: "Exploring the advancements in BCIs and their transformative potential in healthcare, communication, and human-computer interaction.",
      link: "https://drive.google.com/uc?export=view&id=oFfRzCmwXz8QUCSP7",
    },
    {
      title: "Turning Thoughts Into Actions",
      desc: "Innovative thought-driven technology is revolutionizing assistive devices and enabling people with disabilities to communicate more effectively.",
      link: "https://drive.google.com/uc?export=view&id=dD1ixXpqUTQIMN0r5",
    },
    {
      title: "Your Brain, Your Thoughts, Your Future",
      desc: "Decoding human thoughts opens new opportunities for human-machine interaction, allowing seamless control and communication.",
      link: "https://drive.google.com/uc?export=view&id=qEjpXebcNkHSO2c19",
    },
    {
      title: "Decoding Brain Activity for Communication",
      desc: "Research into neural decoding is helping paralyzed patients regain the ability to communicate using brain activity as input.",
      link: "https://drive.google.com/uc?export=view&id=mkGEU2P7AwW3mBoO7",
    },
    {
      title: "Brain Signals Decoded to Determine Visual Perception",
      desc: "Studies demonstrate the ability to decode visual information from brain activity, paving the way for advanced neurotechnology applications.",
      link: "https://drive.google.com/uc?export=view&id=ZTCIVoNKde7Ns0QyR",
    },
    {
      title: "Concept Analysis: Processing & Structuring Information",
      desc: "Insights into how the brain processes, analyzes, and structures information to optimize decision-making and learning.",
      link: "https://drive.google.com/uc?export=view&id=CLWEFw7ni7TVC4gqF",
    },
    {
      title: "Decoding Brain Signals - Research at Purdue",
      desc: "Purdue researchers are decoding brain signals to convert neural activity into readable text, advancing brain-computer interface technology.",
      link: "https://share.google/sCogHQpy7XJQmCwZw",
    },
    {
      title: "Analyzing the Brain Waves Data Using Python",
      desc: "A practical guide on using Python to analyze and interpret brain wave data for research and BCI applications.",
      link: "https://share.google/JCG6rOyXwx5qJ5Lzq",
    },
    {
      title: "Shaping The Future of Brain Computer Interfacing with Physiological Signals - Bannari Amman Institute of Technology",
      desc: "Research exploring physiological signals to enhance brain-computer interfaces and their applications in technology and healthcare.",
      link: "https://share.google/zotV7ewtsivWKRAyW",
    },
    {
      title: "Brain Decoder Turns a Person's Brain Activity into Words | NIH",
      desc: "NIH research demonstrates the potential to translate neural activity directly into readable language, advancing communication technology.",
      link: "https://share.google/piwUeKJr41Gn73hWg",
    },
  ];

  return (
    <div className="px-8 md:px-16 py-12 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">ChittaVani Blog</h1>
        <p className="text-gray-600 mt-3">
          Insights on brain-computer interfaces, AI, and neurotechnology from ChittaVani.
        </p>
      </div>

      <div className="flex flex-col space-y-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:bg-gray-50 transition w-full"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-4">{blog.desc}</p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
