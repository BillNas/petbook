const boom = require('boom');
const mongoose = require('mongoose');

const connection = async () => {
	try {
		mongoose.connect('mongodb+srv://bill:aekara21@cluster0.crtkv.mongodb.net/Pets?retryWrites=true&w=majority');
		console.log('MongoDB connected…');
	} catch (err) {
		throw boom.boomify(err);
	}
};
module.exports = connection;
