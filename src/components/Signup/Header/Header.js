import React, { Component } from 'react'

class Header extends Component{
    render(){
        return(
            <div className="w-full flex shadow-lg justify-end">
                <div className="h-14 mt-2">
                    <button className="rounded-full mr-4 py-1.5 px-8 text-WH font-thin bg-primary">Login</button>
                    <button className="rounded-full mr-4 py-1.5 px-8 border-sm border-primary">Signup</button>
                </div>
            </div>
        )
    }
}

export default Header