import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">

        <div className="logo-icon">
          🐱
        </div>

        <h2>Studio Catito</h2>

      </div>

      <nav className="menu">

        <a href="#">Inicio</a>

        <a href="#">Sobre Studio Catito</a>

        <a href="#">Proyectos</a>

        <a href="#">Blog</a>

        <a href="#">Contacto</a>

      </nav>

    </header>
  );
}

export default Navbar;