import { Link } from "react-router-dom";

import "../App.css";

function Home() {
  return (
    <div className="app">
      <div className="card">
        <h1>📖 BibleConnect</h1>

        <p className="subtitle">
          Gemeinsam die Bibel lesen, Verse teilen und im Glauben wachsen.
        </p>

        <div className="buttons">
  <Link to="/login">
    <button>Anmelden</button>
  </Link>

  <button>Registrieren</button>
</div>

        <div className="verse">
          <h3>✨ Vers des Tages</h3>
          <p>
            „Denn wo zwei oder drei in meinem Namen versammelt sind,
            da bin ich mitten unter ihnen.“
          </p>
          <span>Matthäus 18,20</span>
        </div>
      </div>
    </div>
  );
}

export default Home;