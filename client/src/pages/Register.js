import React, {useContext, useState} from 'react'
import { Form, Header } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'

const Register = () => {
  const {handleRegister} = useContext(AuthContext)
  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('12345678')
  const [passwordConfirmation, setPasswordConfirmation] = useState('12345678')

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log({email, password, passwordConfirmation})
    handleRegister({email, password, passwordConfirmation})
  }

  return (
    <>
    <Header>Register</Header>
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
       <Form.Input
        required
        label='passwordConfirmation'
        value={passwordConfirmation}
        onChange={(e)=> setPasswordConfirmation(e.target.value)}
      />
      <Form.Button>Register</Form.Button>
    </Form>
    </>
  )
}

export default Register