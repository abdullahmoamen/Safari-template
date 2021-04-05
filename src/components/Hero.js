import React from 'react'
import './Hero.css'
import '../app.css'
import Button from './Button'
// import video from '../videos/video-1.mp4'
function Hero() {
    return (
        <div className="hero-container">
        {/* <video src={video} muted autoPlay loop className="video">
        </video> */}
            <h1>WE ARE WAITING FOR YOU !</h1>
            <p>Let's do that now!</p>
            <div className="hero-btns">
                <Button className="btns" 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    LET'S START
                </Button>
                <Button className="btns" 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    WATCH TRAILER <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    )
}

export default Hero
