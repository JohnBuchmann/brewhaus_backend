import { Brewery } from "../types/brewery";

export class BreweryAPI {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async getBreweries(
    page: number = 1,
    perPage: number = 20,
  ): Promise<Brewery[]> {
    try {
      const url = `${this.baseURL}/breweries?page=${page}&per_page=${perPage}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch breweries: ${response.statusText}`);
      }

      return (await response.json()) as Brewery[];
    } catch (error) {
      console.error("Error fetching breweries:", error);
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
      console.error(`Error fetching brewery ${id}:`, error);
      throw new Error("Failed to fetch brewery from API");
    }
  }

  async searchBreweries(query: string): Promise<Brewery[]> {
    try {
      const url = `${this.baseURL}/breweries/search?query=${encodeURIComponent(query)}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to search breweries: ${response.statusText}`);
      }

      return (await response.json()) as Brewery[];
    } catch (error) {
      console.error("Error searching breweries:", error);
      throw new Error("Failed to search breweries from API");
    }
  }

  async getBreweriesByCity(city: string): Promise<Brewery[]> {
    try {
      const url = `${this.baseURL}/breweries?by_city=${encodeURIComponent(city)}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch breweries by city: ${response.statusText}`,
        );
      }

      return (await response.json()) as Brewery[];
    } catch (error) {
      console.error(`Error fetching breweries by city ${city}:`, error);
      throw new Error("Failed to fetch breweries by city from API");
    }
  }

  async getBreweriesByState(state: string): Promise<Brewery[]> {
    try {
      const url = `${this.baseURL}/breweries?by_state=${encodeURIComponent(state)}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch breweries by state: ${response.statusText}`,
        );
      }

      return (await response.json()) as Brewery[];
    } catch (error) {
      console.error(`Error fetching breweries by state ${state}:`, error);
      throw new Error("Failed to fetch breweries by state from API");
    }
  }

  async getBreweriesByType(type: string): Promise<Brewery[]> {
    try {
      const url = `${this.baseURL}/breweries?by_type=${encodeURIComponent(type)}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch breweries by type: ${response.statusText}`,
        );
      }

      return (await response.json()) as Brewery[];
    } catch (error) {
      console.error(`Error fetching breweries by type ${type}:`, error);
      throw new Error("Failed to fetch breweries by type from API");
    }
  }
}
