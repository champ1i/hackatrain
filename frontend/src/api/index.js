import { apolloClient } from "@/apollo";

export class Api {
  /**
   * Returns a promise that can be used to handle
   * a success or error with
   *
   * @param request is the query for graphql
   *
   * @return returns a promise that will eventually return the queried data
   **/
  fetch(request) {
    return new Promise(async (resolve, reject) => {
      const response = await apolloClient.query({ query: request });
      if (response === null) {
        reject("response is null");
      }
      resolve(response);
    });
  }

  /**
   * Returns a promise that can be used to handle
   * a success or error with
   *
   * @param request is the mutation query for graphql
   *
   * @return returns a promise that will eventually return the queried data
   **/
  mutate(request) {
    return new Promise(async (resolve, reject) => {
      const response = await apolloClient.mutate({ query: request });
      if (response === null) {
        reject("response is null");
      }
      resolve(response);
    });
  }
}

export default Api;
