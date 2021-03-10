import React, { Component } from 'react'
import classes from './tracker.module.css'
class Tracker extends Component{
  
    render(){
      console.log("in tracker : " + this.props.track)
        return(
                <div className={classes.tracker}>
                    <div className="grid justify-items-center absolute top-1/5 left-default w-20">
                        <p className={`mb-5 ${this.props.track === 1 ? 'text-9xl' : 'text-5xl'} text-gradient bg-gradient-to-r from-red-600`}>1</p>
                        <div className="mb-6 rounded-full h-2 w-2 flex bg-gradient-to-r from-red-500"></div>
                        <div className="mb-2 rounded-full h-2 w-2 flex bg-gradient-to-r from-red-500"></div>
                        <p className={`mb-5 ${this.props.track === 2 ? 'text-9xl' : 'text-5xl'} text-gradient bg-gradient-to-r from-red-600`}>2</p>
                        <div className="mb-6 rounded-full h-2 w-2 flex bg-gradient-to-r from-red-500"></div>
                        <div className="mb-2 rounded-full h-2 w-2 flex bg-gradient-to-r from-red-500"></div>
                        <p className={`mb-5 ${this.props.track === 3 ? 'text-9xl' : 'text-5xl'} text-gradient bg-gradient-to-r from-red-600`}>3</p>
                        <div className="mb-6 rounded-full h-2 w-2 flex bg-gradient-to-r from-red-400"></div>
                        <div className="mb-6 rounded-full h-2 w-2 flex bg-gradient-to-r from-red-400"></div>
                        <p className={`mb-5 ${this.props.track === 4 ? 'text-9xl' : 'text-5xl'} text-gradient bg-gradient-to-r from-red-600`}>4</p>
                    </div>
                </div>
        )
    }
}

export default Tracker
