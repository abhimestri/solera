import React,{ Component } from 'react'
import Aux from '../../../HOC/aux'
import classes from '../body.module.css'
import { Link } from 'react-router-dom'
import Tracker from '../../Signup/Success-tracker/tracker'
import { ReactComponent as CorrectIcon } from '../../../assets/images/img2.svg'

class FaceRegisterBody extends Component{

    render(){
        return(
            <Aux>
                <div className="grid justify-items-center mb-24">
                    <div className="grid justify-items-center mt-10 m-auto h-full max-w-xl">
                        <div className={classes.title}>
                            <p className="font-light mt-10 text-4xl">
                                    Register your face signature
                            </p>
                        </div>
                        <p className="font-light mt-4 text-sm w-100 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt
                        </p>
                    </div>
                    <div className={classes.faceRecognizationModal}>
                        <div className="m-auto mt-10 bg-secondary h-72 w-98 overflow-hidden rounded-xtralg">
                            <div className="grid justify-items-center bg-darkPrimary h-16 w-98">
                                <p className="text-center mt-3 text-sm text-WH w-72">
                                    Slowly turn your face in different direction 
                                    after pressing the start button
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <CorrectIcon className="mt-10" />
                    <div className="mt-10 flex mt-10 m-auto h-full max-w-xl ">
                        <Link to={{
                            pathname:'/signup3',
                            search : 'page=3'
                        }} className="m-auto rounded-full py-1.5 px-14 bg-primary outline-none text-WH font-thin">
                            Next
                        </Link>
                    </div>
                    <Tracker/>
                </div>
            </Aux>

        )
    }
}
export default FaceRegisterBody