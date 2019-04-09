import React from 'react'
import Logo from '../common/logo'
import Form from '../common/form'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      name: props.user.name
    }
  }
  onChange = event => {
    const disabled = event.target.value.length === 0
    this.setState({ disabled })
  }
  onSubmit = event => {
    event.preventDefault()
    const form = event.target
    const password = form.elements.password.value
    this.props.onSubmit({ password })
  }
  render() {
    return (
      <div className="login-screen">
        <Logo big="true" />

        <div className="welcome">Welcome back, {this.state.name}!</div>

        <Form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            type="password"
            name="password"
            placeholder="enter your password"
          />

          <button type="submit" disabled={this.state.disabled}>
            Log in
          </button>
        </Form>
      </div>
    )
  }
}

export default LoginScreen
