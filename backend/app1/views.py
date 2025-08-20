from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserRegistrationSerializer

# UserProfileAPIView
from rest_framework.permissions import IsAuthenticated



class UserRegistrationAPIView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()  # This will trigger the create method in the serializer
            return Response({
                'message': 'User created successfully!',
                'user': serializer.data  # Return the user data (excluding sensitive info like password)
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserProfileAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # You can access the authenticated user with request.user
        user = request.user
        return Response({
            'username': user.username,
            'email': user.email,
            # 'birth_date': user.birth_date,
        })
    

# # custom token to use email for login
# from rest_framework_simplejwt.views import TokenObtainPairView
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)
#         # Add any custom claims you want to include in the token here
#         return token


from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer



from app1.products import products
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import *
from .serializers import *

from django.shortcuts import get_object_or_404

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/'
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/delete/',
        
        '/api/products/<update>/<id>',
        
        '/api/products/<id>/reviews/',


        '/api/products/top/',
        '/api/products/<id>/',
    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


# get product by id
# @api_view(['GET'])
# def getProduct(request, pk):
#     product = None
#     for i in products:
#         if i['_id'] == pk:
#             product = i
#             break

#     return Response(product)



@api_view(['GET'])
def getProduct(request, pk):
    product = get_object_or_404(Product, pk=pk)
    serializer = ProductSerializer(product, many=False)
    
    return Response(serializer.data)