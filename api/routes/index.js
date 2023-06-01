module.exports = async function (fastify) {

  const list = [
    {
      name: 'Pedrinho Matador',
      trampo: 'Assassino'
    },
    {
      name: 'Teta de Nega',
      trampo: 'Traficante'
    },
    {
      name: 'Goleiro Bruno',
      trampo: 'Assassino'
    }
  ]

  fastify.route({
    method: 'GET',
    url: '/',
    preHandler: async (req, res) => {

    },
    handler: async (req, res) => {
      try {
        return await list
      } catch (err) {
        res.send(404)
      }
    }
  })

  fastify.route({
    method: 'GET',
    url: '/users/register',
    schema: {

    },
    handler: async (res, req) => {

      try {


      } catch (err) {

      }
    }
  })
}