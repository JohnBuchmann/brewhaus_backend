import gql from "graphql-tag";

export const typeDefs = gql`
  type Brewery {
    id: ID!
    name: String!
    brewery_type: String!
    address_1: String
    address_2: String
    address_3: String
    city: String!
    state_province: String!
    postal_code: String!
    country: String!
    longitude: String
    latitude: String
    phone: String
    website_url: String
    state: String!
    street: String
  }

  type Query {
    breweries(
      page: Int
      perPage: Int
      city: String
      state: String
      type: String
      query: String
    ): [Brewery!]!
    brewery(id: ID!): Brewery
  }
`;
