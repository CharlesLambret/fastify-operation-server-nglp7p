/**
 * @type { import('fastify').FastifyPluginCallback }
 */
export async function routes(app) {
  app.get('/', (request, reply) => {
    const message = request.query.name
      ? `Hello ${request.query.name}`
      : 'Hello world'

    reply.send({ message })
  })

  app.get('/about', (request, reply) => {
    reply.send({ message: 'Welcome to my API' })
  })

  /*
    créer une route /operation
    qui accepte 2 nombres "a" et "b" en paramètres
    et les additionne
    > /operation?a=10&b=20 
    < { "result": 30}
  */
  app.get('/operation', (request, reply) => {
    const a = Number (request.query.a)
    const b = Number (request.query.b)
    if (!(a) || !(b){
      reply.send({error :'missing para'})
      return
    }
    if (isNaN(a) || !request.query.b)){
      reply.send({error :'parameters must be numbers'})
      return
    }
    console.log(request.query)
    reply.send({result: a + b})
  })
}
