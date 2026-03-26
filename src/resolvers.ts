import { BreweryAPI } from "./datasources/BreweryAPI";
import { BreweryFilterArgs } from "./types/brewery";

export const resolvers = {
  Query: {
    breweries: async (
      _parent: unknown,
      args: BreweryFilterArgs,
      context: { breweryAPI: BreweryAPI },
    ) => {
      return context.breweryAPI.getBreweries(args);
    },

    brewery: async (
      _parent: unknown,
      args: { id: string },
      context: { breweryAPI: BreweryAPI },
    ) => {
      return context.breweryAPI.getBreweryById(args.id);
    },
  },
};
