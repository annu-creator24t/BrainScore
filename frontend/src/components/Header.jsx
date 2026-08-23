import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer tracking-wide">
        ChittaVani
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8 text-gray-700 font-medium">
        <Link 
          to="/" 
          className="relative group hover:text-blue-600 transition-colors"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link 
          to="/about" 
          className="relative group hover:text-blue-600 transition-colors"
        >
          About
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link 
          to="/NgoHospital" 
          className="relative group hover:text-blue-600 transition-colors"
        >
          NgoHospital
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link 
          to="/blogs" 
          className="relative group hover:text-blue-600 transition-colors"
        >
          Blogs
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link 
          to="/contact" 
          className="relative group hover:text-blue-600 transition-colors"
        >
          Contact
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link 
          to="/dashboard" 
          className="ml-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
