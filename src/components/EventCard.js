import React from "react";

function EventCard( { title, bgImg, time } ){
    return (
        <div className="inline-block w-64 h-80 shadow-xl bg-white">
            <div className="h-56 p-2">
                <div>{title}</div>
                <img src={bgImg} alt={title} className="brightness-75 contrast-125" />
            </div>
            <div className="h-24 p-2">

            </div>
        </div>
    );
}

export default EventCard;