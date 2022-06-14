import code
from distutils.command.upload import upload
from mailbox import NoSuchMailboxError
from platform import mac_ver
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

class formulario(models.Model):
    auto_increment_id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=75)
    apellido = models.CharField(max_length=100)
    correo = models.CharField(max_length=100)
    telefono = models.CharField(max_length=14)
    region = models.CharField(max_length=50)
    comuna = models.CharField(max_length=50)
    direccion = models.CharField(max_length=100)

    def __str__(self):
        return self.correo



class fundacion(models.Model):

    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre
        


class formularioDonaciones(models.Model):
    nombre = models.CharField(max_length=75)
    correo = models.EmailField(max_length=100)
    telefono = models.CharField(max_length=14)
    nombreFundacion = models.ForeignKey(fundacion, on_delete=models.PROTECT)
    monto = models.IntegerField()

    def __str__(self):
        return self.nombre

