import "../App.css";
import { Link } from "react-router-dom";

function Notifications() {
  return (
    <div className="app">
      <div className="card">

        <h1>🔔 Benachrichtigungen</h1>

        <p className="subtitle">
          Deine neuesten Aktivitäten
        </p>

        <div className="card">
          <h2>💬 Neuer Kommentar</h2>
          <p>
            <strong>Anna</strong> hat einen Kommentar zu
            <strong> Johannes 15,12</strong> geschrieben.
          </p>
        </div>

        <div className="card">
          <h2>👥 Neue Gruppe</h2>
          <p>
            <strong>Max</strong> hat dich zur Gruppe
            <strong> „Jugendkreis“</strong> eingeladen.
          </p>
        </div>

        <div className="card">
          <h2>📖 Neuer Bibelvers</h2>
          <p>
            Ein neuer Bibelvers wurde in der Gruppe
            <strong> „Familie“</strong> veröffentlicht.
          </p>
        </div>

        <div className="card">
          <h2>❤️ Erinnerung</h2>
          <p>
            Lies heute deinen täglichen Bibelvers.
          </p>
        </div>

        <Link to="/dashboard">
          <button>⬅️ Zurück zum Dashboard</button>
        </Link>

      </div>
    </div>
  );
}

export default Notifications;