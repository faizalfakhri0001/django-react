from rest_framework.routers import DefaultRouter
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import (
    UserViewSet,
    GalleryViewSet,
    GalleryDestroy,
    ProfileList,
    ProfileRetrieve,
)


router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
urlpatterns = router.urls


urlpatterns += [
    path('picture/', GalleryViewSet.as_view(), name='picture-list'),
    path('picture/<int:pk>', GalleryDestroy.as_view(), name='picture-delete'),
    path('profile/', ProfileList.as_view(), name='profile'),
    path('profile/<int:pk>', ProfileRetrieve.as_view(), name='profile_detail'),
]
