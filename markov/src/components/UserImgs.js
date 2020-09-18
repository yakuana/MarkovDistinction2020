import React from 'react';

function UserImgs({ isDisplayed, clicked, Up, Down }) {

    return (
        <div>
      
            <div id="img-container">
                <img src={Up} alt="Older man with his thumb up is in the foreground." className="imgs" onClick={() => clicked("up")}></img>
                <img src={Down} alt="Older man scrunching his face. His thumb down is in the foreground." className="imgs" onClick={() => clicked("down")}></img>
            </div> 
        </div>
    );
}

export default UserImgs;