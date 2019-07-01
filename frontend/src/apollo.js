import Vue from "vue";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  uri: "http://178.62.222.41/graphql/"
});

// Error Handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

// Install the vue plugin
Vue.use(VueApollo);

export default apolloProvider;
