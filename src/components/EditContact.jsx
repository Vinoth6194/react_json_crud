import React, { Component } from 'react';

export class EditContact extends Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    this.state = {
      id: id,
      name: name,
      email: email,
    };
  }

  update = e => {
    e.preventDefault();
    if (this.state.name === '' && this.state.email === '') {
      alert('Should not be empty');
      return;
    }
    this.props.updateContactHandler(this.state);
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
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
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
          <button className="ui button green">Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
