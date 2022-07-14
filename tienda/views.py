from django.shortcuts import render
from django.http import HttpResponse
import random

from tienda.models import formulario,Producto

# import string

# Create your views here.


def index(request):
    return render(request, 'index.html')


def tienda(request):
    return render(request, 'tienda.html')

def contacto(request):
    return render(request, 'contacto.html')

def donaciones(request):
    return render(request, 'donaciones.html')


def nosotros(request):
    return render(request, 'nosotros.html')

def perros(request):
    return render(request, 'perros.html')

def gatos(request):
    return render(request, 'gatos.html')

def aves(request):
    return render(request, 'aves.html')

def carrito(request):
    return render(request, 'carrito.html')

def login(request):
    return render(request, 'login.html')
    
from .forms import contactoFundacion

def donacion(request):

    data = {
        'form' : contactoFundacion()
    }

    if request.method == 'POST':
        formularioDon = contactoFundacion(data=request.POST)
        if formularioDon.is_valid():
            formularioDon.save()
            data["mensaje"] = "GRACIAS POR TU DONACION "
        else:
            data['form'] = formularioDon

    return render(request, 'donacion.html', data)


##########################################################################################################################
from .serializers import productoSerializer
from rest_framework import viewsets




class ProductoViewSet(viewsets.ModelViewSet):
    queryset =Producto.objects.all()
    serializer_class = productoSerializer


    
