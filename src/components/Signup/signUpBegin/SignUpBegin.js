import React,{ Component } from 'react'
import Aux from '../../../HOC/aux'
import { Link } from 'react-router-dom'
import classes from './SignUpBegin.module.css'
import { ReactComponent as Avatar} from '../../../assets/images/AvatarIcon.svg'
import { ReactComponent as InstitutionIcon} from '../../../assets/images/InstitutionIcon.svg'
import { ReactComponent as EducatorIcon} from '../../../assets/images/EducatorIcon.svg'

class SignUpBegin extends Component{

    render(){
        return(
            <Aux>
                <div className="grid justify-items-center h-full">
                    <p className="font-light mt-16 mb-20 text-3xl">
                            Sign up
                    </p>
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-2 gap-8 lg:grid-cols-3 gap-12">
                        <div className="h-2/3 md:h-32 lg:w-72 h-64">
                            <div className="w-80 h-32 rounded-large border-2 border-primary flex justify-center">
                                <Avatar className="mt-5"/>
                                <p className="mt-12 ml-5">As Student</p>
                            </div>
                            <label className={classes.container}>
                                <input type="checkbox"/>
                                <span className={classes.checkmark}></span>
                            </label> 
                        </div>
                        <div className="h-2/3 md:h-32 lg:w-72 h-64">
                            <div className="w-80 h-32 rounded-large border-2 border-primary flex justify-center">
                                <EducatorIcon className="mt-5"/>
                                <p className="mt-12 ml-5">As Educator</p>
                            </div>
                            <label className={classes.container}>
                                <input type="checkbox"/>
                                <span className={classes.checkmark}></span>
                            </label> 
                        </div>
                        <div className="h-2/3 lg:w-72 h-64">
                            <div className="w-80 h-32 rounded-large border-2 border-primary flex justify-center">
                                <InstitutionIcon className="mt-5"/>
                                <p className="mt-12 ml-5">As Institution</p>
                            </div>
                            <label className={classes.container}>
                                <input type="checkbox"/>
                                <span className={classes.checkmark}></span>
                            </label> 
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-28 m-auto h-full max-w-xl">
                    <Link to={{
                        pathname:'/signup1',
                        search : ''
                    }} onClick={this.incrPos} className="block sm:w-44 text-center h-10 rounded-full py-2 px-14 bg-primary outline-none text-WH font-thin">
                        Next
                    </Link>
                </div>
            </Aux>

        )
    }
}

export default SignUpBegin