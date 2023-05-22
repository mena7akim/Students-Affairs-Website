from django.db import models

class Student(models.Model):
    ID = models.CharField(max_length=255, primary_key=True)
    name = models.CharField(max_length=255)
    birthDate = models.DateField(auto_now=False, auto_now_add=False)
    GPA = models.DecimalField(max_digits=3, decimal_places=2)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=11)
    level = [
        ("1", "one"),
        ("2", "tow"),
        ("3", "three"),
        ("4", "four"),
    ]
    department = [
        ("CS", "Computer Science"),
        ("IT", "Information Technology"),
        ("IS", "Information System"),
        ("DS", "Decision Support"),
        ("AI", "Artificial Intelligence"),
    ]
    status = [
        ("active", "active"),
        ("active", "active")
    ]
    gender = [
        ("male", "male"),
        ("female", "female")
    ]
