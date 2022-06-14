import code
from distutils.command.upload import upload
from mailbox import NoSuchMailboxError
from os import ST_MANDLOCK
from statistics import correlation
from unicodedata import name
from django.db import models

# Create your models here.

class Producto(models.Model):
    cod         = models.IntegerField(unique=True)
    nombre      = models.CharField(max_length=50)
    precio      = models.IntegerField(default=0)
    cat         = models.CharField(max_length=50)
    stock       = models.IntegerField(default=0)
    imagen      = models.ImageField(upload_to="productos")

    def __str__(self):
        return self.nombre

class Users(models.Model):
    id_usuario  = models.IntegerField(unique=True)
    name        = models.CharField(max_length=50)
    correo      = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nombre