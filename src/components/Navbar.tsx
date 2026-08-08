import { useState } from "react";
import "./Navbar.css";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "proyectos", label: "Proyectos" },
  { id: "servicios", label: "Servicios" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "blog", label: "Blog" },
  { id: "contacto", label: "Contacto" },
];

function Navbar() {
  const [active, setActive] = useState("inicio");

  const handleClick = (id: string) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="navbar">
      <div className="logo">
        <div className="logo-icon">🐱</div>
        <h2>Studio Catito</h2>
      </div>

      <nav className="menu">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleClick(link.id);
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button className="menu-mobile">☰</button>
    </header>
  );
}

export default Navbar;