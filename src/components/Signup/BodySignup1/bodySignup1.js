import React,{ Component } from 'react'
import Aux from '../../../HOC/aux'
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Glogo } from '../../../assets/images/image.svg'
import { ReactComponent as Facebooklogo } from '../../../assets/images/facebook.svg'
import { ReactComponent as Applelogo } from '../../../assets/images/apple.svg'
import { ReactComponent as Linkdinlogo } from '../../../assets/images/linkdin.svg'
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
                            Sign up
                    </p>
                    <input className="justify-self-center rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-primary" required placeholder="*Email"></input>
                    <input className="justify-self-center rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-primary" required placeholder="*Password"></input>
                    <p className="relative ml-20 -mt-4 mb-5 text-xs font-extralight">Minimum 8 symbols</p>
                    <input className="justify-self-center rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-primary" required placeholder="*Confirm Password"></input>
                    <div className="flex justify-self-center w-3/4">
                        <Checkbox className="justify-self-end" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                        <p className="justify-self-end text-xs font-extralight">
                            By pressing NEXT you are consenting to the Terms &amp conditions
                            <a href="/" >[link]</a> and privacy policy <a href="/">[link]</a>
                        </p>
                    </div>
                    <div className="justify-self-center flex mt-10 max-w-xl ">
                        <div className="m-5 w-12 h-12 p-1.5 border-sm border-gray-400">
                            <Glogo/>
                        </div>
                        <div className="m-5 w-12 h-12 p-1.5 border-sm border-gray-400">
                            <Facebooklogo/>
                        </div>
                        <div className="m-5 w-12 h-12 p-1.5 border-sm border-gray-400">
                            <Applelogo/>
                        </div>
                        <div className="m-5 w-12 h-12 p-1.5 border-sm border-gray-400">
                            <Linkdinlogo/>
                        </div>
                    </div>
                    <Link to={{
                        pathname:'/signup2',
                        search : 'page=2'
                    }} className="justify-self-center mt-10 rounded-full py-1.5 px-14 bg-primary outline-none text-WH font-thin">
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