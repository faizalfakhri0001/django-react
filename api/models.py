from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Gallery(models.Model):
    title = models.CharField(max_length=70, blank=True, null=True)
    image = models.ImageField(blank=True, null=True, upload_to="Gallery/")
    published = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name_plural = 'Galleries'
        ordering = ('-published',)

    def __str__(self):
        return f"{self.id}"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name='profile')
    image = models.ImageField(blank=True, null=True, upload_to="Profile/")
    first_name = models.CharField(blank=True, null=True, max_length=50)
    last_name = models.CharField(blank=True, null=True, max_length=50)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"

    def save(self, *args, **kwargs):
        self.first_name = self.user.first_name
        self.last_name = self.user.last_name
        super().save(*args, **kwargs)
