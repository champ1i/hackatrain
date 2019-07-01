import gql from "graphql-tag";

export const GET_ALL_TRIPS = gql`
  {
    allTrips(origin_Istartswith: "A") {
      edges {
        node {
          id
          origin
          destination
          availableFirstClass
          availableSecondClass
        }
      }
    }
  }
`;
