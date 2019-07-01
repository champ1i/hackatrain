import { apolloClient } from '@/apollo'

import { Trip } from '@/models';

import initializeQuery from './queries/initialize.gql'
import { GraphQLConnection } from '@/models/GraphQLConnection';

type InitialRequest = {
  trip: Trip
}

export class Api {
  public static getInitialData () {
    return this.request<InitialRequest>(initializeQuery);
  }

  private static async request<T> (query: any, variables?: any): Promise<T> {
    try {
      const result = await apolloClient.query<T>({ query, variables })

      if (result.errors) {
        throw new Error(result.errors.join(','))
      }

      return result.data
    } catch (error) {
      throw error
    }
  }
}

export default Api