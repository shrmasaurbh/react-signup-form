import React from 'react';
import {emailVerification, nameVerification, dobVerification, phoneVerification} from '../utils/validation-utils';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone:"",
      dob: "",
      error: ""
    }
    this.changeName  = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeDob   = this.changeDob.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    this.setError = this.setError.bind(this);
    this.clearError = this.clearError.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.error);
  }

  changeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  changePhone(event) {
    this.setState({
      phone: event.target.value
    });
  }

  changeDob(event) {
    this.setState({
      dob: event.target.value
    });
  }

  clearError() {
    this.setState({
      error: null
    })
  }

  setError(error) {
    this.setState({
      error: error
    });
    if(this.error) {
      clearTimeout(this.error);
    }
    this.error = setTimeout(this.clearError, 5000);
  }

  submitInfo() {
    const {name, phone, dob, email} = this.state;
    if(!nameVerification(name)) {
      this.setError("Invalid Name, name must have 4 to 12 letters.");
      return;
    }
    if(!dobVerification(dob)) {
      this.setError("Invalid Date of Birth, user must be more 18 years old.");
      return;
    }
    if(!emailVerification(email)) {
      this.setError("Invalid Email Address.");
      return;
    }
    if(!phoneVerification(phone)) {
      this.setError("Invalid Phone number.");
      return;
    }
  }

  render() {
    const {name, dob, phone, email, error} = this.state;
    return(
      <div className = "inputForm">
        <h3>Input Form</h3>
        <div className = "inputField">
          <label>Name</label>
          <input type = "text" value = {name} onChange = {this.changeName}/>
        </div>
        <div className = "inputField">
          <label>Date of Birth</label>
          <input type = "date" value = {dob} onChange = {this.changeDob}/>
        </div>
        <div className = "inputField">
          <label>Email</label>
          <input type = "email" value = {email} onChange = {this.changeEmail}/>
        </div>
        <div className = "inputField">
          <label>Phone</label>
          <input type = "text" value = {phone} onChange = {this.changePhone}/>
        </div>
        {error?<div className = "errMsg">{error}</div>:null}
        <div className = "actions">
          <button onClick = {this.submitInfo}>Submit</button>
        </div>
      </div>
    );
  }
}


export default InputForm;
