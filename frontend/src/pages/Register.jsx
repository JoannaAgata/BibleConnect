import "../App.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card">
        <h1>📝 Registrierung</h1>

        <p className="subtitle">
          Erstelle dein kostenloses BibleConnect-Konto.
        </p>

        <input
          className="input"
          type="text"
          placeholder="Name"
        />

        <input
          className="input"
          type="email"
          placeholder="E-Mail"
        />

        <input
          className="input"
          type="password"
          placeholder="Passwort"
        />

        <button onClick={() => navigate("/dashboard")}>
          Registrieren
        </button>
      </div>
    </div>
  );
}

export default Register;