import React from 'react';
import {TodaysDate, NextSunday, NextSaturday} from '../modules/Date/date';


const KingdomSchedulePage = () => {
  var today = Date().toString();
  console.log(today)
return (
    <main>
      <h1 className="sub-page-header">Kingdom Schedule Page </h1>
      < TodaysDate/>
      < NextSunday/>
      < NextSaturday/>
      <div className = "page">
        <section className = "page-section">
          <h2>Neverland</h2>
          <h3>Dungeon:</h3>
          <p>9pm < NextSaturday/></p>
          <h3>Relic:</h3>
          <p>11pm EST < NextSaturday/></p>
          <h3>Defense</h3>
          <p>9pm < NextSunday/></p>
          <h3>Fight for throne:</h3>
          <p>11pm EST < NextSunday/></p>
          <h3>This week's relics:</h3>
          <h3> Raffle:</h3>
          <h3>Members set to transfer to FL:</h3>
        </section>
        <section className = "page-section">
          <h2>Foreverland</h2>
          <h3>Dungeon:</h3>
          <p>9pm < NextSaturday/></p>
          <h3>Relic:</h3>
          <p>11pm EST < NextSaturday/></p>
          <h3>Defense</h3>
          <p>9pm < NextSunday/></p>
          <h3>Fight for throne:</h3>
          <p>11pm EST < NextSunday/></p>
          <h3>This week's relics:</h3>
          <h3> Raffle:</h3>
          <h3> Members set to transfer to NL:</h3>
        </section>
        </div>
    </main>
  );
};
export default KingdomSchedulePage;