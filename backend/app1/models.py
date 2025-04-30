from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # You can add extra fields here
    birth_date = models.DateField(null=True, blank=True)