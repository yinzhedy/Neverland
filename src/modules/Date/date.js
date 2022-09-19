import React from 'react';

export function TodaysDate() {
    var today = Date().toLocaleString();
  return today;
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

export function NinePmInLocalTime() {
    var OneAmUTC = new Date(new Date().setUTCHours(1,0,0,0));
    var NinePmLocal = OneAmUTC.toLocaleTimeString();
    return NinePmLocal;
}

export function ElevenPmInLocalTime() {
    var ThreeAmUTC = new Date(new Date().setUTCHours(3,0,0,0));
    var ElevenPmLocal = ThreeAmUTC.toLocaleTimeString();
    return ElevenPmLocal;
}


