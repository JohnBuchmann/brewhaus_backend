import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import * as dotenv from "dotenv";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { BreweryAPI } from "./datasources/BreweryAPI";

dotenv.config();

const PORT = parseInt(process.env.PORT || "4000", 10);
const BREWERY_API_BASE_URL =
  process.env.BREWERY_API_BASE_URL || "https://api.openbrewerydb.org/v1";

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
    context: async () => {
      return {
        dataSources: {
          breweryAPI: new BreweryAPI(BREWERY_API_BASE_URL),
        },
      };
    },
  });

  console.log(`🚀 GraphQL server ready at ${url}`);
  console.log(`📊 Using Brewery API: ${BREWERY_API_BASE_URL}`);
}

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
