import code
from distutils.command.upload import upload
from os import ST_MANDLOCK
from django.db import models

# Create your models here.

class Producto(models.Model):
    cod         = models.IntegerField(unique=True)
    nombre      = models.CharField(max_length=50)
    precio      = models.IntegerField(default=0)
    cat         = models.CharField(max_length=50)
    stock       = models.IntegerField(default=0)
    imagen      = models.ImageField(upload_to="productos", null=True)

    def __str__(self):
        return self.nombre