import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginButton = (props) => {

    const visitLogin = () => {
        fetch('http://localhost:4000/auth/steam');
    }

    return (
        <div>
            <h1>Login Page</h1>
            {/* <div onClick={visitLogin} > */}
            <div >
                <NavLink to='http://localhost:4000/login' >
                    <img src="http://cdn.steamcommunity.com/public/images/signinthroughsteam/sits_large_noborder.png" alt="steam button" />
                </NavLink>
                {/* <button>Login to Steam</button> */}
                
            </div>
        </div>


    )
}

export default LoginButton;