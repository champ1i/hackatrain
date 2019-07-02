# from . import api
import numpy as np
import pandas as pd
from datetime import datetime

class Pricing(object):

    @classmethod
    def get_surge_factor(self, seat_capacity_first, seat_capacity_second, demand, \
                         max_surge_factor=2, min_surge_factor=1):
        try:
            surge_factor = (max_surge_factor - min_surge_factor) / ((seat_capacity_first + seat_capacity_second) / demand)
        except ZeroDivisionError as e:
            surge_factor = 1

        return surge_factor

    @classmethod
    def get_surge_price(self, base_price, \
                        seat_capacity_first,\
                        seat_capacity_second,\
                        demand):

        max_price = base_price
        max_surge_factor = 2
        min_surge_factor = 1

        surge_factor = self.get_surge_factor(seat_capacity_first, seat_capacity_second, demand, max_surge_factor, min_surge_factor)
        price = base_price * surge_factor

        price = np.maximum(max_price, price)
        return price

    @classmethod
    def get_surge_price_time(self, base_price, time=datetime.now()):
        busy_hours = list(range(7,9)) + list(range(16,18))

        if time.hour in busy_hours:
            surge_factor = 1.4
        else:
            surge_factor = 0.8
        price = surge_factor * base_price

        return price
