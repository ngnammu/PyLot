import React, { useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";

const Signupin = () => {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("*******");
  function verifyDetails() {
    if (username === "" || password === "") {
      alert("Form missing information.");
    } else {
      const formData = {
        username: username,
        password: password,
      };
      axios
        .post("/users/signin", formData)
        .then((response) => alert(response.data));
    }
  }
  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          verifyDetails();
        }}
      >
        <label htmlFor="username">
          <input
            id="username"
            value={username}
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button>submit</button>
        <Link to="/signup" style={{ textDecoration: "none", color: "#4c5357" }}>
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Signupin;
