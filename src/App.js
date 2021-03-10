import { Component } from 'react';
import Signup from './components/Signup/Signup' 
import Aux from './HOC/aux'
import { Route,Switch } from 'react-router-dom'
import Signin from './components/login/Signin'
class App extends Component {
  render(){
    return (
      <Aux>
          <Switch>
            <Route path="/signin" exact  component={Signin}/>
            <Route path="/" component={Signup}/>
          </Switch>
      </Aux>
    );
  }
}

export default App;
