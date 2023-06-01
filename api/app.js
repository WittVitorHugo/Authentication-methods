const path = require('path')
const autoload = require('@fastify/autoload')

const fastify = require('fastify')

const app = fastify({
  logger: true
})

app.register(autoload, {
  dir: path.join(__dirname, 'plugins')
})

app.register(autoload, {
  dir: path.join(__dirname, 'routes')
})

app.listen({ host: 'localhost', port: 3000 })