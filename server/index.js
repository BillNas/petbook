const app = require('fastify')({ logger: true })
const petRoutes = require('./routes/pet.routes');
const connection = require('./connection')

app.register(require('fastify-cors'), { 
  })

connection();

app.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

   petRoutes.forEach((route, index) => {
    app.route(route)
   })

app.listen(5000, err => {
  if (err) throw err
  console.log(`server listening on ${app.server.address().port}`)
})


