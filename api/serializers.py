from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Gallery, Profile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'id', 'password')
        read_only_fields = ('id',)
        extra_kwargs = {
            'password': {'write_only': True}
        }


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ('id', 'title', 'image',)
        read_only_fields = ('id',)

    def create(self, validated_data):
        return Gallery.objects.create(**validated_data)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'user', 'first_name', 'last_name', 'image')
        read_only_fields = ('id',)

    def create(self, validated_data):
        return Gallery.objects.create(**validated_data)
