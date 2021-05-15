import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import firebase from "firebase";
import { db } from "./firebase";

function DisplayTodo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  // useEffect(function, dependencies)
  useEffect(() => {
    //this code here... fires when app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            time:
              doc.data().timestamp &&
              doc.data().timestamp.toDate().toLocaleDateString(),
          }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div>
      <h1>To-do</h1>
      <br />
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></Input>
        </FormControl>
        {/* <Fab
          disabled={!input}
          type="submit"
          onClick={addTodo}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab> */}
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>
      <br />
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default DisplayTodo;
