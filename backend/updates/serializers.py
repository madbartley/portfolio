from updates.models import Updates
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import serializers

class UpdatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Updates
        fields = ['id', 'post', 'project', 'date']