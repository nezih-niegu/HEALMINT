from django.db import models
from django.conf import settings

class Journal(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30)
    body = models.TextField(blank=True)
    #entered_by = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.CASCADE)
