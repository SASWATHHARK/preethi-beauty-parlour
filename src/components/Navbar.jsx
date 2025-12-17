import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import logo from "../assets/preethi-logo.jpg";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // prevent background scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Top Navbar */}
      <header className="top-navbar">
        <div className="top-brand">
          <img src={logo} alt="Preethi Beauty Logo" />
          <span>Preethi's Beauty Parlour</span>
        </div>

        <button className="menu-btn" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </header>

      {/* Side Drawer */}
      <div className={`side-drawer ${open ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="brand">
            <img src={logo} alt="Preethi Beauty Logo" />
            <span>Preethi's Beauty Parlour</span>
          </div>

          <button className="close-btn" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <nav>
          <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
          <a href="#reviews" onClick={() => setOpen(false)}>Reviews</a>
          <a href="#findus" onClick={() => setOpen(false)}>Find Us</a>
          <a href="#book" onClick={() => setOpen(false)}>Book Now</a>
        </nav>
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
