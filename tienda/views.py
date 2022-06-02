from django.shortcuts import render
from django.http import HttpResponse
import random
# import string

# Create your views here.


def home(request):
    return render(request, 'home.html', {'name': 'Fazt'})


def about(request):
    return render(request, 'about.html')

def contacto(request):
    return render(request, 'contacto.html')

    