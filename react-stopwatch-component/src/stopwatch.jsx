import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { second: 0 };
    this.startWatch = this.startWatch.bind(this);
  }

  startWatch() {
    setInterval(() => {
      return this.setState((state, props) => {
        return { second: state.second === 59 ? 0 : state.second + 1 };
      });
    }, 1000);
  }

  render() {
    return (
      <div className='container'>
        <div
          className='number'
          onClick={this.startWatch}>
          {this.state.second}
        </div>
        <div className='icon'>
          <p>hello</p>
        </div>
      </div>
    );
  }
}

export default StopWatch;