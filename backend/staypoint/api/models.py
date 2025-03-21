from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

class UserDetails(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    contact_no = models.CharField(max_length=11)
    nid_number = models.CharField(max_length=10)
    address = models.TextField()
    is_host = models.BooleanField(default=False)
    image = models.ImageField(upload_to='profile_images/', blank=True, null=True)

    class Meta:
        verbose_name = "User Details"
        verbose_name_plural = "User Details"

    def __str__(self):
        return self.user.username
    

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserDetails.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


class Hotel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    rating = models.FloatField()
    image = models.ImageField(upload_to='hotels/', null=True, blank=True)
    check_in_time = models.TimeField(default="12:00")
    check_out_time = models.TimeField(default="10:00")
    amenities = models.JSONField(default=list)
    
    def __str__(self):
        return self.name