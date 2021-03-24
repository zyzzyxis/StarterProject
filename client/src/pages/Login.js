import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Form, Header } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'

const Login =(props)=> {
  const {handleLogin} = useContext(AuthContext)
  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('12345678')
  const history = useHistory()

  handleSubmit=(e)=>{
    e.preventDefault()
    console.log({email, password})
    handleLogin({email, password}, history)
  }

  return (
    <>
    <Header>Login</Header>
    <Form onSubmit={handleSubmit}>
      <Form.Input
        autoFocus
        required
        label='email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      />
       <Form.Input
        required
        label='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
      <Form.Button>Login</Form.Button>
    </Form>
    </>
  )
}

export default Login