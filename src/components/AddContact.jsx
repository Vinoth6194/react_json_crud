import React, { Component } from 'react';
import { toast } from 'react-toastify';

export class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  add = e => {
    e.preventDefault();
    if (this.state.name === '' && this.state.email === '') {
      // alert('Should not be empty');
      toast.warn('Should not be empty');
      return;
    }
    this.props.addContactHandler(this.state);
    console.log('From the form');
    console.log(this.state);
    this.setState({
      name: '',
      email: '',
    });
    console.log('Props from AddContact');
    console.log(this.props);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="Email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
