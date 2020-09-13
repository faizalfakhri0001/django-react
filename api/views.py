from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from .serializers import UserSerializer, GallerySerializer, ProfileSerializer
from rest_framework import viewsets
from rest_framework.response import Response

from rest_framework.generics import (
    ListAPIView, RetrieveAPIView, CreateAPIView,
    UpdateAPIView, DestroyAPIView, ListCreateAPIView,
    RetrieveUpdateDestroyAPIView
)

from .models import Gallery, Profile


class UserViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)


class GalleryViewSet(ListCreateAPIView):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all()


class GalleryDestroy(DestroyAPIView):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all()


class ProfileList(ListAPIView):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()


class ProfileRetrieve(RetrieveUpdateDestroyAPIView):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
