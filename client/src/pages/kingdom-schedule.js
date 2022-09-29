import React from 'react';
import {TodaysDate, NextSunday, NextSaturday, NinePmInLocalTime, ElevenPmInLocalTime} from '../modules/Date/date';


const KingdomSchedulePage = () => {
  var today = Date().toString();
  console.log(today)
return (
    <main>
      <h1 className="sub-page-header">Kingdom Schedule Page </h1>
      <p> for your current day, time, and timezone of: < TodaysDate/></p>
      <div className = "page">
        <section className = "page-section">
          <h2>Neverland</h2>
          <h3>Dungeon:</h3>
          <p><NinePmInLocalTime/> on < NextSaturday/></p>
          <h3>Relic:</h3>
          <p><ElevenPmInLocalTime/> on  < NextSaturday/></p>
          <h3>Defense</h3>
          <p><NinePmInLocalTime/> on  < NextSunday/></p>
          <h3>Fight for throne:</h3>
          <p><ElevenPmInLocalTime/> on  < NextSunday/></p>
          <h3>This week's relics:</h3>
          <h3> Raffle:</h3>
          <h3>Members set to transfer to FL:</h3>
        </section>
        <section className = "page-section">
          <h2>Foreverland</h2>
          <h3>Dungeon:</h3>
          <p><NinePmInLocalTime/> on  < NextSaturday/></p>
          <h3>Relic:</h3>
          <p><ElevenPmInLocalTime/> on  < NextSaturday/></p>
          <h3>Defense</h3>
          <p><NinePmInLocalTime/> on < NextSunday/></p>
          <h3>Fight for throne:</h3>
          <p><ElevenPmInLocalTime/> on  < NextSunday/></p>
          <h3>This week's relics:</h3>
          <h3> Raffle:</h3>
          <h3> Members set to transfer to NL:</h3>
        </section>
        </div>
    </main>
  );
};
export default KingdomSchedulePage;