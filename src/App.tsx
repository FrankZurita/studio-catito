import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      {/* INICIO */}
      <section id="inicio" className="hero">
        <div className="background-glow glow1"></div>
        <div className="background-glow glow2"></div>

        <div className="hero-content">
          <span className="badge">🚀 Desarrollo de Software</span>

          <h1>
            CREAMOS
            <br />
            SOFTWARE
            <br />
            <span>QUE INSPIRA.</span>
          </h1>

          <p>
            Creamos aplicaciones y soluciones digitales que convierten ideas
            en productos reales.
          </p>

          <button className="cta-btn">
            Ver proyectos <span className="arrow">→</span>
          </button>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="nosotros" className="section">
        <h2 className="section-title">Sobre Studio Catito</h2>
        <p className="section-text">
          Studio Catito es un estudio independiente enfocado en el
          desarrollo de aplicaciones, herramientas digitales y proyectos
          tecnológicos. Nuestro objetivo es crear software útil, moderno y
          fácil de usar.
        </p>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="section">
        <h2 className="section-title">Proyectos</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Oficina 360</h3>
            <p>Notas + escaneo de PDF.</p>
          </div>
          <div className="card">
            <h3>Administrador de Notas</h3>
            <p>Gestión simple de notas.</p>
          </div>
          <div className="card">
            <h3>Scanner QR</h3>
            <p>Lector y generador de códigos QR.</p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <h2 className="section-title">Servicios</h2>
        <div className="cards-grid">
          <div className="card"><p>Desarrollo Android</p></div>
          <div className="card"><p>Desarrollo Web</p></div>
          <div className="card"><p>APIs REST</p></div>
          <div className="card"><p>Automatización</p></div>
          <div className="card"><p>Diseño de interfaces</p></div>
          <div className="card"><p>Bases de datos</p></div>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section id="tecnologias" className="section">
        <h2 className="section-title">Tecnologías</h2>
        <div className="tech-list">
          {["Kotlin", "Java", "HTML", "CSS", "JavaScript", "React", "Node.js", "Firebase", "SQL", "Git", "Android Studio", "VS Code"].map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="section">
        <h2 className="section-title">Blog</h2>
        <p className="section-text">Próximamente artículos y guías.</p>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section">
        <h2 className="section-title">Contacto</h2>
        <p className="section-text">Correo · GitHub · LinkedIn</p>
      </section>
    </>
  );
}

export default App;