import React, { Component } from 'react'
import SignUpBegin from './signUpBegin/SignUpBegin'
import Signup1 from './BodySignup1/bodySignup1'
import Signup2 from './BodySignup2/bodySignup2'
import Signup3 from './BodySignup3/bodySignup3'
import Signup4 from './BodySignup4/bodySignup4'
import Tracker from '../Signup/Success-tracker/tracker'
import Aux from '../../HOC/aux'
import { Route,Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header/Header'

class Signup extends Component{
    componentDidMount(){
        console.log()
    }
    render(){
        var showTracker;
        if(this.props.history.location.pathname !== '/'){
            showTracker = <Tracker track={this.props.curTrackPos}/>
        }else{
            showTracker = null
        }
        return(
            <Aux>
                <Header/>
                <div>
                    <Switch>
                        <Route path="/signup4"  component={Signup4}/>
                        <Route path="/signup3"  component={Signup3}/>
                        <Route path="/signup2"  component={Signup2}/>
                        <Route path="/signup1"  component={Signup1}/>
                        <Route path="/" component={SignUpBegin}/>
                    </Switch>
                </div>
                {showTracker}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        curTrackPos : state.currentTrackerPosition
    }
}

export default connect(mapStateToProps)(Signup)