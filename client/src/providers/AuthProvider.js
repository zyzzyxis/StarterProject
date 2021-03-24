import axios from 'axios'
import React from 'react'

// createContext = > return Provider and consumer
export const AuthContext = React.createContext()


// either use this or useContext hook
export const AuthConsumer = AuthContext.Consumer


class AuthProvider extends React.Component{

  
  state =  { user: null }

  handleRegister = (user, history) => {
    axios.post('/api/auth', user).then(res => {
        this.setState({user: res.data.data})
        history.push('/')
    }).catch(err=>{
        console.log(err)
    })
   
  }

  handleLogin = async(user, history) => {
    try{
      let res = await axios.post('/api/auth/sign_in', user)
      this.setState({user: res.data.data})
      history.push('/')
    } catch(err) {
      console.log(err)
      alert('error in Login')
    }
  }
  handleLogout = (history) => {
    axios.delete('/api/auth/sign_out').then(res=>{
      this.setState({user:null})
      history.push('/')
    }).catch(err=>{
      console.log(err)
      alert('error in Logout')
    })
  }

  render(){
    return(
      <AuthContext.Provider value={
        {...this.state, 
          handleRegister: this.handleRegister,
          handleLogout: this.handleLogout,
          handleLogin: this.handleLogin,

        }}>
          {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider