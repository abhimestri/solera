import React,{ Component } from 'react'
import Aux from '../../../HOC/aux'
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
                <div className="grid justify-items-center h-full max-w-xl mt-32 mobile:mt-32 sm:mt-10 m-auto">
                    <p className="font-light mt-10 mb-20 text-3xl">
                            Sign up
                    </p>
                    <input className="rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-primary" placeholder="University \ school"></input>
                    <input className="rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-primary" placeholder="Program/School witch in University"></input>
                    <select className="rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8">
                        <option className="text-primary" selected>Grade</option>
                    </select>
                </div>
                <div className="mb-10 mobile:flex mt-40 m-auto h-full max-w-xl">
                    <Link to={{
                        pathname:'/signup2',
                        search : 'page=2'
                    }} className="block mr-16 mb-5 sm:w-98 text-primary text-center rounded-full h-10 ml-16 py-2 px-14 border-sm border-primary">Back</Link>
                    <Link to={{
                        pathname:'/signup4',
                        search : 'page=4'
                    }} onClick={this.incrPos} className="ml-16 block sm:w-98 text-center mr-16 h-10 rounded-full py-2 px-14 bg-primary outline-none text-WH font-thin">
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