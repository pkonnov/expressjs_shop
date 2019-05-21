import React from 'react'
import Input from '../../components/UI/Input/Input'
import classes from './Auth.css'

class Auth extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  // componentDidMount(){
  //   fetch('http://localhost:3000/api/auth/login')
  //     .then(res => res.text())
  //     .then(res => this.setState({message: res}))
  // }

  handleInputChange = e => {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    fetch("http://localhost:3000/api/auth/login", {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      if(res.status === 200){
        this.props.history.push('/')
        console.log(res)
      }else{
        const error = new Error(res.error)
        throw error
      }
    })
    .catch(err => {
      console.error(err)
      alert('Error logging in please try again')
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
            {this.state.message}
          </form>
        </div>
      </div>
    )
  }
}

export default Auth
