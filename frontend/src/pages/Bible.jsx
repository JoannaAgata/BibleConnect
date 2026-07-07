import "../App.css";
import { Link } from "react-router-dom";

function Bible() {
  return (
    <div className="app">
      <div className="card">

        <h1>📖 Bibelverse</h1>

        <p className="subtitle">
          Wähle ein Thema aus.
        </p>

        <div className="card">
          <h2>❤️ Freundschaft</h2>
          <p>
            <strong>Johannes 15,12</strong><br />
            „Liebt einander, wie ich euch geliebt habe.“
          </p>
        </div>

        <div className="card">
          <h2>🙏 Hoffnung</h2>
          <p>
            <strong>Jeremia 29,11</strong><br />
            „Ich kenne die Gedanken, die ich über euch habe.“
          </p>
        </div>

        <div className="card">
          <h2>💪 Stärke</h2>
          <p>
            <strong>Philipper 4,13</strong><br />
            „Ich vermag alles durch den, der mich stark macht.“
          </p>
        </div>

        <Link to="/dashboard">
          <button>⬅️ Zurück zum Dashboard</button>
        </Link>

      </div>
    </div>
  );
}

export default Bible;