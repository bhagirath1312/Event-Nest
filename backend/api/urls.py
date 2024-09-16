from django.urls import path
from .views import event_list

urlpatterns = [
    path('api/events/', event_list, name='event-list'),
]