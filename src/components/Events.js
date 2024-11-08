import React from 'react';
import EventSection from './EventSection';

const upcommingEvents = [
    {
        title:'Sự kiện 0',
        ỉmgUrl:'',
        time:'00:00',
        date:'19/07/2005'
    },
    {
        title:'Sự kiện 1',
        ỉmgUrl:'',
        time:'00:00',
        date:'19/07/2005'
    },
    {
        title:'Sự kiện 2',
        ỉmgUrl:'',
        time:'00:00',
        date:'19/07/2005'
    },
    {
        title:'Sự kiện 3',
        ỉmgUrl:'',
        time:'00:00',
        date:'19/07/2005'
    },
    {
        title:'Sự kiện 4',
        ỉmgUrl:'',
        time:'00:00',
        date:'19/07/2005'
    },
    {
        title:'Sự kiện 5',
        ỉmgUrl:'',
        time:'00:00',
        date:'19/07/2005'
    }
];

const currentEvents = [
    {
        title:'Sự kiện 6',
        ỉmgUrl:'',
        time:'00:00',
        date:'19/07/2005'
    },
    {
        title:'Sự kiện 7',
        ỉmgUrl:'',
        time:'00:00',
        date:'19/07/2005'
    },
];

const pastEvents = [
    {
        title:'Sự kiện 8',
        ỉmgUrl:'',
        time:'00:00',
        date:'19/07/2005'
    },
    {
        title:'Sự kiện 9',
        ỉmgUrl:'',
        time:'00:00',
        date:'19/07/2005'
    },
    {
        title:'Sự kiện 10',
        ỉmgUrl:'',
        time:'00:00',
        date:'19/07/2005'
    },
    {
        title:'Sự kiện 11',
        ỉmgUrl:'',
        time:'00:00',
        date:'19/07/2005'
    },
];

function Events(){
    return(
        <>
            <EventSection title='Sự kiện sắp diễn ra'   evenList={upcommingEvents}   />
            <EventSection title='Sự kiện đang diễn ra'  evenList={currentEvents}     />
            <EventSection title='Sự kiện đã diễn ra'    evenList={pastEvents}        />
        </>
    )
}

export default Events;