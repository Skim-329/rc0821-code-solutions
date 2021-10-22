import React from 'react';

class StopWatch extends React.Component {
  constructor() {
    super();
    this.state = { seconds: 0, watchStart: false, watch: null };
  }

  startWatch() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  handleClick() {
    this.setState({ watchStart: !this.state.watchStart });
    if (this.state.watchStart) {
      clearInterval(this.state.watch);
    } else {
      const watch = setInterval(() => this.startWatch(), 1000);
      this.setState({ watch });
    }
  }

  resetWatch() {
    if (!this.state.watchStart) {
      clearInterval(this.state.watch);
      this.setState({ watch: null, seconds: 0 });
    }
  }

  changeIcon() {
    let icon;
    if (this.state.watchStart) {
      icon = 'fas fa-pause';
    } else {
      icon = 'fas fa-play';
    }
    return icon;
  }

  render() {
    return (
      <div className='container'>
        <button className='circle' onClick={() => this.resetWatch()}>
          <span className='number'>{this.state.seconds}</span>
        </button>
        <button className='icons' onClick={() => this.handleClick()}>
          <i className={this.changeIcon()}></i>
        </button>
      </div>
    );
  }
}

export default StopWatch;
