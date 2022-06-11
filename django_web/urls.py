"""django_web URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from tienda import views

urlpatterns = [
    path('', views.home, name='home'),
    path('tienda', views.tienda, name='tienda'),
    path('contacto', views.contacto, name='contacto'),
    path('donaciones', views.donaciones, name='donaciones'),
    path('nosotros', views.nosotros, name='nosotros'),
    path('perros', views.perros, name='perros'),
    path('gatos', views.gatos, name='gatos'),
    path('aves', views.aves, name='aves'),
    
]
