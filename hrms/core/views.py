from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Employee, Attendance
from .serializers import EmployeeSerializer, AttendanceSerializer


# Create your views here.
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer

    def get_queryset(self):
        employee = self.request.query_params.get('employee')
        date = self.request.query_params.get('date')

        queryset = Attendance.objects.all()

        if employee:
            queryset = queryset.filter(employee_id=employee)

        if date:
            queryset = queryset.filter(date=date)

        return queryset