import Home from "./home/Home";
import Login from "./login/Login";
import NavBar from "./Navigation/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import "./footer.css";
import DisplayTodo from "./DisplayTodo";
import firebase, { db, auth } from "./firebase";
import "./login/LoginData.css";

class App extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: {
            photoURL: user.photoURL,
            email: user.email,
            displayName: user.displayName,
          },
        });
      } else {
        this.setState({ user: null });
      }
    });
    db.collection("users")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id);
        });
      });
  }

  signInUser = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  signOutUser = () => {
    auth.signOut();
  };

  handleLogin = () => {
    if (!this.state.user) {
      return <Login user={this.state.user} signin={this.signInUser} />;
    } else {
      return (
        this.state.user && (
          <div className="login_data">
            <div>User's Name: {this.state.user.displayName}</div>
            <div>User's Email Id: {this.state.user.email}</div>
          </div>
        )
      );
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar signout={this.signOutUser} user={this.state.user} />
          <Route path="/" exact component={Home} />
          <Route path="/todo" component={DisplayTodo} />
          <Route path="/login" render={this.handleLogin} />
        </Router>
        <footer className="footer_content">
          <p>A full CRUD functionality TO-DO app </p>
          <p>Developer: Shivang Sharma</p>
        </footer>
      </div>
    );
  }
}
export default App;
