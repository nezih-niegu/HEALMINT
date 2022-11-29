from django.db import models

class Journal(models.Model):
    title = models.CharField(max_length=30)
    body = models.TextField(blank=True)

