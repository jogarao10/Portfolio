import { useState } from "react";
import "./Header.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__top-row">
          <h1 className="site-header__brand">Portfolio.</h1>
          <button
            type="button"
            className={`site-header__menu-btn ${isMenuOpen ? "is-open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav aria-label="Main navigation" id="primary-navigation">
          <ul className={`site-header__nav-list ${isMenuOpen ? "is-open" : ""}`}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  className="site-header__nav-link"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
