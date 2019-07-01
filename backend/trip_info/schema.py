from graphene import List, Schema
from graphene_django import DjangoObjectType

from trip_info.models import Trip


class TripType(DjangoObjectType):
    class Meta:
        model = Trip


class Query(object):
    all_trips = List(TripType)

    def resolve_all_trips(self, info, **kwargs):
        return Trip.objects.all()
