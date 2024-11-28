import React, { useState } from "react";


const TrafficLight = () => {
    const [color, setColor] = useState("")
    const changeColor = (color) => {
        setColor(color);
    }
    return (

        <div className="semaforoContainer d-flex flex-column" >
            <div className="semaforo"></div>
            <div className="color-lights">
                <div
                    className={`red ${color == "red" ? "light-on" : ""}`}
                    onClick={() => changeColor("red")}
                ></div>
                <div
                    className={`yellow ${color == "yellow" ? "light-on" : ""}`}
                    onClick={() => changeColor("yellow")}
                ></div>
                <div
                    className={`green ${color == "green" ? "light-on" : ""}`}
                    onClick={() => changeColor("green")}
                ></div>
            </div>
        </div>


    );
};
export default TrafficLight;