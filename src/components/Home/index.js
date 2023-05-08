// Write your code here

import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isLogin: true}

  changeLogin = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    const Message = isLogin ? 'Welcome User' : 'Please Login'
    const Text = isLogin ? 'Logout' : 'Login'

    return (
      <div>
        <div className="container">
          <h1 className="heading">{Message}</h1>
          <button type="button" onClick={this.changeLogin}>
            {Text}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
