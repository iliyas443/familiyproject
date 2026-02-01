from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

class AuthUserModel(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    
    groups = models.ManyToManyField(
        Group,
        related_name="authuser_set",
        blank=True,
        help_text="Groups for AuthUserModel"
    )
    
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="authuser_permissions_set",
        blank=True,
        help_text="Permissions for AuthUserModel"
    )

class FamilyUserModel(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
