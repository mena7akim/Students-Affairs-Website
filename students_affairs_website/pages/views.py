from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Student

def home(request):
  students = Student.objects.all().values()
  template = loader.get_template('home.html')
  context = {
    'students' : students,
  }
  return HttpResponse(template.render(context, request))

def general_home(request):
    template = loader.get_template('general-home.html')
    return HttpResponse(template.render())