import React, { useState } from 'react';

// images 
import Down from '../images /down.jpg'
import Up from '../images /up.jpg'

// styles 
import '../App.css';


const UserGrid = () => {

    const [upCount, setUpCount] = useState(0)
    const [downCount, setDownCount] = useState(0)
    const [isDisplayed, setIsDisplayed] = useState(false)

    const TEN_SECONDS = 10; 

    const clicked = (data) => {
        if (data === "up") {
            setUpCount(upCount + 1)
            console.log(`up clicked ${upCount} times`)
        } else if (data === "down") {
            setDownCount(downCount + 1)
            console.log(`down clicked ${downCount} times`)
        }
    }

    const startTimer = (duration) => {
        var timer = duration, minutes, seconds;
        var display = document.querySelector('#time');
        
        const stopTimer = () => {
            clearInterval(start);
        }

        var start = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                setIsDisplayed(false)
                stopTimer()
            }

        }, 1000);
    }

    
 
    return (
        <div id="user-grid">
            <div id="user-desc-container">
                <p>Welcome, curious soul! I have created a small interactive "game" that will calculate the probability that a curious soul (like yourself) will click an image following an initial selection.</p>

                <p>You will have <strong>10 seconds</strong> to click on the two images in any order you desire. Press the start button when you're ready!</p>
            </div>

            <div style={{width: "50%", margin: "20px auto", display: "flex", justifyContent: "center"}}>
                <button id="user-start" onClick={() => {
                    setIsDisplayed(true);
                    startTimer(TEN_SECONDS)
                }}>START!</button>
            </div>
           
            <div id="time-holder"><span id="time">00:00</span></div>

           {isDisplayed ? 
            <div id="img-container">
                <img src={Up} alt="Older man with his thumb up is in the foreground." className="imgs" onClick={() => clicked("up")}></img>
                <img src={Down} alt="Older man scrunching his face. His thumb down is in the foreground." className="imgs" onClick={() => clicked("down")}></img>
            </div> : null}

        </div>
    );
}

export default UserGrid;