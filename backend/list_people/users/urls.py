from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_users),
    path('list_group/', views.list_users_group),
    path('sorted/', views.sorted),
    path('sorted_reverse/', views.sorted_reverse),
    path('add/', views.add)
]