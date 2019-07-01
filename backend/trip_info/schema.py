from graphene import relay
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from trip_info.models import Trip as TripModel


class TripNode(DjangoObjectType):
    class Meta:
        model = TripModel
        filter_fields = {
            'origin': ['exact', 'istartswith'],
            'destination': ['exact', 'istartswith']
        }
        interfaces = (relay.Node, )


class Query(object):
    all_trips = DjangoFilterConnectionField(TripNode)
