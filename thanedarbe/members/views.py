from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import FamilyMember
from .serializers import UserSerializer, FamilyUserSerializer

class AuthUserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

class FamilyUserListView(generics.ListAPIView):
    queryset = FamilyMember.objects.all()
    serializer_class = FamilyUserSerializer
    permission_classes = [IsAuthenticated]
