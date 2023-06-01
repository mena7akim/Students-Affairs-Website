from django.forms import fields
from django import forms
from pages.models import Student
from django.core.exceptions import ValidationError

class StudentForm(forms.ModelForm):
    class Meta:
        model=Student
        fields='__all__'
   