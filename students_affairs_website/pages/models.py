from django.db import models

class Student(models.Model):
    ID = models.CharField(max_length=255, primary_key=True)
    name = models.CharField(max_length=255)
    birthDate = models.DateField(auto_now=False, auto_now_add=False)
    GPA = models.DecimalField(max_digits=3, decimal_places=2)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=11)
    level_choices = [
        ("1", "one"),
        ("2", "tow"),
        ("3", "three"),
        ("4", "four"),
    ]
    level = models.CharField(max_length=10,
                    choices=level_choices)

    department_choices = [
        ("CS", "Computer Science"),
        ("IT", "Information Technology"),
        ("IS", "Information System"),
        ("DS", "Decision Support"),
        ("AI", "Artificial Intelligence"),
    ]
    department = models.CharField(max_length=40,
                                choices=department_choices)

    status_choices = [
        ("active", "active"),
        ("inactive", "inactive")
    ]
    status = models.CharField(max_length=15,
                            choices=status_choices)

    gender_choices = [
        ("male", "male"),
        ("female", "female")
    ]
    gender = models.CharField(max_length=10,
                            choices=gender_choices)
