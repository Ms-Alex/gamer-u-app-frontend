import React from 'react';

const LogOutButton = (props) => {

    const visitLogout = () => {
        props.logOutUser();
        window.location = "http://localhost:4000/logout";
    }


    return (
        <div onClick={visitLogout} >
            <button>Steam Logout</button>
        </div>


    )
}

export default LogOutButton;