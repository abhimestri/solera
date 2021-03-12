import React,{ Component } from 'react'
import Aux from '../../../HOC/aux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './bodySignup4.module.css'
import classes from './bodySignup4.module.css'
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
                <div className="mt-32 sm:mt-20 overflow-y-auto overflow-x-hidden max-w-3xl md:grid justify-items-center mt-10 m-auto mb-0 h-xlg max-w-3xl">
                    <div className="h-10 mt-10 mb-9 grid justify-items-center">
                        <p className="font-light m-auto text-3xl">Sign up</p>
                        <p className="">Choose your subjects of interest</p>
                    </div>
                        <div className="mb-20 h-20">
                            <p className="ml-2 mb-2 text-primary">Economics</p>
                            <div className="grid grid-cols-2 gap-4 smtab:grid-cols-3">
                                <div className="w-44 sm: h-7 flex rounded-full mr-3 py-1.5 px-5 bg-lightBg outline-none font-thin">
                                    <p className="text-xs text-darkPrimary">Micro Economics</p>
                                    <label className={classes.container}>
                                            <input type="checkbox"/>
                                            <span className={classes.checkmark}></span>
                                    </label>                               
                                </div>
                                <div className="w-44 sm: h-7 flex rounded-full mr-3 py-1.5 px-5 bg-lightBg outline-none font-thin">
                                    <p className="text-xs text-darkPrimary">Macro Economics</p>
                                    <label className={classes.container}>
                                            <input type="checkbox"/>
                                            <span className={classes.checkmark}></span>
                                    </label>
                                </div>
                                <div className="w-44 mobile: h-7 flex rounded-full mr-3 py-1.5 px-5 bg-lightBg outline-none font-thin">
                                    <p className="text-xs text-darkPrimary">Neuroeconomics</p>
                                    <label className={classes.container}>
                                            <input type="checkbox"/>
                                            <span className={classes.checkmark}></span>
                                    </label>                                </div>
                            </div>
                        </div>
                        <div className="mb-5 h-20">
                            <p className="ml-2 mb-2 text-primary">Marketing</p>
                            <div className="grid grid-cols-2 gap-4 smtab:grid-cols-3">
                                <div className="w-44 sm: h-7 flex rounded-full mr-3 py-1.5 px-5 bg-lightBg outline-none font-thin">
                                    <p className="text-xs text-darkPrimary">Digital Marketing</p>
                                    <label className={classes.container}>
                                            <input type="checkbox"/>
                                            <span className={classes.checkmark}></span>
                                    </label>                                </div>
                                <div className="w-44 sm: h-7 flex rounded-full mr-3 py-1.5 px-5 bg-lightBg outline-none font-thin">
                                    <p className="text-xs text-darkPrimary">Trade Marketing</p>
                                    <label className={classes.container}>
                                            <input type="checkbox"/>
                                            <span className={classes.checkmark}></span>
                                    </label>                                </div>
                                <div className=" w-44 sm: h-7 flex rounded-full mr-3 py-1.5 px-5 bg-lightBg outline-none font-thin">
                                    <p className="text-xs text-darkPrimary">Personal MArketing</p>
                                    <label className={classes.container}>
                                            <input type="checkbox"/>
                                            <span className={classes.checkmark}></span>
                                    </label>                                </div>
                            </div>
                        </div>
                        <div className="cool"></div>
                </div>
                <div className="mb-10 mobile:flex mt-40 m-auto h-full max-w-xl">
                    <Link to={{
                        pathname:'/signup3',
                        search : 'page=3'
                    }} className="block mr-16 mb-5 sm:w-98 text-primary text-center rounded-full h-10 ml-16 py-2 px-14 border-sm border-primary">Back</Link>
                    <Link to={{
                        pathname:'/',
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