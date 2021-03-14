import React, { Component } from 'react'
import classes from './tracker.module.css'
import Aux from '../../../HOC/aux'
class Tracker extends Component{
  
    render(){
      console.log("in tracker : " + this.props.track)
        return(
                <Aux>
                    <div className={classes.tracker}>
                        <div className="grid justify-items-center absolute top-1/5 mt-10 left-default w-20">
                            <p className={`mb-5 ${this.props.track === 1 ? 'text-9xl' : 'text-5xl'} TrackerText`}>1</p>
                            <div className="mb-6 rounded-full h-2 w-2"></div>
                            <div className="mb-2 rounded-full h-2 w-2 "></div>
                            <p className={`mb-5 ${this.props.track === 2 ? 'text-9xl' : 'text-5xl'}`}>2</p>
                            <div className="mb-6 rounded-full h-2 w-2 "></div>
                            <div className="mb-2 rounded-full h-2 w-2 "></div>
                            <p className={`mb-5 ${this.props.track === 3 ? 'text-9xl' : 'text-5xl'}`}>3</p>
                            <div className="mb-6 rounded-full h-2 w-2 "></div>
                            <div className="mb-2 rounded-full h-2 w-2 "></div>
                            <p className={`mb-5 ${this.props.track === 4 ? 'text-9xl' : 'text-5xl'}`}>4</p>
                        </div>
                    </div>
                    <div className={classes.trackerForMobile}>
                        <div className="flex">
                            <p className={`ml-5 ${this.props.track === 1 ? 'text-7xl -mt-4' : 'text-3xl'} TrackerText`}>1</p>
                            <div className="ml-6 mt-3 rounded-full h-2 w-2 bg-secondary"></div>
                            <div className="ml-2 mt-3 rounded-full h-2 w-2 bg-secondary"></div>
                            <p className={`ml-5 ${this.props.track === 2 ? 'text-7xl -mt-4' : 'text-3xl'}`}>2</p>
                            <div className="ml-6 mt-3 rounded-full h-2 w-2 bg-secondary"></div>
                            <div className="ml-2 mt-3 rounded-full h-2 w-2 bg-secondary"></div>
                            <p className={`ml-5 ${this.props.track === 3 ? 'text-7xl -mt-4' : 'text-3xl'}`}>3</p>
                            <div className="ml-6 mt-3 rounded-full h-2 w-2 bg-secondary"></div>
                            <div className="ml-2 mt-3 rounded-full h-2 w-2 bg-secondary"></div>
                            <p className={`ml-5 ${this.props.track === 4 ? 'text-7xl -mt-4' : 'text-3xl'}`}>4</p>
                        </div>
                    </div>
                </Aux>
        )
    }
}

export default Tracker
