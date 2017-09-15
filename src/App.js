import React, { Component } from 'react';
import './css/App.css';
import Languages from './components/language_option';
import Question from './components/question';
import CommentArea from './components/comment_area';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>QOTD</h1>
        <h5>Question of the Day</h5>
        <Languages />
        <Question text={this.props.text}/>
        <CommentArea />
      </div>
    );
  }
}
