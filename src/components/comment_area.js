import React, { Component } from 'react';
import NewComment from './new_comment';
import '../css/comment_area.css';

export default class CommentArea extends Component {

  render() {
    return (
      <div className="commentArea">
        <NewComment />
        <ul>
          <li>comment1</li>
          <li>comment2</li>
          <li>comment3</li>
        </ul>
      </div>
    );
  }
}
