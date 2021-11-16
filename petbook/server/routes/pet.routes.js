const petController = require('../controllers/pet.controller.js')

const routes = [
  {
    method: 'GET',
    url: '/api/pets',
    handler: petController.getPets
  },
  {
    method: 'GET',
    url: '/api/pets/:id',
    handler: petController.getPet
  }
]

module.exports = routes