import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 md:px-20"
      style={{ backgroundColor: "#6b6b6b", color: "#f2f2f2" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">ChittaVani</h3>
          <p className="text-sm">
            Bridging brain signals with digital communication, ChittaVani empowers
            people to express thoughts seamlessly. Join us in making technology
            inclusive, accessible, and transformative for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-white transition">
                Team
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-white transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/NgoHospital" className="hover:text-white transition">
                NgoHospital
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-sm flex items-center gap-2">
            <Mail className="w-4 h-4" />{" "}
            <a
              href="mailto:contact@chittavani.ai"
              className="hover:text-white transition"
            >
              contact@chittavani.ai
            </a>
          </p>
          <p className="text-sm mt-2">+91 98765 43210</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/chittavani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/chittavani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/chittavani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/chittavani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-400 my-6" />

      <p className="text-center text-sm">
        © {new Date().getFullYear()} ChittaVani. All rights reserved.
      </p>
    </footer>
  );
}
