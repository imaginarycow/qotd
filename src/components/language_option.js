import React, { Component } from 'react';

const languageOptions = ['English','Spanish','German','French'];

export default class LanguageOption extends Component {
  render() {

    return (
      <div className="Languages">
        <select>
          {languageOptions.map(function(language) {return(<option key={language}>{language}</option>)})}
        </select>
      </div>
    );
  }
}
