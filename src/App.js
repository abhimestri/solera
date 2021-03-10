import { Component } from 'react';
import Signup from './components/Signup/Signup' 
import Aux from './HOC/aux'
import { Route } from 'react-router-dom'
import Signin from './components/login/Signin'
class App extends Component {
  render(){
    return (
      <Aux>
        <Route path="/" exact  component={Signup}/>
        <Route path="/signin" exact  component={Signin}/>
      </Aux>
    );
  }
}

export default App;
