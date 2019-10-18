import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [creds, setCreds] = useState({ username: "", password: "" });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", creds)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
      })
      .catch(err => console.error(err));
    setCreds({ username: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={creds.username}
        placeholder="Username"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="password"
        value={creds.password}
        placeholder="Password"
        onChange={handleChange}
      ></input>
      <button type="submit">submit</button>
    </form>
  );
};

export default Login;
