from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.models import User

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = get_user_model()
        fields = ['username', 'email', 'password', 'password2', 'birth_date']

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already exists")
        return value

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError("Passwords must match.")
        return attrs

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data.pop('password2')  # Remove password2 (we don't pass this to the model)
        user = get_user_model().objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user


# # custom token to use email for login
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)
#         # Add any custom claims you want to include in the token here
#         return token



# Custom TokenObtainPairSerializer to use email for authentication

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields.pop('username', None)  # Remove the default username field

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        # Manually authenticate using the email
        user = authenticate(request=self.context.get('request'), username=email, password=password)

        if not user:
            raise serializers.ValidationError('No active account found with the given credentials')

        # Use the parent method to get the token
        refresh = self.get_token(user)

        data = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'email': user.email,
            'username': user.username,
        }

        return data
