from django.db import models

# Create your models here.
class Employee(models.Model):
    GENDER_CHOICES = (('male','Male'), ('female',('Female')))
    name = models.CharField(max_length=50)
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES, default="Male")
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=11) 
    city = models.CharField(max_length=70)
    salary = models.CharField(max_length=100)