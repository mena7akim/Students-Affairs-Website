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

def students_page(request):
  template = loader.get_template('studentsPage.html')
  students = Student.objects.all().values()
  context = {
      'students' : students,
  }
  return HttpResponse(template.render(context, request))

def add(request):
    if request.method == 'POST':
      id = request.POST.get('id')
      name = request.POST.get('name')
      birth_date = request.POST.get('birth')
      email = request.POST.get('email')
      level = request.POST.get('level')
      department = request.POST.get('department')
      gender = request.POST.get('Gender')
      status = request.POST.get('status')
      mobile_number = request.POST.get('number')
      gpa = request.POST.get('gpa')
      data = Student(ID = id, 
                  name = name,
                  birthDate = birth_date,
                  GPA = gpa,
                  email =email,
                  phone = mobile_number,
                  level = level,
                  department=department,                 
                  gender = gender,
                  status = status)
      data.save()
   
      return render(request,'ADD-STUDENT.html')
    else:
       return render(request,'ADD-STUDENT.html')
      
def department(request):
    if request.method=="post" :
        student=Student.objects.get(id=request.ID) 
        student.department  =request.post['Sdep']
        student.save()
       

    else:
        student=Student.objects.get(id=request.ID) 
        context={
             'Sname':student.name,
             'SId':student.ID,
             'Sdep':student.department 
        }
        return render(request,'department.html',context) 
    
