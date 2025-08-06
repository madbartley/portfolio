from updates.models import Updates, Descriptions
from rest_framework import serializers
from django.contrib.auth.models import User

class UpdatesSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Updates
        fields = ['id', 'post', 'project', 'date', 'owner']

class DescriptionsSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Descriptions
        fields = ['id', 'description', 'project', 'tech_stack', 'owner']

class UserSerializer(serializers.ModelSerializer):
    updates = serializers.PrimaryKeyRelatedField(many=True, queryset=Updates.objects.all())
    descriptions = serializers.PrimaryKeyRelatedField(many=True, queryset=Descriptions.objects.all())


    class Meta:
        model = User
        fields = ['id', 'username', 'updates', 'descriptions']