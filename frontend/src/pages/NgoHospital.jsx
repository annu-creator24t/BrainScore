import { Globe, HeartHandshake } from "lucide-react";

export default function NgoHospital() {
  const ngos = [
    { 
      name: "Helping Hands", 
      logo: "/assets/Ngo1.png",
      description: "Providing food, shelter, and education for underprivileged children across India.",
      website: "https://helpinghands.org",
      tag: "Education & Welfare"
    },
    { 
      name: "Smile Foundation", 
      logo: "/assets/Ngo2.jpg",
      description: "Empowering children, youth, and women through healthcare and education initiatives.",
      website: "https://smilefoundationindia.org",
      tag: "Healthcare & Education"
    },
    { 
      name: "Hope Trust", 
      logo: "/assets/Ngo3.jpg",
      description: "Specialized in rehabilitation and mental health support for individuals & families.",
      website: "https://hopetrustindia.com",
      tag: "Mental Health"
    },
    { 
      name: "Food for All", 
      logo: "/assets/Ngo4.jpg",
      description: "Distributing surplus food daily to ensure nobody sleeps hungry.",
      website: "https://foodforall.org",
      tag: "Food Security"
    },
  ];

  const hospitals = [
    { 
      name: "Medicare Hospital", 
      logo: "/assets/Hos1.jpg",
      description: "One of India's largest healthcare providers, leading in advanced medical tech.",
      website: "https://apollohospitals.com",
      tag: "Multi-Specialty"
    },
    { 
      name: "Fortis Healthcare", 
      logo: "/assets/Hos2.jpg",
      description: "Multi-specialty chain known for tertiary and quaternary care.",
      website: "https://fortishealthcare.com",
      tag: "Healthcare Network"
    },
    { 
      name: "ApOLO Hospital", 
      logo: "/assets/Hos3.webp",
      description: "India's premier medical institute with top-tier treatment and research facilities.",
      website: "https://aiims.edu",
      tag: "Research Institute"
    },
    { 
      name: "Max Hospital", 
      logo: "/assets/Hos4.jpg",
      description: "Renowned for advanced treatments and world-class patient care.",
      website: "https://maxhealthcare.in",
      tag: "Specialized Care"
    },
  ];

  const renderCard = (item) => (
    <div
      key={item.name}
      className="group bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 flex flex-col items-center justify-between hover:scale-105 hover:shadow-indigo-300 transition-all border border-gray-200 relative overflow-hidden"
    >
      {/* Logo */}
      <div className="flex items-center justify-center mb-4">
        <img
          src={item.logo}
          alt={item.name}
          className="h-20 object-contain"
        />
      </div>

      {/* Title & Badge */}
      <p className="text-lg font-bold text-indigo-900 text-center">{item.name}</p>
      <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full mt-2 mb-3">
        {item.tag}
      </span>

      {/* Description */}
      <p className="text-sm text-gray-600 text-center mb-4 line-clamp-3">
        {item.description}
      </p>

      {/* Actions */}
      <div className="flex space-x-3 mt-auto">
        <a
          href={item.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          <Globe className="h-4 w-4" /> Visit
        </a>
        <button className="flex items-center gap-1 text-gray-700 hover:text-indigo-700 text-sm font-medium">
          <HeartHandshake className="h-4 w-4" /> Support
        </button>
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-indigo-500 to-purple-500 transition-opacity"></div>
    </div>
  );

  return (
    <section
      className="py-20 px-6 animate-slideUp bg-gradient-to-b from-indigo-50 to-white"
      id="ngo-hospital"
    >
      <h2 className="text-4xl font-extrabold text-center text-indigo-900 mb-6">
        Our NGO & Hospital Collaborations
      </h2>
      <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12">
        ChittaVani partners with reputed NGOs and hospitals to make assistive technologies accessible for everyone. 
        These collaborations strengthen our mission of building inclusive healthcare solutions.
      </p>

      {/* NGOs */}
      <h3 className="text-2xl font-semibold text-indigo-800 mb-8 text-center">
        NGO Partners
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
        {ngos.map((ngo) => renderCard(ngo))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-12 max-w-4xl mx-auto"></div>

      {/* Hospitals */}
      <h3 className="text-2xl font-semibold text-indigo-800 mb-8 text-center">
        Hospital Partners
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
        {hospitals.map((hospital) => renderCard(hospital))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <a
          href="/collaborations"
          className="px-10 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl hover:scale-110 transition-all"
        >
          Explore All Collaborations →
        </a>
      </div>
    </section>
  );
}
