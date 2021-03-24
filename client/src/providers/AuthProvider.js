import React from 'react'

// createContext = > return Provider and consumer
export const AuthContext = React.createContext()


// either use this or useContext hook
export const AuthConsumer = AuthContext.Consumer


class AuthProvider extends React.Component{

  
  state =  { user: {name:'Erin', age:28}, x: 'tada' }


  render(){
    return(
      <AuthContext.Provider value={this.state}>
          {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider