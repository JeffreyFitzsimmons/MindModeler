import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";

// Import the different components (pages)
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="navbar">
            <h1 className="logo">MRI Analysis</h1>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
