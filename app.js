import Fastify from 'fastify'

import { routes } from './routes/index.js'

const fastify = Fastify()
fastify.register(routes)

async function start() {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
