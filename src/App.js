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
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email);
    const isValidCheckbox = this.state.isAgreeWithTerms;

    if (!isValidEmail) {
      alert('Invalid email');
      return
    };

    if (!isValidCheckbox) {
      alert('Your consent is required');
      return
    };

    this.setState({email: '', isAgreeWithTerms: false});

    alert('The form has been successfully submitted')
  }
  
  render() {
    const { email, isAgreeWithTerms } = this.state;

        return (
            <form onSubmit={this.handleSubmitForm}>
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
                <button type='submit'>Send</button>
            </form>
        );
  }
}
