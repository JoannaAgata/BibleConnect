import "../App.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card">
        <h1>🔐 Anmeldung</h1>

        <p className="subtitle">
          Willkommen zurück bei BibleConnect.
        </p>

        <input
          className="input"
          type="email"
          placeholder="E-Mail-Adresse"
        />

        <input
          className="input"
          type="password"
          placeholder="Passwort"
        />

        <button onClick={() => navigate("/dashboard")}>
          Anmelden
        </button>

        <p className="login-footer">
          Noch kein Konto? Registriere dich kostenlos.
        </p>
      </div>
    </div>
  );
}

export default Login;