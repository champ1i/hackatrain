from django.db import models


# Create your models here.
class Trip(models.Model):
    departure_time = models.CharField(max_length=255)
    arrival_time = models.CharField(max_length=255)
    origin = models.CharField(max_length=255)
    destination = models.CharField(max_length=255)
    first_class_normal_price = models.FloatField()
    first_class_spot_price = models.FloatField()
    second_class_normal_price = models.FloatField()
    second_class_spot_price = models.FloatField()
    capacity_first_class = models.IntegerField()
    capacity_second_class = models.IntegerField()
