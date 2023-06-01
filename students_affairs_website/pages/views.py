from django.shortcuts import render,redirect
from django.http import HttpResponse, JsonResponse
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
  return render(request, 'studentsPage.html')

def get_data(request):
  students_list = Student.objects.all().values()
  return JsonResponse(list(students_list), safe=False)

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
    
def search(request):
    if'q' in request.GET:
        q=request.GET['q']
        data=Student.objects.filter(ID__icontains=q)|Student.objects.filter(name__icontains=q)
    else:
        data = Student.objects.all()
    context={
        'data':data
    }
    return render(request,'search.html',context)

def update_data(request):
  student_id = request.POST.get('student_id')
  student = Student.objects.get(ID=student_id)

  if (student.status == "active"):
    student.status = "inactive"
  else:
    student.status = "active"

  student.save()
  return JsonResponse({'success': student.status})


def edit(request, ID):
    student = Student.objects.get(ID=ID)
    form = StudentForm(instance=student)
    return render(request,'Edit.html', {'form':form, 'student':student})


def Update_d(request,ID):
    student = Student.objects.get(ID=ID)
    form = StudentForm(request.POST or None,instance=student)
    if form.is_valid():
     form.save()
     return redirect("/home/")
    return render(request, 'Edit.html', {'form':form})


def delete(request, ID):  
    student= Student.objects.get(ID=ID)  
    student.delete()  
    return redirect("/home/")
