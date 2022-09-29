import React from 'react';
import {TodaysDate, NextSunday, NextSaturday, NinePmInLocalTime, ElevenPmInLocalTime} from '../modules/Date/date';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Calendar from 'react-calendar';

const KingdomCalendarPage = () => {
    const [date, setDate] = useState(new Date());

 
    return (
      <div className='app'>
        <h1 className='text-center'>Kingdom Calendar</h1>
        <input type="text" id="name-input" name="name" required
       minLength="4" maxLength="8" size="10"/>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
      </div>
    );
  };
export default KingdomCalendarPage;