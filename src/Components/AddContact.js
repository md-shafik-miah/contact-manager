import React, { Component } from "react";

export class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };
  }

  HandleSubmit = (e)=> {
    e.preventDefault();
    if(this.state.name === "" || this.state.email === "") {
      alert("Fill up the all field ")
    }
   this.props.addContactHandler(this.state)
   this.setState({name:"",phone: "",email: ""})
  }
  
  render() {
    return (
      <div className='addContact'>
        <h3 className='addContactTitle'>Add Contact</h3>
        <form onSubmit={this.HandleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              placeholder='Enter your name'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='phone' className='form-label'>
              Phone Number
            </label>
            <input
              type='number'
              className='form-control'
              id='phone'
              name='phone'
              placeholder='Enter phone number'
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='Enter your email'
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className='mb-3'>
            <button className='btn btn-success'>Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
