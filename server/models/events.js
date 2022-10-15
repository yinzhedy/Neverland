const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const eventSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    startDateTime: {
      type: String,
      required: true
    },
    endDateTime: { 
        type: String,
        required: true
    },
    description: { 
      type: String,
      required: false
  },
  });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;