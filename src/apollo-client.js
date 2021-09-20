import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql2.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "lwu0NU0bfmQo6OUEYE2Ud5nqZFJmw1FoT30fhW0U7TLV86ZQhCRWfmjVcTd3VZhU",
  },
});

export default client;
