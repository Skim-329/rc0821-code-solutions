import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
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
        <i className='fas fa-times'></i>
        </div>
        <div className='info'>
          <p>A Password is required.</p>
        </div>
        </form>
    );
  }
}

export default ValidatedInput;
