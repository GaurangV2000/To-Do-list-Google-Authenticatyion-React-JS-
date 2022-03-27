import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "./Firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";

const ListofItems = ({ isAuth }) => {
  const [todoLists, setTodoList] = useState([]);
  const postCollectionRef = collection(db, "TODO");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setTodoList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletetodo = async (id) => {
    const postDoc = doc(db, "TODO", id);
    await deleteDoc(postDoc);
  };
  return (
    <>
      <div className="listofItems">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">TO-DO</th>
              <th scope="col">Timestamp</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {todoLists.map((todo, key) => {
            return (
              <>
                <tbody>
                  <tr key={key}>
                    <th scope="row">{key + 1}</th>
                    <td>{todo.title}</td>
                    <td>{todo.todo}</td>
                    <td>Timestamp</td>

                    {isAuth && todo.author.id === auth.currentUser.uid && (
                      <td>

                        <button
                          onClick={() => {
                            deletetodo(todo.id);
                          }}
                        >
                          delete
                        </button>{" "}
                      </td>
                    )}

                    <td>
                      {/* {isAuth && todo.author.id === auth.currentUser.uid && (
                        <IconButton
                          onClick={() => {
                            deletetodo(todo.id);
                          }}
                        ></IconButton>
                      )} */}
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default ListofItems;
