import { Component } from 'react';
import Signup from './components/Signup/Signup' 
import Aux from './HOC/aux'
import { Route,Switch } from 'react-router-dom'
import Signin from './components/login/Signin'
import Forgotpassword from './components/login/ForgotPswd/ForgotPassword'
import FaceRegister from './components/FaceRegisteration/FaceRegister'
class App extends Component {
  render(){
    return (
      <Aux>
          <Switch>
            <Route path="/faceregister"  component={FaceRegister} />
            <Route path="/forgotpswd" component={Forgotpassword}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/" component={Signup}/>
          </Switch>
      </Aux>
    );
  }
}

export default App;
