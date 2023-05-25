from django.urls import path
from . import views

urlpatterns = [
    path('', views.general_home, name="general_home"),
    path('home/', views.home, name='home'),
    path('update/', views.update, name='update'),
    path('studentsPage/', views.students_page, name='studentsPage'),
    path('add/',views.add, name = 'ADD-STUDENT'),
]
