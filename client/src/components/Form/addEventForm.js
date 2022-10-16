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
        const { title, value } = event.target;
    
        setFormState({
          ...formState,
          [title]: value,
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addEvent({
            variables: { ...formState },
          });
    
        } catch (e) {git
          console.error(e);
        }
      };
  
      return (
        <div>
          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/member-tracker-page">back to the homepage.</Link>
            </p>
          ) : (
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
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
        </div>
      );
    };

export default EventForm;