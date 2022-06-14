from django.contrib import admin
#user prueba3, pass: prueba3
# Register your models here.
from .models import Producto, formulario , formularioDonaciones, fundacion

admin.site.register(Producto)
admin.site.register(formulario)
admin.site.register(fundacion)
admin.site.register(formularioDonaciones)