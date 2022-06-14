from django.contrib import admin
#user prueba3, pass: prueba3
# Register your models here.
from .models import Producto, formulario

admin.site.register(Producto)
admin.site.register(formulario)