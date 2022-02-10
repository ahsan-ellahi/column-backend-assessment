import getPort, { makeRange } from "get-port";
import { GraphQLClient } from "graphql-request";
import server from "../src/server";
type TestContext = {
  client: GraphQLClient;
};
export function createTestContext(): TestContext {
  let ctx = {} as TestContext;
  const graphqlCtx = graphqlTestContext();
  beforeEach(async () => {                                      
    const client = await graphqlCtx.before();
    Object.assign(ctx, {
      client,
    });
  });
  afterEach(async () => {                                     
    await graphqlCtx.after();
  });
  return ctx;                                                 
}
function graphqlTestContext() {
  let serverInstance: any | null = null;
  return {
    async before() {
      const port = 4000;  
      serverInstance = await server.start();              
      return new GraphQLClient(`http://localhost:${port}`);       
    },
    async after() {
      serverInstance.close();                          
    },
  };
}