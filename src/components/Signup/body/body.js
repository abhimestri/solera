import React,{ Component } from 'react'
import Aux from '../../../HOC/aux'
class Body extends Component{
    render(){
        return(
            <Aux>
                <div className="grid justify-items-center mt-10 m-auto h-full max-w-xl">
                    <p className="font-light mt-10 mb-20 text-3xl">
                            Sign up
                    </p>
                    <input className="rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-primary" placeholder="University \ school"></input>
                    <input className="rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-primary" placeholder="Program/School witch in University"></input>
                    <select className="rounded-full text-primary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8">
                        <option className="text-primary" selected>Grade</option>
                    </select>
                </div>
                <div className="mt-40 flex mt-10 m-auto h-full max-w-xl ">
                    <button className="text-primary rounded-full ml-16 py-1.5 px-14 border-sm border-primary">Back</button>
                    <button className="ml-auto mr-16 rounded-full mr-4 py-1.5 px-14 bg-primary outline-none text-WH font-thin">Next</button>
                </div>
            </Aux>

        )
    }
}

export default Body