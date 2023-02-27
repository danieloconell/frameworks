const fastify = require('fastify')()

fastify.get('/greet/:name', function (request, reply) {
  const { name } = request.params;
  return `Hello ${name}`
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
