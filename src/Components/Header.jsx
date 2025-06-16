import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      label: "COURSE",
      subItems: [
        { label: "Card", path: "/course/card" },
        { label: "Map", path: "/course/map" },
      ],
    },
    { label: "FIXTURES", path: "/fixtures" },
    {
      label: "VISITORS",
      subItems: [
        { label: "Societies", path: "/visitors/societies" },
        { label: "Opens", path: "/visitors/opens" },
      ],
    },
    { label: "MEMBERSHIPS", path: "/memberships" },
    { label: "CONTACT", path: "/contact" },
    { label: "FIND US", path: "/find-us" },
    { label: "LINKS", path: "/links" },
  ];

  return (
    <header className="header">
      <h1 className="logo">
        <div className="badge">
          <div className="top-text">W.G.C</div>
          <div className="bottom-text">Founded 1909</div>
        </div>
        <div className="club-text">
          <Link to="/" className="club-link">
            <span>Werneth Golf Club</span>
          </Link>
          <span className="est">Est 1909.</span>
        </div>
      </h1>

      <button
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          {menuItems.map(({ label, path, subItems }) => (
            <li
              key={label}
              className={subItems ? "nav-item has-submenu" : "nav-item"}
            >
              {subItems ? (
                <span className="nav-link">
                  {label} <span className="arrow">▾</span>
                </span>
              ) : (
                <Link to={path} className="nav-link">
                  {label}
                </Link>
              )}

              {subItems && (
                <ul className="submenu">
                  {subItems.map(({ label: subLabel, path: subPath }) => (
                    <li key={subLabel} className="submenu-item">
                      <Link to={subPath} className="submenu-link">
                        {subLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
