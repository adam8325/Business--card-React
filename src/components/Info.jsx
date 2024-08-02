import React from 'react'


export default function Info () {
    return (
        <div className="info-wrapper">
            <div className="info-section">
                <h1 className="info-name">Adam Eleraky</h1>
                <h4 className="info-title">Fullstack Developer</h4>
                <div className="info-btns">
                    <button className="email-btn"><i class="fa-solid fa-envelope"></i> Email</button>
                    <button className="linkedin-btn"><a href="https://www.linkedin.com/in/adam-eleraky-87a540162/" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></button>  
                </div>            
            </div>
        </div>
        
    )
}