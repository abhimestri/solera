import React, { Component } from 'react'
import Aux from '../../HOC/aux'
import Header from './Header/Header'
import Body from './body/body'
import Body2 from './body2/body2'
import Body3 from './body3/body3'
import Body4 from './body4/body4'
import { Switch , Route } from 'react-router-dom'

class FaceRegister extends Component{
    render(){
        return(
            <Aux>
                <Header/>
                <Switch>
                    <Route path="/faceregister/2" component={Body2} />
                    <Route path="/faceregister/3" component={Body3} />
                    <Route path="/faceregister/4" component={Body4} />
                    <Route path="/faceregister" component={Body} />
                </Switch>
            </Aux>
        )
    }
}

export default FaceRegister