from django.db import models
from pygments.lexers import get_lexer_by_name
from pygments.formatters.html import HtmlFormatter
from pygments import highlight

class Updates(models.Model):
  owner = models.ForeignKey('auth.User', related_name='Users', on_delete=models.CASCADE, default="mbartley")
  post = models.CharField(max_length=500)
  project = models.CharField(max_length=255)
  date = models.DateTimeField()
  highlighted = models.TextField(default="id")

  def save(self, *args, **kwargs):
    """
    Use the `pygments` library to create a highlighted HTML
    representation of the code snippet.
    """
    lexer = get_lexer_by_name(self.language)
    linenos = 'table' if self.linenos else False
    options = {'title': self.title} if self.title else {}
    formatter = HtmlFormatter(style=self.style, linenos=linenos,
                              full=True, **options)
    self.highlighted = highlight(self.code, lexer, formatter)
    super().save(*args, **kwargs)

class Descriptions(models.Model):
  description = models.CharField(max_length=5000)
  project = models.CharField(max_length=255)
  tech_stack = models.CharField(max_length=2000)
