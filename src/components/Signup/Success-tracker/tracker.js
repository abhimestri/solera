import React, { Component } from 'react'

class Header extends Component{
    render(){
        return(
            <div className="grid justify-items-center absolute top-1/5 left-default w-20">
                <p className="mb-5 text-5xl text-gradient bg-gradient-to-r from-red-600">1</p>
                <div className="mb-6 rounded-full h-2 w-2 flex bg-gradient-to-r from-red-500"></div>
                <div className="mb-2 rounded-full h-2 w-2 flex bg-gradient-to-r from-red-500"></div>
                <p className="mb-6 text-5xl text-gradient bg-gradient-to-r from-red-600">2</p>
                <div className="mb-6 rounded-full h-2 w-2 flex bg-gradient-to-r from-red-500"></div>
                <div className="mb-2 rounded-full h-2 w-2 flex bg-gradient-to-r from-red-500"></div>
                <p className="mb-6 text-9xl text-gradient bg-gradient-to-r from-red-500">3</p>
                <div className="mb-6 rounded-full h-2 w-2 flex bg-gradient-to-r from-red-400"></div>
                <div className="mb-6 rounded-full h-2 w-2 flex bg-gradient-to-r from-red-400"></div>
                <p className="mb-6 text-5xl text-gradient bg-gradient-to-r from-red-300">4</p>
            </div>
        )
    }
}

export default Header