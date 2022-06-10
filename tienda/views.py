from django.shortcuts import render
from django.http import HttpResponse
import random
# import string

# Create your views here.


def home(request):
    return render(request, 'home.html', {'name': 'gvrrido'})

    

def contacto(request):
    return render(request, 'contacto.html')

def tienda(request):
    return render(request, 'tienda.html')


def donaciones(request):
    return render(request, 'donaciones.html')


def tienda_original(request):
    return render(request, 'tienda_original.html')


    
    