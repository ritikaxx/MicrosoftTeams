import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
    return (
        <div className="Login">
      <span className="loginTitle">Welcome Back</span>
      <div className="opac-form">

      <form className="loginForm" >
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={userRef}
        />
        <button className="loginButton" type="submit" >
          <Link className="link" to="/landing">Login</Link>
        </button>
      </form>
      </div>
      <button className="loginRegisterButton">
        
      <Link className="link" to="/register"> Register</Link>
       
      </button>
      </div>
    );
}
