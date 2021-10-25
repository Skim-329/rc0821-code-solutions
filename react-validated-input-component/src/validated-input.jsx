import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  changeIcon() {
    let icon;
    if (this.state.value.length < 8) {
      icon = 'fas fa-times';
    } else {
      icon = 'fas fa-check';
    }
    return icon;
  }

  changeMessage() {
    let message;
    if (this.state.value === '') {
      message = 'A password is required';
    } else if (this.state.value.length < 8) {
      message = 'Your password is too short';
    } else {
      message = '';
    }
    return message;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
         <h4 className="label" htmlFor="password">Password</h4>
        </div>
        <div>
        <input
          name="password"
          type="password"
          value={this.state.value}
          onChange={this.handleChange} />
        <i className={this.changeIcon()}></i>
        </div>
        <div className='info'>
          <p>{this.changeMessage()}</p>
        </div>
        </form>
    );
  }
}

export default ValidatedInput;
