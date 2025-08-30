from django.contrib import admin
from .models import Instrument

@admin.register(Instrument)
class InstrumentAdmin(admin.ModelAdmin):
    list_display = ('name', 'serial_number', 'status', 'next_verification_date', 'first_notification_date', 'second_notification_date')
    list_filter = ('status', 'department')
    search_fields = ('name', 'serial_number')