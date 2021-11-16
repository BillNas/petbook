const Pet = require('../models/pet.model');

module.exports = (request, reply, done) => {
  Pet.count({}, (err, count) => {
    if (err) {
      console.error(err);
      reply.code(500).send('Error!');
    }
    reply.header('Content-Range', `notes 0-10}/${count}`);
    done();
  });
};
