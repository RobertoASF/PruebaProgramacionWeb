from django.shortcuts import render
from django.http import HttpResponse
import random
# import string

# Create your views here.


def home(request):
    return render(request, 'home.html')

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
