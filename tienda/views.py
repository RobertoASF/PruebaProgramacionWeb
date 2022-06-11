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

<<<<<<< HEAD
def nosotros(request):
    return render(request, 'nosotros.html')    
=======

def tienda_original(request):
    return render(request, 'tienda_original.html')

>>>>>>> 6df66a2c48b50d8f813695775ba8a5569e2e5603

    
<<<<<<< HEAD
def gatos(request):
    return render(request, 'gatos.html') 

def aves(request):
    return render(request, 'aves.html') 
=======
    
>>>>>>> 6df66a2c48b50d8f813695775ba8a5569e2e5603
