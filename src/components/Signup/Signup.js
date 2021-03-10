import React, { Component } from 'react'
import Signup1 from './BodySignup1/bodySignup1'
import Signup2 from './BodySignup2/bodySignup2'
import Signup3 from './BodySignup3/bodySignup3'
import Signup4 from './BodySignup4/bodySignup4'
import Tracker from '../Signup/Success-tracker/tracker'
import Aux from '../../HOC/aux'
import { Route,Switch } from 'react-router-dom'
import { connect } from 'react-redux'


class Signup extends Component{

    render(){
        return(
            <Aux>
                <div>
                    <Switch>
                        <Route path="/signup4"  component={Signup4}/>
                        <Route path="/signup3"  component={Signup3}/>
                        <Route path="/signup2"  component={Signup2}/>
                        <Route path="/" component={Signup1}/>
                    </Switch>
                </div>
                <Tracker track={this.props.curTrackPos}/>
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