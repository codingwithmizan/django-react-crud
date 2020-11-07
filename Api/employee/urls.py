from django.urls import path
from .views import EmployeeList, EmployeeDetail
urlpatterns = [
    path('employees/', EmployeeList.as_view()),
    path('employees/<int:pk>', EmployeeDetail.as_view()),
]