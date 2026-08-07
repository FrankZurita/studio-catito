import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="background-glow glow1"></div>
        <div className="background-glow glow2"></div>

        <div className="hero-content">

          <span className="badge">
            🚀 Desarrollo de Software
          </span>

          <h1>
            CREAMOS
            <br />
            SOFTWARE
            <br />
            <span>QUE INSPIRA.</span>
          </h1>

          <p>
            Studio Catito es un estudio independiente dedicado al desarrollo
            de aplicaciones móviles, desarrollo web y herramientas que ayudan
            a resolver problemas reales.
          </p>

          <button>
            Explorar proyectos
          </button>

        </div>

      </section>

    </>
  );
}

export default App;