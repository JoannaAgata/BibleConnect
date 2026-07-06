import "../App.css";

function Login() {
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

        <button>Anmelden</button>

        <p className="login-footer">
          Noch kein Konto? Registriere dich kostenlos.
        </p>
      </div>
    </div>
  );
}

export default Login;