import requests
import json
import numpy as np


class NS(object):

    def __init__(self):
        self.api_key = 'EURu8A0iTU7Vr2Vk524qL4U2NowHC8xYTFuTXIAc'


    def get_data(self, query):
        header = {'x-api-key': str(self.api_key)}
        r = requests.get(query, headers=header)
        data = json.loads(r.text)
        return data

    def get_zitplaatsen(self, ritnummer=3031):
        query_zitplaatsen = 'https://ns-api.nl/virtualtrain/api/v1/trein/{}?features=zitplaats'.format(ritnummer)
        data = self.data(query_zitplaatsen)
        return data['materieeldelen'][0]['zitplaatsen']

    # TODO: fix date format, should be ISO 8601
    def get_price(self, fromStation='ed', toStation='ut', plannedFromTime='06:11:00'):

        query_price = 'https://ns-api.nl/virtualtrain/api/v2/price?fromStation={fromStation}&toStation={toStation}'\
            .format(fromStation=fromStation, toStation=toStation, plannedFromTime=plannedFromTime)
        data = self.get_data(query_price)

        return data


class FakeData(object):

    @classmethod
    def get_demand(self, ritnummer=3031):
        zitplaatsen = NS().get_zitplaatsen(ritnummer)
        totaal_zitplaatsen = zitplaatsen['zitplaatsEersteKlas'] + zitplaatsen['zitplaatsTweedeKlas']

        mean = totaal_zitplaatsen/2

        return np.random.exponential(mean)