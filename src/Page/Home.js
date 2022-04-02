import React from 'react'
import MenuButton from '../components/MenuButton';

const Home = () => {
    return(
        <div className="container">
            <div className="buttonContainer">
                <MenuButton name="Cat" />
                <MenuButton name="Shark" />
            </div>
        </div>
    )
}

export default Home;