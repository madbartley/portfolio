from django.shortcuts import render
from rest_framework import viewsets
from updates.models import Updates, Descriptions
from updates.serializers import UpdatesSerializer, DescriptionsSerializer
from rest_framework import renderers

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import generics


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

class DescriptionsViewSet(viewsets.ModelViewSet):
    """
    This ViewSet automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Descriptions.objects.all()
    serializer_class = DescriptionsSerializer


class UpdatesHighlight(generics.GenericAPIView):
    queryset = Updates.objects.all()
    renderer_classes = [renderers.StaticHTMLRenderer]

    def get(self, request, *args, **kwargs):
        update = self.get_object()
        return Response(update.highlighted)
    

