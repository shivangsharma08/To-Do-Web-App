import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";
import "./Todo.css";
import { db } from "./firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    textAlign: "center",
    position: "absolute",
    height: "50%",
    width: "50%",
    backgroundColor: theme.palette.background.paper,
    border: "5px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState([props.todo.todo]);
  const updateTodo = () => {
    // update the todo with the new input text
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal
        className={classes.modal}
        open={open}
        onClose={(e) => setOpen(false)}
      >
        <div className={classes.paper}>
          <h1>Make changes below</h1>
          <br />
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={props.todo.todo}
          />
          <br />
          <br />
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={updateTodo}
            size="small"
          >
            Update Todo
          </Button>
        </div>
      </Modal>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar>
            <DeleteForeverIcon
              className="todo_icons1"
              onClick={(event) =>
                db.collection("todos").doc(props.todo.id).delete()
              }
            />
          </ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary={props.todo.time} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Edit">
              <EditIcon
                className="todo_icons"
                onClick={(e) => setOpen(true)}
              ></EditIcon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </>
  );
}

export default Todo;
