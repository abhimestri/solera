import React,{ Component } from 'react'
import Aux from '../../../HOC/aux'
import { Link } from 'react-router-dom'

class ForgotPassword extends Component{

    render(){
        return(
            <Aux>
                <div className="grid justify-items-stretch mt-10 m-auto h-full max-w-xl">
                    <p className="justify-self-center font-light mt-10 mb-10 text-4xl">Forgot Password?</p>
                    <p className="justify-self-center font-thin mb-16 text-lg w-80 text-center">Lorem ipsum dolor sit amet,consecuter adspiting elit</p>
                    <input className="justify-self-center rounded-full font-extralight text-extraDarkPrimary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-extraDarkPrimary" required placeholder="Email"></input>
                   
                    <Link className="justify-self-center mt-10 rounded-full py-1.5 px-14 bg-primary outline-none text-WH font-thin">
                        Restore
                    </Link>
                </div>
            </Aux>

        )
    }
}

export default ForgotPassword