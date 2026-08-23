import { useState } from "react";
import { ChevronDown, Lightbulb, Award, ShieldCheck } from "lucide-react";

function FAQSection() {
const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
setOpenIndex(openIndex === index ? null : index);
};

const faqs = [
{
question: "Why should I use BrainScore?",
answer: "BrainScore helps people communicate effortlessly by converting brain signals into text in real-time, making it invaluable for those facing speech or movement challenges.",
},
{
question: "Who can benefit from BrainScore?",
answer: "People with speech impairments, paralysis, ALS, or other neurological conditions can use BrainScore. Researchers, caregivers, and innovators in human-computer interaction can also benefit.",
},
{
question: "Do I need any technical knowledge to use BrainScore?",
answer: "No, BrainScore is designed to be intuitive and user-friendly, requiring no technical expertise. Anyone can start using it with minimal guidance.",
},
{
question: "How can BrainScore improve daily life?",
answer: "By enabling communication without physical effort, BrainScore empowers users to express thoughts, participate in social interactions, and gain independence in everyday activities.",
},
{
question: "Is BrainScore suitable for healthcare and research?",
answer: "Absolutely. BrainScore can assist patients in hospitals or rehabilitation, and researchers can leverage its technology for neuroscience studies and assistive AI research.",
},
];

return ( <div className="mb-20 max-w-3xl mx-auto"> <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
Frequently Asked Questions </h2> <div className="space-y-6">
{faqs.map((faq, index) => ( <div key={index} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
<button
onClick={() => toggleFAQ(index)}
className="flex items-center justify-between w-full text-left"
> <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
<ChevronDown
className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
/> </button>
{openIndex === index && ( <p className="mt-3 text-gray-600">{faq.answer}</p>
)} </div>
))} </div> </div>
);
}

export default function About() {
return ( <div className="min-h-screen bg-white text-gray-900">
{/* Hero Section */} <section className="py-20 px-6 md:px-20 bg-white"> <div className="grid md:grid-cols-2 gap-10 items-center"> <img src="/assets/chittavani.jpg" alt="About BrainScore" className="rounded-lg shadow-lg" /> <div> <h1 className="text-5xl font-extrabold text-blue-600 mb-6">About BrainScore</h1> <p className="text-lg text-gray-700 leading-relaxed">
BrainScore is an innovative platform that bridges human brain signals with digital communication. Our mission is to make technology more inclusive, accessible, and impactful by converting thoughts into text and empowering those with communication barriers. </p> </div> </div> </section>


  <hr className="border-t border-gray-200 my-12" />

  {/* Vision Section */}
  <section className="py-20 px-6 md:px-20 bg-gray-50">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Vision</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          At BrainScore, our vision is to empower people suffering from conditions like ALS, paralysis, or speech impairments by decoding brain signals into meaningful communication. We aim to create a world where technology bridges the gap between thoughts and expression.
        </p>
      </div>
      <div>
        <img src="/assets/vision.png" alt="Our Vision" className="rounded-2xl shadow-lg" />
      </div>
    </div>
  </section>

  <hr className="border-t border-gray-200 my-12" />

  {/* Mission Section */}
  <section className="py-20 px-6 md:px-20 bg-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <img src="/assets/mission.jpg" alt="Our Mission" className="rounded-2xl shadow-lg" />
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Mission</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Our mission is to innovate human-centric solutions that enhance communication, dignity, and quality of life. By integrating neuroscience, AI, and assistive technology, we strive to provide accessible tools that make voices heard across the globe.
        </p>
      </div>
    </div>
  </section>

  <hr className="border-t border-gray-200 my-12" />

  {/* Values Section */}
  <section className="py-20 px-6 md:px-20 bg-gray-50">
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Our Core Values</h2>
      <div className="grid md:grid-cols-3 gap-10 text-center">
        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
          <Lightbulb className="w-10 h-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-600">Innovation</h3>
          <p className="text-gray-600 mt-2">Continuously pushing the boundaries of brain-signal technology and digital communication.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
          <Award className="w-10 h-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-600">Excellence</h3>
          <p className="text-gray-600 mt-2">Striving for excellence in research, development, and delivery, ensuring impactful and reliable solutions.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
          <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-600">Responsibility</h3>
          <p className="text-gray-600 mt-2">Committed to ethical practices and empowering people with safe, reliable, and inclusive technology.</p>
        </div>
      </div>
    </div>
  </section>

  <hr className="border-t border-gray-200 my-12" />

  {/* Team Section */}
  <section className="py-20 px-6 md:px-20 bg-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Team</h2>
        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
          Behind BrainScore is a passionate team of innovators, researchers, and engineers committed to transforming brain signals into meaningful communication. Together, we aim to create technology that empowers people and makes a real impact.
        </p>
        <a href="/team" className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold text-lg shadow hover:bg-blue-700 transition">
          Meet Our Team →
        </a>
      </div>
      <div>
        <img src="/assets/team.jpeg" alt="Our Team" className="rounded-2xl shadow-lg w-full object-cover transition-transform hover:scale-105" />
      </div>
    </div>
  </section>

  <hr className="border-t border-gray-200 my-12" />

  {/* FAQ Section */}
  <FAQSection />
</div>


);
}
