import React,{ Component } from 'react'
import Aux from '../../../HOC/aux'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

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
                <div className="grid justify-items-center mt-10 m-auto h-full max-w-xl">
                    <p className="font-light mt-10 mb-20 text-3xl">
                            Sign up
                    </p>
                    <input className="rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-primary" placeholder="*First name"></input>
                    <input className="rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-primary" placeholder="*Last name"></input>
                    <div className="flex">
                    <label className="align-self-start" for="birthday">*Birthday:</label>
                    <input type="date" id="birthday" name="birthday"></input>
                    </div>
                    <div className="flex">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1">
                        <div className="flex">
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </div>
                    </RadioGroup>
                    </div>
                </div>
                <div className="mt-40 flex mt-10 m-auto h-full max-w-xl ">
                    <Link to={{
                        pathname:'/',
                    }} className="text-primary rounded-full ml-16 py-1.5 px-14 border-sm border-primary">Back</Link>
                    <Link to={{
                        pathname:'/signup3',
                        search : 'page=3'
                    }} className="ml-auto mr-16 rounded-full mr-4 py-1.5 px-14 bg-primary outline-none text-WH font-thin">
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