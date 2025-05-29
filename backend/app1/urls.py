from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import UserRegistrationAPIView
from .views import UserProfileAPIView
from .views import CustomTokenObtainPairView

from .views import getRoutes

from .views import getProducts # gets all products
from .views import getProduct # gets individual products, requires primary key

urlpatterns = [
    path('api/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', UserRegistrationAPIView.as_view(), name='user-registration'),
    path('api/profile/', UserProfileAPIView.as_view(), name='user-profile'),
    path('api/products/', views.getProducts, name='products'),
    path('api/product/<str:pk>', views.getProduct, name='product'),
    path('api/getroutes/', views.getRoutes, name='routes'),

]