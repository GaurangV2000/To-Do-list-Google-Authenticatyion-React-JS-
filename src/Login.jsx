import React from "react";
import "./App.css";
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ToDoList from "./ToDoList";

const Login = ({ setIsAuth, isAuth }) => {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    try {
      signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/ToDoList");
      });
    } catch (error) {
      alert("You Have not Signed in properly Please retry ");
    }
  };

  return (
    <div className="loginPage">
      <p>Sign in with Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in to Google
      </button>
    </div>
  );
};

export default Login;




// time stamp ={new Date(timestamp?.toDate()).toUTCString()}