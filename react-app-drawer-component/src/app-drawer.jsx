import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.state = { menuBar: false };
  }

  handleSwitch() {
    (this.state.menuBar === false)
      ? this.setState({ menuBar: true })
      : this.setState({ menuBar: false });
  }

  render() {
    const x = this.state.menuBar === false;

    return (
      <div>
        <i onClick={this.handleSwitch}
           className={`menuicon ${x
           ? 'fas fa-bars'
           : 'hidden'}`}>
        </i>
        <div onClick={this.handleSwitch}
             className={x
               ? 'hidden'
               : 'background'}>
        </div>
        <div className={x
          ? 'hidden'
          : 'menu'}>
          <h1>Menu</h1>
          <ul>
            <li onClick={this.handleSwitch}>A</li>
            <li onClick={this.handleSwitch}>B</li>
            <li onClick={this.handleSwitch}>C</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
