import React,{ Component } from 'react'
import Aux from '../../../HOC/aux'
import classes from '../body.module.css'
import Tracker from '../../Signup/Success-tracker/tracker'
import  FaceRecognizationLogo  from '../../../assets/images/IMG/rec.png'
import  { connect } from 'react-redux'

class FaceRegisterBody extends Component{
    componentDidMount(){
        const temp = this.props.history.location.pathname.split('/')[2];
        console.log("in faceregister " + typeof(temp));
        if(temp === "2"){
            console.log("in if")
            this.props.onChangeTrackerPos(2)
        }
    }
    render(){
        return(
            <Aux>
                <div className="mb-20">
                    <div className="grid justify-items-center mt-20 m-auto h-full max-w-xl sm:mt-10">
                        <p className="font-light mt-10 text-4xl text-center">
                                    Register your face signature
                        </p>
                        <p className="font-light mt-4 text-sm text-center w-2/3 sm: w-100">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt
                        </p>
                    </div>
                    <div className="m-auto mt-10 bg-secondary h-64 w-4/5 overflow-hidden rounded-xtralg sm:w-98 h-72">
                        <div className="grid justify-items-center bg-darkPrimary h-16 w-full">
                            <p className="text-center mt-3 text-sm text-WH w-72">
                                Slowly turn your face in different direction 
                                after pressing the start button
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="grid justify-center mt-10">
                        <img src={FaceRecognizationLogo} alt="none" />
                    </div>
                    <Tracker track={this.props.curTrackPos}/>
                </div>
            </Aux>

        )
    }
}
const mapStateToProps = state => {
    return {
        curTrackPos : state.currentTrackerPosition
    }
}
const mapDispatchToProps = dispatch => {
    return { 
        onChangeTrackerPos : (pos) => dispatch({type : "TRACKER_POS" , changePos : pos })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FaceRegisterBody)