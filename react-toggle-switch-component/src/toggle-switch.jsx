import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  isChecked() {
    if (this.state.isClicked) {
      return 'checked';
    } else {
      return '';
    }
  }

  getText() {
    return this.state.isClicked ? 'ON' : 'OFF';
  }

  render() {

    return (
      <div className="container">
        <label className="switch">
          <input type="checkbox" checked={this.isChecked()} onClick={this.handleClick}></input>
          <span className ="slider round"></span>
        </label>
        <h3>{this.getText()}</h3>
      </div>
    );
  }
}

export default ToggleSwitch;
