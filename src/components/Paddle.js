import React, {useEffect, useState} from 'react';
import "./Paddle.css";

export default function Paddle({isPlayerTwo}){

    let handleMouse = e => {
        console.log(e.x, e.y, e.movementX, e.movementY)
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouse)
    })

    return (
        <div className="paddle"></div>
    )
}