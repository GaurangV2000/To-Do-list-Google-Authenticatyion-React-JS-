import React from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./Firebase";
import { useNavigate } from "react-router-dom";

const ToDoList = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");

  const postCollectionRef = collection(db, "TODO");

  let navigate = useNavigate();
  // let timestamp ;

  const createTodo = async () => {
    await addDoc(postCollectionRef, {
      title,
      todo,
      // timestamp: new Date(timestamp?.toDate()).toUTCString(),
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    alert("data added succesfully");

    navigate("/ListofItems");
    setTitle("");
    setTodo("");
    // console.log(timestamp)
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Title
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Party....!"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Notes
              </label>
              <textarea
                class="form-control"
                rows="3"
                onChange={(e) => {
                  setTodo(e.target.value);
                }}
              ></textarea>
            </div>
            <button onClick={createTodo} class="btn btn-primary mb-3">
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
