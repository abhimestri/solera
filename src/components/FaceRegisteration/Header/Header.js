import React, { Component } from 'react'
import Badge from '@material-ui/core/Badge';

class Header extends Component{
    render(){
        return(
            <div className="w-full flex shadow-lg justify-end">
                <button className="mr-6 mt-5 text-primary font-light rounded-full px-8 h-9 border-sm border-primary"> Subjects </button>
                <input 
                    className="mr-16 mt-5 rounded-full text-primary font-thin border-xsm outline-none border-border w-4/12 h-9 pl-6 placeholder-primary" 
                    placeholder="Enter book, title, subject, author"
                />
                <div className="mr-10 mt-4">
                    <Badge color="secondary" overlap="circle" badgeContent={0} >
                        <div className="rounded-full h-10 bg-secondary w-10">
                            {/* my svg icon */}
                        </div>
                    </Badge>
                </div>
                <div className="mr-10 mt-4">
                    <Badge color="secondary" overlap="circle" badgeContent=" ">
                        <div className="rounded-full h-10 bg-secondary w-10">
                            {/* my svg icon */}
                        </div>
                    </Badge>
                </div>
                <div className="flex h-14 mt-5">
                    <p className="mt-2 h-8 font-thin text-primary">Student</p>
                    <div className="w-0.5 h-6 mr-2 ml-2 mt-2 bg-primary"></div>
                    <p className="mr-10 mt-2 text-secondary">Educator</p>
                </div>
            </div>
        )
    }
}

export default Header