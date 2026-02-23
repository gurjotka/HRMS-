from rest_framework import serializers
from .models import Employee, Attendance


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

    def validate_email(self, value):
        if Employee.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already exists.")
        return value


class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = '__all__'

    def validate(self, data):
        employee = data.get('employee')
        date = data.get('date')

        if Attendance.objects.filter(employee=employee, date=date).exists():
            raise serializers.ValidationError("Attendance already marked for this date.")

        return data