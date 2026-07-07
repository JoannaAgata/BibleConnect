import "../App.css";
import { Link } from "react-router-dom";

function Groups() {
  return (
    <div className="app">
      <div className="card">

        <h1>👥 Meine Gruppen</h1>

        <p className="subtitle">
          Tausche dich mit Familie und Freunden über Bibelverse aus.
        </p>

        <div className="card">
          <h2>👨‍👩‍👧 Familie</h2>
          <p>4 Mitglieder</p>
        </div>

        <div className="card">
          <h2>🙏 Jugendkreis</h2>
          <p>12 Mitglieder</p>
        </div>

        <div className="card">
          <h2>📖 Bibelkreis Berlin</h2>
          <p>8 Mitglieder</p>
        </div>

        <button>➕ Neue Gruppe erstellen</button>

        <br />
        <br />

        <Link to="/dashboard">
          <button>⬅️ Zurück zum Dashboard</button>
        </Link>

      </div>
    </div>
  );
}

export default Groups;