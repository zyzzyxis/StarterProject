import './App.css';
import Home from './pages/Home';
import {Switch, Route} from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import About from './pages/About';
import PRIMARY_COLOR from './styles'
import ComponentDemo from './pages/ComponentDemo';
import Register from './pages/Register';
import ConnectedFetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
    <h1> Hi </h1>
    <NavBar />
    <ConnectedFetchUser>
    <Container>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/register' component={Register}/>
      <Route path='/componentDemo' component={ComponentDemo}/>
      <ProtectedRoute exact path="/" component={Home} />
    </Switch>
    </Container>
    </ConnectedFetchUser>
    </>
  );
}

export default App;
