from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=200, default='Иван')
    last_name = models.CharField(max_length=200, default='Иванов')
    group = models.CharField(max_length=200, default='Руководство')

    def __str(self):
        return self.first_name + self.last_name
