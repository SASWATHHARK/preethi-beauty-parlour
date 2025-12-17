import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "../assets/preethi-logo.jpg";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Navbar Button */}
      <div className="top-navbar">
        <button className="menu-btn" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Side Drawer */}
      <div className={`side-drawer ${open ? "open" : ""}`}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="brand">
            <img src={logo} alt="Preethi Beauty Logo" />
            <span>Preethi's Beauty Parlour</span>
          </div>

          <button className="close-btn" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav>
          <a href="#gallery" onClick={() => setOpen(false)}>
            Gallery
          </a>
          <a href="#reviews" onClick={() => setOpen(false)}>
            Reviews
          </a>
          <a href="#findus" onClick={() => setOpen(false)}>
            Find Us
          </a>
          <a href="#book" onClick={() => setOpen(false)}>
            Book Now
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
