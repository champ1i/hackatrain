import requests
import json


class NS(object):

    def __init__(self):
        self.api_key = 'EURu8A0iTU7Vr2Vk524qL4U2NowHC8xYTFuTXIAc'

    def get_zitplaatsen(self, ritnummer=3031):
        query_zitplaatsen = 'https://ns-api.nl/virtualtrain/api/v1/trein/{}?features=zitplaats'.format(ritnummer)

        header={'x-api-key': str(self.api_key)}
        r = requests.get(query_zitplaatsen, headers=header)
        data = json.loads(r.text)
        zitplaatsEersteKlas = data['materieeldelen'][0]['zitplaatsen']['zitplaatsEersteKlas']
        zitplaatsTweedeKlas = data['materieeldelen'][0]['zitplaatsen']['zitplaatsTweedeKlas']

        return data['materieeldelen'][0]['zitplaatsen']