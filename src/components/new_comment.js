import React, { Component } from 'react';

export default class NewComment extends Component {

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="My 2 Cents" />
          <input type="submit" value="Post" />
        </form>
      </div>
    )
  }
}
