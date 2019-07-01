from graphene import Schema, ObjectType

from trip_info.schema import Query as TripInfoQuery


class Query(TripInfoQuery, ObjectType):
    pass


schema = Schema(query=Query)
