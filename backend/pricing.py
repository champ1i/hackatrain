from . import api
import numpy as np

class Pricing(object):

    def get_surge_price(self, base_price, seat_available_first=0, \
                        seat_available_second=0,
                        n_demand=0):
        max_price = base_price
        surge_factor =
        surge_price = base_price * surge_percentage
        surge_price = np.maximum(max_price, surge_price)