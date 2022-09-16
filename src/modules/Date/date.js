import React from 'react';

export function TodaysDate() {
    var today = Date().toLocaleString();
    console.log(today)
  return (
      <p>{today}</p>
  );
  };

function nextDate(dayIndex) {
    var today = new Date();
    today.setDate(today.getDate() + (dayIndex - 1 - today.getDate() + 7) % 7 + 1);
    today.setHours(0,0,0,0)
    return today;
}

export function NextSunday() {
    var sundayDate = nextDate(0).toLocaleDateString();
    return sundayDate;
}

export function NextSaturday() {
    var saturdayDate = nextDate(6).toLocaleDateString();
    return saturdayDate;
}




