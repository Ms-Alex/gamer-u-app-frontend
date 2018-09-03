import React from 'react'
import LogOutButton from './LogoutButton';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Home page
                </h1>

                <br /> 
                <LogOutButton />
            </div>
        )
    }
}

export default Home;