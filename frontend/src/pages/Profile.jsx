import "../App.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="app">
      <div className="card">

        <h1>👤 Mein Profil</h1>

        <p className="subtitle">
          Persönliche Informationen
        </p>

        <div className="card">
          <h2>🧑 Name</h2>
          <p>Joanna</p>
        </div>

        <div className="card">
          <h2>📧 E-Mail</h2>
          <p>joanna@example.com</p>
        </div>

        <div className="card">
          <h2>❤️ Lieblingsvers</h2>
          <p>
            Philipper 4,13
            <br />
            „Ich vermag alles durch den, der mich stark macht.“
          </p>
        </div>

        <div className="card">
          <h2>📊 Aktivitäten</h2>
          <p>👥 Gruppen: 3</p>
          <p>💬 Kommentare: 12</p>
        </div>

        <Link to="/dashboard">
          <button>⬅️ Zurück zum Dashboard</button>
        </Link>

      </div>
    </div>
  );
}

export default Profile;