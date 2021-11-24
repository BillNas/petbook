const petController = require('../controllers/pet.controller.js')
const Pet = require('../models/pet.model')
const routes = [
  {
    method: 'POST',
    url: '/api/pets',
    handler: petController.createPet,
    schema: Pet
  },
  {
    method: 'GET',
    url: '/api/pets',
    handler: petController.getPets
  },
  {
    method: 'GET',
    url: '/api/pets/:id',
    handler: petController.getPet
  },
  {
    method: 'DELETE',
    url: '/api/pets/:id',
    handler: petController.deletePet
  },
  {
    method: 'PATCH',
    url: '/api/pets/:id/like',
    handler: petController.likePet
  },
]

module.exports = routes