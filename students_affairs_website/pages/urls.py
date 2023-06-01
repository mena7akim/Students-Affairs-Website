from django.urls import path
from . import views

urlpatterns = [
    path('', views.general_home, name="general_home"),
    path('home/', views.home, name='home'),
    path('update/', views.update, name='update'),
    path('ADD-STUDENT/',views.add, name = 'ADD-STUDENT'),
    path('home/ADD-STUDENT/',views.add, name = 'ADD-STUDENT'),
    path('search/department/<str:ID>', views.department, name='department'),
    path('search/',views.search,name='search'),
    path('studentsPage/', views.students_page, name='studentsPage'),
    path('get_data/', views.get_data, name='studentssPage'),
    path('update_data/', views.update_data, name='update_data'),
    path('update/edit/<str:ID>/',views.edit,name='Edit'),
    path('Update/<str:ID>',views.Update_d,name='Update_d'),
    path('delete/<str:ID>',views.delete,name='delete'),
    path('filter-data/', views.filter_data, name='filter_data'),
    path('Exist/', views.checkExist, name='checkExist'),
]
