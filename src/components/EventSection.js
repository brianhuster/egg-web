import React from "react";
import EventCard from "./EventCard";

function EventSection( { title, evenList } ){
    return (
        <div className="flex justify-center flex-wrap w-[1200px] px-4 pb-12 shadow-xl bg-[#242527]">
            <div className="w-full py-8">
                <h1 className="text-center h-12 w-3/4 p-2 ml-auto mr-auto text-white uppercase border-b-2 border-blue-50">{title}</h1>
            </div>
            <div className="flex flex-wrap gap-4 w-[1072px]">
                {evenList===null?<></>:evenList.map( e => <EventCard event={e} />)}
            </div>
        </div>
    );
}

export default EventSection;