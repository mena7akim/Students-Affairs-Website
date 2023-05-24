from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Student

def home(request):
  template = loader.get_template('home.html')
  return HttpResponse(template.render())

def general_home(request):
    template = loader.get_template('general-home.html')
    return HttpResponse(template.render())

def update(request):
    template = loader.get_template('update.html')
    students = Student.objects.all().values()
    context = {
      'students' : students,
    }
    return HttpResponse(template.render(context, request))