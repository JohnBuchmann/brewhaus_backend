import { Brewery, BreweryFilterArgs } from "../types/brewery";

export class BreweryAPI {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async getBreweries(args: BreweryFilterArgs): Promise<Brewery[]> {
    try {
      const params = new URLSearchParams();

      if (args.page) params.append("page", args.page.toString());
      if (args.perPage) params.append("per_page", args.perPage.toString());
      if (args.city) params.append("by_city", args.city);
      if (args.state) params.append("by_state", args.state);
      if (args.type) params.append("by_type", args.type);
      if (args.query) params.append("query", args.query);

      const url = `${this.baseURL}/breweries${args.query ? "/search" : ""}?${params.toString()}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch breweries: ${response.statusText}`);
      }

      return (await response.json()) as Brewery[];
    } catch (error) {
      throw new Error("Failed to fetch breweries from API");
    }
  }

  async getBreweryById(id: string): Promise<Brewery | null> {
    try {
      const url = `${this.baseURL}/breweries/${id}`;
      const response = await fetch(url);

      if (response.status === 404) {
        return null;
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch brewery: ${response.statusText}`);
      }

      return (await response.json()) as Brewery;
    } catch (error) {
      throw new Error("Failed to fetch brewery from API");
    }
  }
}
