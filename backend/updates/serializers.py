from updates.models import Updates, Descriptions
from rest_framework import serializers

class UpdatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Updates
        fields = ['id', 'post', 'project', 'date']

class DescriptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Descriptions
        fields = ['id', 'description', 'project', 'tech_stack']