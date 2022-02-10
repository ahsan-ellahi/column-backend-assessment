import { GraphQLServer } from 'graphql-yoga'
import { env } from 'process'
import { createContext } from './context'
import { schema } from './schema'


const server = new GraphQLServer({
  schema,
  context: createContext,
})
server.start(() => console.log(`Server ready at: http://localhost:4000`))

export default server;