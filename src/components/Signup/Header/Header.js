import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div className="w-full flex shadow-lg justify-end">
                <div className="h-14 mt-4">
                    <Link to='/signin'className="rounded-full mr-4  py-1.5 px-8 text-WH font-thin bg-primary">Login</Link>
                    <Link to='/' className="rounded-full mr-4 py-1.5 px-8 border-sm border-primary">Signup</Link>
                </div>
            </div>
        )
    }
}

export default Header