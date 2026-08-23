import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import NgoHospital from "./pages/NgoHospital.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
return ( <Router> <div className="flex flex-col min-h-screen"> <Header />

    <main className="flex-grow">  
      <Routes>  
        <Route path="/" element={<LandingPage />} />  
        <Route path="/about" element={<About />} />  
        <Route path="/dashboard" element={<Dashboard />} />  
        <Route path="/contact" element={<Contact />} />  
        <Route path="/blogs" element={<Blog />} />  
        <Route path="/NgoHospital" element={<NgoHospital />} />  
        <Route  
          path="*"  
          element={<h1 className="text-center text-2xl mt-20">404 - Page Not Found</h1>}  
        />  
      </Routes>  
    </main>  

    <Footer />  
  </div>  
</Router>  

);
}

export default App;
