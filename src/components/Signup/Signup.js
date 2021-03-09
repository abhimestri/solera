import React, { Component } from 'react'
import Header from './Header/Header';
import Body from '../Signup/body/body'
import Tracker from '../Signup/Success-tracker/tracker'
import Aux from '../../HOC/aux'

class Signup extends Component{
    render(){
        return(
            <Aux>
                <div>
                    <Header/>
                    <Body/>
                </div>
                <Tracker/>
            </Aux>
        )
    }
}

export default Signup