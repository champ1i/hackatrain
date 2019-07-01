from django.db import models


# Create your models here.
class Trip(models.Model):
    start = models.CharField(max_length=255)
    stop = models.CharField(max_length=255)
