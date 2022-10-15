import Calendar from 'react-calendar';
import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import EventForm from '../components/Form/addEventForm'

// global variable declarations
let addEventForm = document.getElementById('addEventForm')
// console.log(addEventForm.style.display)

// function that brings up the create event form when addEventButton is clicked
function promptEventForm() {
  let calendar = document.getElementById('calendar-container-section');
  let button = document.getElementById('addEventButton');

  // function that makes form visible and calendar/addEventButton invisible
  function displayFormHideCalendar() {
  // addEventForm.style.display = 'inline'
  calendar.style.display = 'none';
  button.style.display = 'none';
  }

  displayFormHideCalendar();

};

// function that sets value of input element to user input on change
function assignInputAsValue() {
  let form = document.getElementById('addEventForm');
  form.addEventListener("change", (event) => {

  })
}

// function to handle when createEventButton is clicked on addEventForm
addEventForm?.addEventListener("submit", () => {
  console.log("form submitted")

  let calendar = document.getElementById('calendar-container-section');
  let addEventButton = document.getElementById('addEventButton');

  // let activeTileArray = document.getElementsByClassName("react-calendar__tile--active");
  // let activeTile = activeTileArray[0];
  // let activeTileLabel = activeTile.firstChild


  // removes addEventButton button when form is submitted
  addEventButton.remove();

   // function that makes form invisible and calendar/addEventButton visible
  function hideFormShowCalendar() {
    console.log("visibility changed")
    addEventForm.style.display = 'none';
    calendar.style.display = 'inline';
    addEventButton.style.display = 'inline';
  };

  // function to create element and append to active tile using form input as the innerHtml

  function createEventInActiveTile() {
    console.log('createEventFunction triggered')
    };


  createEventInActiveTile();
  hideFormShowCalendar();


});

// create an addEventButton for active tile, remove previous tile's addEventButtons
// window.addEventListener("click", (event) => {

//   let header = document.getElementById("kingdom-calendar-header");

//   if (header) {
// function isFormVisible() {
//     if (addEventForm) {console.log(addEventForm.style.display)}
    
//   }

//   let e = event.target;
//   let activeTileArray = document.getElementsByClassName("react-calendar__tile--active");
//   let activeTile = activeTileArray[0];
//   let activeTileLabel = activeTile.firstChild

  
//   // function to create addEvent button on clicked calendar tile
//   function createAddEventButton(buttonTitle) {
//     // console.log("created an addEventButton")
//     let x = document.createElement("button")
//     x.textContent = buttonTitle;
//     x.setAttribute('id', 'addEventButton');
//     x.addEventListener("click", ()=> {
//       promptEventForm();
//     })
//     return x;
//   }
//   // function to remove previous addEventButtons for when we select a new date tile
//   function removeOtherAddEventButtons() {
//     let eventButton = document.getElementById("addEventButton");

//     if (eventButton) {eventButton.remove()}
//     else {console.log("no button found")}
//   }



//   // check to see if what was clicked was a tile on the calendar or not
//   // if yes, create an addEventButton on that tile
//   if (e == activeTile) {
//     removeOtherAddEventButtons();
//     // console.log("clicked on a tile")
//     // console.log(activeTile)
//     activeTileLabel.appendChild(createAddEventButton('Add Event'))
//     return;
//   }
//   // if something that wasnt a calendar tile was clicked, dont create a button. just return.
//   else {
//     isFormVisible();
//     return;
//   }
//   }

//   else {
//     return;
//   }


  

// })








const KingdomTrackerPage = () => {
    const [date, setDate] = useState(new Date());

 
    return (
      <div className='app'>
        <h1 id="kingdom-calendar-header" className='text-center'>Kingdom Calendar</h1>
        <div id="empty-container">hi</div>
        <EventForm/>
        <div style={{ display: "inline" }} id='calendar-container-section' className='calendar-container'>
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
      </div>
    );
  };

export default KingdomTrackerPage;








