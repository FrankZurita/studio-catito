import "./App.css";

function App() {
  return (
    <>
      {/* Barra de navegación */}
      <header>
        <h2>🐱 Studio Catito</h2>

        <nav>
          <a href="#">Inicio</a>
          <a href="#">Proyectos</a>
          <a href="#">Apps</a>
          <a href="#">Nosotros</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      {/* Hero Principal */}
      <main>
        <section className="hero">

          <div className="hero-content">

            <h1>
              CREAMOS <br />
              SOFTWARE <br />
              <span>QUE INSPIRA</span>
            </h1>

            <p>
              Desarrollo de aplicaciones móviles, páginas web y soluciones
              digitales modernas.
            </p>

            <button>Ver proyectos</button>

          </div>

        </section>
      </main>
    </>
  );
}

export default App;