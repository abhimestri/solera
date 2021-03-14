import React, { Component } from 'react'
import Badge from '@material-ui/core/Badge';
import { ReactComponent as NotificationIcon } from '../../../assets/images/notificationIcon.svg'
import { ReactComponent as SearchIconIcon } from '../../../assets/images/searchIcon.svg'
import Menu from '@material-ui/icons/Menu';
import Aux from '../../../HOC/aux'
class Header extends Component{
    render(){
        return(
            <Aux>
            <Menu className="absolute mt-0 grid w-14 h-14 mt-3 sm:hidden"/>
            <div className="w-full flex shadow-lg justify-end sm:justify-end">
                <button className="hidden sm:block mt-5 mr-12 text-primary font-light rounded-full px-8 h-9 border-sm border-primary"> Subjects </button>
                <SearchIconIcon className="-ml-4 absolute sm:relative mt-7 -mr-10"/>
                <input 
                    className="hidden sm:block mt-5 mr-16 rounded-full text-primary font-thin border-xsm outline-none border-border w-4/12 h-9 pl-14 placeholder-primary" 
                    placeholder="Enter book, title, subject, author"
                />
                <div className="hidden sm:block mr-10 mt-4">
                    <Badge color="secondary" overlap="circle" badgeContent={0} >
                        <NotificationIcon/>
                    </Badge>
                </div>
                <div className="hidden sm:block mr-10 mt-4">
                    <Badge color="secondary" overlap="circle" badgeContent=" ">
                        <div className="rounded-full h-10 bg-secondary w-10">
                            {/* my svg icon */}
                        </div>
                    </Badge>
                </div>
                <div className="flex h-14 mt-5">
                    <p className="hidden sm:block mt-2 h-8 font-thin text-primary">Student</p>
                    <div className="hidden sm:block w-0.5 h-6 mr-2 ml-2 mt-2 bg-primary"></div>
                    <p className="hidden sm:block mr-10 mt-2 text-secondary">Educator</p>
                </div>
            </div>
            </Aux>
        )
    }
}

export default Header