from django.contrib import admin
#user prueba3, pass: prueba3
# Register your models here.
from .models import Producto

admin.site.register(Producto)
