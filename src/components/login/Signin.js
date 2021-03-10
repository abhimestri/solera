import React,{ Component } from 'react'
import Aux from '../../HOC/aux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class BodySignup1 extends Component{

    componentDidMount(){
        const temp = this.props.history.location.search
        if(temp === ""){
            this.props.onChangeTrackerPos(1)
        }
    }

    render(){
        return(
            <Aux>
                <div className="grid justify-items-stretch mt-10 m-auto h-full max-w-xl">
                    <p className="justify-self-center font-light mt-10 mb-20 text-3xl">
                            Log in
                    </p>
                    <input className="justify-self-center rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-primary" required placeholder="*Email"></input>
                    <input className="justify-self-center rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-primary" required placeholder="*Password"></input>
                    <p>Forgot</p>
                    <div className="flex justify-self-center">
                        <div className="h-light bg-darkBg w-36 mt-3"v></div>
                        <p className="text-primary ml-10 mr-10">Or</p>
                        <div className="h-light bg-darkBg w-36 mt-3"></div>
                    </div>
                    <div className="justify-self-center flex mt-10 max-w-xl ">
                        <div className="m-5 w-9 h-9 bg-primary"></div>
                        <div className="m-5 w-9 h-9 bg-primary"></div>
                        <div className="m-5 w-9 h-9 bg-primary"></div>
                        <div className="m-5 w-9 h-9 bg-primary"></div>
                    </div>
                    <Link className="justify-self-center mt-10 rounded-full py-1.5 px-14 bg-primary outline-none text-WH font-thin">
                        Next
                    </Link>
                </div>
            </Aux>

        )
    }
}
const mapDispatchToProps = dispatch => {
    return { 
        onChangeTrackerPos : (pos) => dispatch({type : "TRACKER_POS" , changePos : pos })
    }
}

export default connect(null,mapDispatchToProps)(BodySignup1)