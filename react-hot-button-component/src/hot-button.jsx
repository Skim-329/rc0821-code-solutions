import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  getClass() {
    if (this.state.counter < 3) {
      return 'btn';
    } else if (this.state.counter < 6) {
      return 'btn-darkblue';
    } else if (this.state.counter < 9) {
      return 'btn-purple';
    } else if (this.state.counter < 12) {
      return 'btn-salmon';
    } else if (this.state.counter < 15) {
      return 'btn-sand';
    } else if (this.state.counter < 18) {
      return 'btn-yellow';
    } else {
      return 'btn-white';
    }
  }

  render() {
    // console.log('State:', this.state);

    return (
      <button className={`btn ${this.getClass()}`} onClick={this.handleClick}>
        Hot Button
      </button>
    );
  }
}

export default HotButton;
