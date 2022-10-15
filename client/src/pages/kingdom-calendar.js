// import React from 'react';
import {TodaysDate, NextSunday, NextSaturday, NinePmInLocalTime, ElevenPmInLocalTime} from '../modules/Date/date';
// import { useState } from 'react';
// import Calendar from 'react-calendar';

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import Datetime from "react-datetime"
import "react-datepicker/dist/react-datepicker.css";
// import "./App.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

function KingdomCalendarPage() {
    const [newEvent, setNewEvent] = useState({ title: "", description: "", time: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
        console.log(allEvents)
        console.log(newEvent)
    }

    return (
        <div className="App">
            <h1>Calendar</h1>
            <button>Add New Event</button>
            <div>
                     <input type="text" placeholder="Title/Description" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                     <input type="time" placeholder="Time" style={{ width: "20%", marginRight: "10px" }} value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} />
                     <Datetime placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                     <Datetime placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                     <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                         Add Event
                     </button>
                 </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default KingdomCalendarPage;

// const KingdomCalendarPage = () => {
//     const [date, setDate] = useState(new Date());

 
//     return (
//       <div className='app'>
//         <h1 className='text-center'>Kingdom Calendar</h1>
//         <input type="text" id="name-input" name="name" required
//        minLength="4" maxLength="8" size="10"/>
//         <div className='calendar-container'>
//           <Calendar onChange={setDate} value={date} />
//         </div>
//         <p className='text-center'>
//           <span className='bold'>Selected Date:</span>{' '}
//           {date.toDateString()}
//         </p>
//       </div>
//     );
//   };
// export default KingdomCalendarPage;