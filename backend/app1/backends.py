from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        User = get_user_model()
        try:
            # Try to authenticate by email instead of username
            user = User.objects.get(email=username)  # username field will actually be email here
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            return None
