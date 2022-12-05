from django.db import models
from django.contrib.auth.models import (AbstractUser)

# Create your models here.
class AppUser(AbstractUser):
    """
    user account
    """
    email = models.EmailField(
        
        max_length=255,
        unique=True,
    )

    # A user account must be active to log in, etc.
    is_active =  models.BooleanField(
       default=True,
       help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active',
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    
class Example(models.Model):
    title=models.CharField(max_length=250, null=False)
    content=models.TextField(null=True)
    user=models.ForeignKey(AppUser, on_delete=models.CASCADE)


