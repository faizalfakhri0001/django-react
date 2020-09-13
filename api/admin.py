from django.contrib import admin

from .models import Gallery, Profile


class GalleryAdmin(admin.ModelAdmin):
    list_display = ('title', 'published',)


class ProfileAdmin(admin.ModelAdmin):
    pass


admin.site.register(Gallery, GalleryAdmin)
admin.site.register(Profile, ProfileAdmin)
