import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../../utils/mutations';

const EventForm = () => {
      const [formState, setFormState] = useState({
        title: '',
        startDateTime: '',
        endDateTime: '',
        description: ''
      });

      const [addEvent, { error, data }] = useMutation(ADD_EVENT);
  
      const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name)
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addEvent({
            variables: { ...formState },
          });
    
        } catch (e) {
          console.error(e);
        }
      };
  
      return (
        <div>
            <form id="addEventForm" onSubmit={handleSubmit}>
              <label>
                Event Title
                <input
                  name="title"
                  type="text"
                  placeholder="Event Title"
                  value={formState.title}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Start Date/Time:
                <input
                  name="startDateTime"
                  type="datetime-local"
                  value={formState.startDateTime}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                End Date/Time:
                <input
                  name="endDateTime"
                  type="datetime-local"
                  value={formState.endDateTime}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Event Description
                <input
                  name="description"
                  type="text"
                  value={formState.description}
                  onChange={handleChange}
                />
              </label>
              <input
                id="formComponentSubmitButton"
                type="submit"
                value="Save/Create Event"
              />
            </form>

          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
        </div>
      );
    };

export default EventForm;