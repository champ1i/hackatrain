import { apolloClient } from "@/apollo";
import gql from "graphql-tag";

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

  // TODO: make custom with data variable
  buildTripQuery() {
    return gql`
      {
        allTrips(origin: "Amsterdam", destination: "Nijmegen") {
          edges {
            node {
              id
              origin
              destination
              firstClassNormalPrice
              secondClassNormalPrice
              firstClassSpotPrice
              secondClassSpotPrice
              departureTime
              arrivalTime
              availableFirstClass
              availableSecondClass
              capacityFirstClass
              capacitySecondClass
            }
          }
        }
      }
    `;
  }
}

export default Api;
