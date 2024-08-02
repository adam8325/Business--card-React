import React from 'react'
import logo from "../images/PB-Update.png"

export default function Info () {
    return (
        <div className="info-section">
            <img src= {logo} className="Pb-img"/>
            <h1 className="info-name">Adam Eleraky</h1>
            <h4 className="info-title">Fullstack Developer</h4>
            <div className="info-btns">
                <button className="email-btn">Email</button>
                <button className="linkedin-btn">LinkedIn</button>
            </div>
            
        </div>
    )
}