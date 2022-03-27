import React from "react";
import { useState } from "react";
import "./App.css";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ToDoList from "./ToDoList";
import ListofItems from "./ListofItems";
import NavBar from "./NavBar";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  // let navigate = useNavigate();

  return (
    <>
      <div className="app">
        <Router>
          {isAuth ? <NavBar setIsAuth={setIsAuth} isAuth={isAuth} /> : ""}
          <Routes>
            <Route
              path="/"
              element={<Login setIsAuth={setIsAuth} isAuth={isAuth} />}
            />
            <Route path="/ToDoList" element={<ToDoList />} />
            <Route
              path="/ListofItems"
              element={<ListofItems isAuth={isAuth} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
