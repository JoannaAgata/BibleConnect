import "../App.css";
import { Link } from "react-router-dom";

function Comments() {
  return (
    <div className="app">
      <div className="card">

        <h1>💬 Kommentare</h1>

        <p className="subtitle">
          Gedanken und Erfahrungen zu einem Bibelvers.
        </p>

        <div className="card">
          <h2>📖 Johannes 15,12</h2>
          <p>
            <strong>„Liebt einander, wie ich euch geliebt habe.“</strong>
          </p>
        </div>

        <div className="card">
          <strong>👤 Anna</strong>
          <p>
            Dieser Vers erinnert mich daran, anderen mit Liebe zu begegnen.
          </p>
        </div>

        <div className="card">
          <strong>👤 Max</strong>
          <p>
            Für mich ist dieser Vers eine Motivation, jeden Tag freundlicher zu sein.
          </p>
        </div>

        <div className="card">
          <strong>👤 Joanna</strong>
          <p>
            Ich finde diesen Vers besonders schön, weil er Gemeinschaft und Zusammenhalt zeigt.
          </p>
        </div>

        <input
          className="input"
          type="text"
          placeholder="Schreibe einen Kommentar..."
        />

        <button>Kommentar hinzufügen</button>

        <br />
        <br />

        <Link to="/dashboard">
          <button>⬅️ Zurück zum Dashboard</button>
        </Link>

      </div>
    </div>
  );
}

export default Comments;