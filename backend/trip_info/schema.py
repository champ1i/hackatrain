from random import randint

import graphene
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

    available_first_class = graphene.Int()
    available_second_class = graphene.Int()

    def resolve_available_first_class(self, info):
        if self is not None:
            return self.capacity_first_class - randint(10, 60)
        return 0

    def resolve_available_second_class(self, info):
        if self is not None:
            return self.capacity_second_class - randint(70, 200)
        return 0


class Query(object):
    all_trips = DjangoFilterConnectionField(TripNode)
