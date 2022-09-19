import React from 'react';
import {TodaysDate, NextSunday, NextSaturday, NinePmInLocalTime, ElevenPmInLocalTime} from '../modules/Date/date';


const KingdomCalendarPage = () => {
  var today = Date().toString();
  console.log(today)
return (
    <main>
      <h1 className="sub-page-header">Kingdom Calendar Page </h1>
      <p> for your current day, time, and timezone of: < TodaysDate/></p>
    </main>
  );
};
export default KingdomCalendarPage;