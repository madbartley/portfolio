from rest_framework import renderers
from updates.views import UpdatesViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from updates import views



# Create a router and register our ViewSets with it.
router = DefaultRouter()
router.register(r'updates', views.UpdatesViewSet, basename='updates')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
    path('', views.api_root),
]