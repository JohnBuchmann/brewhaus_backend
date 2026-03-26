import { BreweryAPI } from './datasources/BreweryAPI';
import {
  BreweriesQueryArgs,
  BreweryByIdArgs,
  SearchBreweriesArgs,
  BreweriesByCityArgs,
  BreweriesByStateArgs,
  BreweriesByTypeArgs,
} from './types/brewery';

export interface Context {
  dataSources: {
    breweryAPI: BreweryAPI;
  };
}

export const resolvers = {
  Query: {
    breweries: async (
      _parent: unknown,
      args: BreweriesQueryArgs,
      context: Context
    ) => {
      return context.dataSources.breweryAPI.getBreweries(args.page, args.perPage);
    },

    brewery: async (
      _parent: unknown,
      args: BreweryByIdArgs,
      context: Context
    ) => {
      return context.dataSources.breweryAPI.getBreweryById(args.id);
    },

    searchBreweries: async (
      _parent: unknown,
      args: SearchBreweriesArgs,
      context: Context
    ) => {
      return context.dataSources.breweryAPI.searchBreweries(args.query);
    },

    breweriesByCity: async (
      _parent: unknown,
      args: BreweriesByCityArgs,
      context: Context
    ) => {
      return context.dataSources.breweryAPI.getBreweriesByCity(args.city);
    },

    breweriesByState: async (
      _parent: unknown,
      args: BreweriesByStateArgs,
      context: Context
    ) => {
      return context.dataSources.breweryAPI.getBreweriesByState(args.state);
    },

    breweriesByType: async (
      _parent: unknown,
      args: BreweriesByTypeArgs,
      context: Context
    ) => {
      return context.dataSources.breweryAPI.getBreweriesByType(args.type);
    },
  },
};
