from django.db import models

class Updates(models.Model):
  post = models.CharField(max_length=500)
  project = models.CharField(max_length=255)
  date = models.DateTimeField()

