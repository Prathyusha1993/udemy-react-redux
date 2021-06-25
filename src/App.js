//import './App.css';
import React, { Component } from "react";
import faker from "faker";
import CommentDetails from "./components/commentDetails";
import ApprovalCard from "./components/approvalCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetails
            image={faker.image.avatar()}
            author="Sara"
            timeAgo="Today at 5:00pm"
            text="Nice blog"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetails
            image={faker.image.avatar()}
            author="Alex"
            timeAgo="Today at 3:00pm"
            text="It was awesome and useful"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetails
            image={faker.image.avatar()}
            author="John"
            timeAgo="Today at 2:00pm"
            text="I like the subject"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetails
            image={faker.image.avatar()}
            author="Jane"
            timeAgo="Today at 3:30pm"
            text="I like the writing"
          />
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
