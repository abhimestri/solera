import { Component } from 'react';
import Signup from './components/Signup/Signup' 
import Aux from './HOC/aux'
class App extends Component {
  render(){
    return (
      <Aux>
        <Signup/>
      </Aux>
    );
  }
}

export default App;
