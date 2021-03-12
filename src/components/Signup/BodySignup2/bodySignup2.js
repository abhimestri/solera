import React,{ Component } from 'react'
import Aux from '../../../HOC/aux'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import classes from './bodySignup2.module.css'

class Body extends Component{

    componentDidMount(){
        const temp = this.props.history.location.search
        if(temp === ""){
            console.log("nothing")
        }else{
            const value = temp.toString().split('=')[1]
            this.props.onChangeTrackerPos(+value)

        }
    }

    render(){
        return(
            <Aux>
                <div className="grid justify-items-center h-full max-w-xl mt-32 mobile:mt-32 sm:mt-10 m-auto">
                    <p className="font-light mt-10 mb-20 text-3xl">
                            Sign up
                    </p>
                    <input className="rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-primary" placeholder="*First name"></input>
                    <input className="rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-primary" placeholder="*Last name"></input>
                    <div className="h-20 mb-20 mobile:flex sm:flex justify-items-start ml-20"> 
                        <p className="-ml-12 mt-3 text-primary mobile:mt-6 ml-10 mr-20">*Birthday:</p>
                        <input className="w-80 rounded-full text-primary border-xsm outline-none border-border mb-10 pl-8 placeholder-primary mr-10 mobile: mb-10 pl-8 placeholder-primary w-80 -ml-10 mt-4 h-3/6" type="date"></input>
                    </div>
                    <div className="mobile:flex -mt-10">
                        <label className="text-primary mr-16" component="legend">*Gender</label>
                        <RadioGroup aria-label="gender" name="gender1">
                            <div className="-ml-2 mt-4 mobile:flex ml-4 -mt-2">
                                <FormControlLabel className="text-primary" value="female" control={<Radio />} label="Female" />
                                <FormControlLabel className="text-primary" value="male" control={<Radio />} label="Male" />
                                <FormControlLabel className="text-primary" value="other" control={<Radio />} label="Other" />
                            </div>
                        </RadioGroup>
                    </div>
                </div>
                <div className="mb-10 mobile:flex mt-40 m-auto h-full max-w-xl">
                    <Link to={{
                        pathname:'/',
                    }} className="block mr-16 mb-5 sm:w-98 text-primary text-center rounded-full h-10 ml-16 py-2 px-14 border-sm border-primary">Back</Link>
                    <Link to={{
                        pathname:'/signup3',
                        search : 'page=3'
                    }} className="ml-16 block sm:w-98 text-center mr-16 h-10 rounded-full py-2 px-14 bg-primary outline-none text-WH font-thin">
                        Next
                    </Link>
                </div>
            </Aux>

        )
    }
}
const mapDispatchToprops = dispatch => {
    return{
        onChangeTrackerPos : (pos) => dispatch({type : "TRACKER_POS", changePos : pos})
    }
}
export default connect(null,mapDispatchToprops)(Body)