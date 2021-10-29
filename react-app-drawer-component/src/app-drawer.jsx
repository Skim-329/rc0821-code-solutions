import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = { open: false };
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <i onClick={this.handleOpen}
           className='fas fa-bars fa-2x'
           id="drawer">
        </i>
        <div onClick={this.handleClose}
             className={this.state.open ? 'view' : 'hidden'}>
        </div>
        <div className={this.state.open ? 'container' : 'container closed'}>
          <div className="contents">
            <h1 className="menuHeader">Menu</h1>
            <button className="link" onClick={this.handleClose}>About</button>
            <button className="link" onClick={this.handleClose}>Get Started</button>
            <button className="link" onClick={this.handleClose}>Sign In</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
