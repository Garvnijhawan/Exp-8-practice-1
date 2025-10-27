import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'error' or 'success'

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check empty fields
    if (username.trim() === "" || password.trim() === "") {
      setMessage("Please enter both username and password.");
      setMessageType("error");
      return;
    }

    // Check credentials (you can change these)
    if (username === "admin" && password === "12345") {
      setMessage("Login successful!");
      setMessageType("success");
      console.log("✅ Username:", username);
      console.log("✅ Password:", password);
    } else {
      setMessage("Invalid username or password!");
      setMessageType("error");
    }
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Message Section */}
          {message && (
            <p className={messageType === "error" ? "error" : "success"}>
              {message}
            </p>
          )}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
