import React from "react";
import "../home/Home.css";

function Home(props) {
  return (
    <div className="home_content">
      <div className="first_content">
        This Todo app made by shivang lets you write temporary / on-the-go todos
        as well as personalised todos, available only to you!
      </div>
      <div className="first_content">
        Never miss any important deadline or workout! Make your own To-do in no
        time!
      </div>
      <div className="first_content">Login and start writing today!</div>
      <div className="first_content">More cool features coming soon!!</div>
    </div>
  );
}

export default Home;
