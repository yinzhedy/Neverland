import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import EventForm from '../components/Form/addEventForm'


class MemberTrackerPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddEventButtonClick = this.handleAddEventButtonClick.bind(this);
    this.handleFormSubmitButtonClick = this.handleFormSubmitButtonClick.bind(this);
    this.state = {hideForm: true};
  }

  handleAddEventButtonClick() {
    this.setState({hideForm: false});
  }

  handleFormSubmitButtonClick() {
    this.setState({hideForm: true});
  }

  render() {
    const hideForm = this.state.hideForm;
    let activeButton;
    if (hideForm) {
      activeButton =  <HandleEventButton onClick={this.handleAddEventButtonClick} />
    } else {
      activeButton = <HandleFormButton onClick={this.handleFormSubmitButtonClick} />;
    }

    return (
      <div className='app'>
        <h1 id="kingdom-calendar-header" className='text-center' hideForm={hideForm}>Kingdom Calendar</h1>
        <div>
        {activeButton}
      </div>
    </div>
    );
  }

}
export default MemberTrackerPage;


HandleFormSubmit();
function HandleFormSubmit() {
  window.addEventListener("submit", ()=> {
  document.getElementById("submitFormButton").click()

  return;
  })
}

function createElement(title, elementType, id,) {
  let x = document.createElement(elementType)
    x.textContent = title;
    x.setAttribute('id', id);
    return x;
}


let x;
function HandleCalendarClick(event) {
  console.log(x)
  let e = event.target;
  let activeTileArray = document.getElementsByClassName("react-calendar__tile--active");
  let activeTile = activeTileArray[0];
  let activeTileLabel = activeTile.firstChild;
  let masterAddEventButton = document.getElementById("addEventMasterButton");

  function createAddEventButton() {
    let x = createElement('Add Event', 'button', 'addEventButton')
    x.addEventListener("click", ()=> {
      masterAddEventButton.click()
    })
    return x;
  }

  function removeOtherAddEventButtons() {
    let eventButton = document.getElementById("addEventButton");
  
    if (eventButton) {
      let label = eventButton.parentElement
      label.removeAttribute('id')
      eventButton.remove();
    }
    else {console.log("no button found")}
  }

  if (e == activeTile) {
    console.log(e);
    console.log(activeTile);
    removeOtherAddEventButtons();
    activeTileLabel.appendChild(createAddEventButton('Add Event'));
    activeTileLabel.setAttribute("id", 'active-tile-label');
    // let activeTileLabelId = activeTileLabel.getAttribute('id');
    // console.log(activeTileLabelId)
    return;
  }
    // if something that wasnt a calendar tile was clicked, dont create a button. just return.
  else {
    console.log(e);
    console.log(activeTile);
    console.log("did not click the calendar")
    return;
  }


  };






function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const hideForm = props.hideForm;
  if (hideForm) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}



function HandleFormButton(props) {
  return (
    <div>
    <button id="submitFormButton" style={{ display: "none" }} onClick={props.onClick}>
      Submit Form
    </button>
    <EventForm id="addEventForm" onSubmit={HandleFormSubmit}/>
    </div>
  );
}

function ChangeValueOfX(value) {
  x = value;
  console.log(x + "is the current date");
}

function HandleEventButton(props) {
  const [date, setDate] = useState(new Date());
  return (
    <div>
    <button id="addEventMasterButton" onClick={props.onClick}>
      Add Event
    </button>
    <div onClick={HandleCalendarClick} style={{ display: "inline" }} id='calendar-container-section' className='calendar-container'>
      <Calendar onClickDay={ChangeValueOfX(date)} onChange={setDate} value={date}/>
      </div>
      <p className='text-center'>
      <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
      </p>
    </div>
  );
}
