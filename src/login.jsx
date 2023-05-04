import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRemember = (event) => {
    setRemember(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({ username, password, remember });
  };

  const isDisabled = !username || !password;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <div>
        <label htmlFor="remember">Remember</label>
        <input
          type="checkbox"
          id="remember"
          checked={remember}
          onChange={handleRemember}
        />
      </div>
      <button type="submit" disabled={isDisabled}>
        Log in
      </button>
    </form>
  );
}

export default Login;
