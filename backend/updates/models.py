from django.db import models

class Updates(models.Model):
  post = models.CharField(max_length=500)
  project = models.CharField(max_length=255)
  date = models.DateTimeField()

class Descriptions(models.Model):
  description = models.CharField(max_length=5000)
  project = models.CharField(max_length=255)
  tech_stack = models.CharField(max_length=2000)
