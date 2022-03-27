import React from "react";
import { Button } from "@material-ui/core";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";

const NavBar = ({ setIsAuth }) => {
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TODO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/ToDoList"
                >
                  Create Todo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ListofItems">
                  List of Todo
                </a>
              </li>
              <li className="nav-item">
                <Button style={{ color: "black" }} onClick={signUserOut}>
                  Log Out
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
