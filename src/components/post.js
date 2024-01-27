import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";

let e = React.createElement;

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      content: props.content,
    };
  }
  render() {
    //let commentOne = {
    // content: "This is my post",
    // username: "Tommy",
    //  date: "12-12-2018",
    // };
    // let commentTwo = {
    //  content: "This is another post",
    //  username: "Sammy",
    // date: "12-17-2018",
    // };
    // let commentThree = {
    //  content: "More posts from us",
    // username: "Sally",
    //  date: "12-19-2018",
    //  };
    let comments = [];
    if (this.state.comments) {
      for (let comment of this.state.comments) {
        comments.push(<Comment {...comment} />);
      }
    }
    return (
      <div className="card w-75">
        <div className="card-header bg-success text-white">
          Username and Time
        </div>
        <div className="card-body">{this.state.content}</div>

        <div className="card-footer">
          <LikeButton />
          <ReplyButton />
          {comments}
        </div>
      </div>
    );
  }
}
