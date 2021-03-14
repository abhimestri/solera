import React,{ Component } from 'react'
import Aux from '../../HOC/aux'
import { Link } from 'react-router-dom'
import Header from '../Signup/Header/Header'
import { ReactComponent as Glogo } from '../../assets/images/image.svg'
import { ReactComponent as Facebooklogo } from '../../assets/images/facebook.svg'
import { ReactComponent as Applelogo } from '../../assets/images/apple.svg'
import { ReactComponent as Linkdinlogo } from '../../assets/images/linkdin.svg'
class SignIn extends Component{

    render(){
        return(
            <Aux>
                <Header/>
                <div className="grid justify-items-stretch mt-10 m-auto h-full max-w-xl">
                    <p className="justify-self-center font-light mt-10 mb-20 text-3xl">
                            Log in
                    </p>
                    <input className="justify-self-center rounded-full font-extralight text-extraDarkPrimary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-extraDarkPrimary" required placeholder="Email"></input>
                    <input className="justify-self-center rounded-full font-extralight text-extraDarkPrimary border-xsm outline-none border-border w-3/4 mb-10 h-4/6 pl-8 placeholder-extraDarkPrimary" required placeholder="Password"></input>
                    <Link to="/forgotpswd" className="text-xs text-extraDarkPrimary font-extralight justify-self-end mr-20 mt-3 mb-7">Forgot Password</Link>
                    <div className="flex justify-self-center">
                        <div className="h-light w-36 mt-3 bg-gradient-to-l from-blue-700"></div>
                        <p className="text-primary ml-10 mr-10">Or</p>
                        <div className="h-light w-36 mt-3 bg-gradient-to-r from-blue-700"></div>
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
                    
                    <Link className="justify-self-center mt-10 rounded-full py-1.5 px-14 bg-primary outline-none text-WH font-thin">
                        Next
                    </Link>
                </div>
            </Aux>

        )
    }
}
export default SignIn