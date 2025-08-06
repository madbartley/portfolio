from django.shortcuts import render
from rest_framework import viewsets
from updates.models import Updates, Descriptions
from updates.serializers import UpdatesSerializer, DescriptionsSerializer, UserSerializer
from rest_framework import renderers

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import generics
from rest_framework import permissions
from updates.permissions import IsOwnerOrReadOnly

from django.contrib.auth.models import User


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'updates': reverse('update-list', request=request, format=format),
    })


class UpdatesViewSet(viewsets.ModelViewSet):
    """
    This ViewSet automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Updates.objects.all()
    serializer_class = UpdatesSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class DescriptionsViewSet(viewsets.ModelViewSet):
    """
    This ViewSet automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Descriptions.objects.all()
    serializer_class = DescriptionsSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class UpdatesHighlight(generics.GenericAPIView):
    queryset = Updates.objects.all()
    renderer_classes = [renderers.StaticHTMLRenderer]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]
    def get(self, request, *args, **kwargs):
        update = self.get_object()
        return Response(update.highlighted)
    
class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    

