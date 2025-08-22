import React from 'react';

export default class App extends React.Component {
  state = {
    email: '',
    isAgreeWithTerms: false,
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleCheckboxChange = (e) => {
    this.setState({[e.target.name]: e.target.checked})
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    if (this.validateEmail() && this.checkConsent()) {
      if (this.state.isAgreeWithTerms) {
        alert('The form has been successfully submitted')
      }
    }
  }

  validateEmail = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
      alert('Uncorrect email');
      return false
    }
    return true
  }

  checkConsent = () => {
    if (!this.state.isAgreeWithTerms) {
      alert('Your consent is required');
      return false
    }
    return true
  }
  
  render() {
    const { email, isAgreeWithTerms } = this.state;

        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                        onChange={this.handleCheckboxChange}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.handleSubmitForm}>Send</button>
            </div>
        );
  }
}
