import "../App.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="app">
      <div className="card">
        <h1>📖 BibleConnect</h1>

        <p className="subtitle">
          Willkommen zurück bei BibleConnect!
        </p>

        <p>
          Gemeinsam Bibelverse lesen, Gruppen bilden und Gedanken austauschen.
        </p>

        <hr />

        <h2>📚 Funktionen</h2>

        <Link to="/bible">
          <button>📖 Bibel lesen</button>
        </Link>

        <br />
        <br />

        <Link to="/groups">
          <button>👥 Gruppen</button>
        </Link>

        <br />
        <br />

        <Link to="/comments">
          <button>💬 Kommentare</button>
        </Link>

        <br />
        <br />

        <Link to="/profile">
          <button>👤 Mein Profil</button>
        </Link>

        <br />
        <br />

        <Link to="/notifications">
          <button>🔔 Benachrichtigungen</button>
        </Link>

        <br />
        <br />
        <hr />
        <br />

        <Link to="/">
          <button>🚪 Abmelden</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;