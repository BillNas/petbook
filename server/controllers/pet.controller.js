const Pet = require('../models/pet.model');
const boom = require('boom');
const mongoose = require('mongoose');

const getPets = async (req, reply) => {
	try {
		const pets = await Pet.find();

		reply.code(200).send(pets);
	} catch (error) {
		throw boom.boomify(error);
	}
};
const getPet = async (req, reply) => {
	const { id } = req.params;
	try {
		const pet = await Pet.findById(id);
		reply.code(200).send(pet);
	} catch (error) {
		boom.boomify(error);
	}
	if (!mongoose.Types.ObjectId.isValid(id)) reply.code(404).send('No pet found');
};
const createPet = async (req, reply) => {
	const { title, tags, selectedFile, likeCount } = req.body;
	const newPet = new Pet({ title, tags, selectedFile, likeCount });

	try {
		await newPet.save();
		return newPet;
	} catch (error) {
		throw boom.boomify(error);
	}
};
const deletePet = async (req, reply) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) return reply.code(404).send(`No post with id: ${id} `);

	try {
		await Pet.findByIdAndRemove(id);

	} catch (error) {
		throw boom.boomify(error);
	}
};

 const likePet = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await Pet.findById(id);

    const updatedPost = await Pet.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    return updatedPost;
}

module.exports = { getPets, createPet, getPet, deletePet, likePet };
