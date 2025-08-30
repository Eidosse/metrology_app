from django.db import models

class Instrument(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название прибора")
    type = models.CharField(max_length=50, verbose_name="Тип прибора")
    serial_number = models.CharField(max_length=50, unique=True, verbose_name="Серийный номер")
    last_verification_date = models.DateField(verbose_name="Дата последней поверки")
    next_verification_date = models.DateField(verbose_name="Дата следующей поверки")
    first_notification_date = models.DateField(verbose_name="Первая дата уведомления (подготовка)")
    second_notification_date = models.DateField(verbose_name="Вторая дата уведомления (заказ транспорта)")
    department = models.CharField(max_length=100, verbose_name="Отдел")
    status = models.CharField(max_length=20, choices=[
        ('active', 'Активен'),
        ('inactive', 'Неактивен'),
        ('needs_verification', 'Требует поверки'),
    ], default='active', verbose_name="Статус")
    passport_file = models.FileField(upload_to='passports/', null=True, blank=True, verbose_name="Паспорт прибора")
    verification_result_file = models.FileField(upload_to='verification_results/', null=True, blank=True, verbose_name="Результат поверки")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")

    def __str__(self):
        return f"{self.name} ({self.serial_number})"

    class Meta:
        verbose_name = "Прибор"
        verbose_name_plural = "Приборы"