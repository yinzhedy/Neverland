const mongoose = require('mongoose');
const { getMaxListeners } = require('npmlog');
const db = require('../models/users');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/neverland', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const userSeed = [
    {
        password: 'NLFLadmin', 
        email: 'administrator@administrator.com',
        userName: 'administrator'
      },
  
];

db.deleteMany({})
  .then(() => db.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + ' users inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
