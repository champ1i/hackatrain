# from . import api
import numpy as np
import pandas as pd

class Pricing(object):

    def get_surge_factor(self, seat_capacity_first, seat_capacity_second, demand, \
                         max_surge_factor=2, min_surge_factor=1):
        try:
            surge_factor = (max_surge_factor - min_surge_factor) / ((seat_capacity_first + seat_capacity_second) / demand)
        except ZeroDivisionError as e:
            surge_factor = 1

        return surge_factor


    def get_surge_price(self, base_price, \
                        seat_capacity_first,\
                        seat_capacity_second,\
                        demand):

        max_price = base_price
        max_surge_factor = 2
        min_surge_factor = 1

        surge_factor = self.get_surge_factor(seat_capacity_first, seat_capacity_second, demand, max_surge_factor, min_surge_factor)
        surge_price = base_price * surge_factor

        surge_price = np.maximum(max_price, surge_price)
        return surge_price