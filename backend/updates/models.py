from django.db import models
from pygments.lexers import get_lexer_by_name
from pygments.formatters.html import HtmlFormatter
from pygments import highlight

class Updates(models.Model):
  post = models.CharField(max_length=500)
  project = models.CharField(max_length=255)
  date = models.DateField()

