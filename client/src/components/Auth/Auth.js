import React from 'react'
import Input from '../../components/UI/Input/Input'
import classes from './Auth.css'

class Auth extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      message: ''
    }
  }

  handleInputChange = e => {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    fetch("/api/auth/login", {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      if(res.status === 200){
        this.props.history.push('/overview')
        console.log(this.props)
        console.log(res)
      } else if(res.status === 401){
        this.setState({message: 'you are not authorized'})
      } else {
        const error = new Error(res.error)
        throw error
      }
    })
    .catch(err => {
      console.error(err)
      alert('Error')
    })
  }

  render(){
    return (
      <div>
        <div className={classes.Auth}>
          <h3>Авторизация</h3>

          <form onSubmit={this.submitHandler}>
            <Input
               label="email"
               name="email"
               value={this.state.email}
               onChange={this.handleInputChange}
             />

            <Input
               label="Password"
               name="password"
               value={this.state.password}
               onChange={this.handleInputChange}
               errorMessage
             />

            <button
              type="success"
              onClick={this.loginHandler}
            >
            войти
            </button>

            <button
              type="primery"
              onClick={this.registerHandler}
            >
            зарегистрироваться
            </button>
            <span className={classes.error}>{this.state.message}</span>
          </form>
        </div>
      </div>
    )
  }
}

export default Auth
