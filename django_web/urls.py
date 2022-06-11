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
from xml.dom.minidom import Document
from django.urls import path
from tienda import views
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('tienda', views.tienda, name='tienda'),
    path('contacto', views.contacto, name='contacto'),
    path('donaciones', views.donaciones, name='donaciones'),
<<<<<<< HEAD
    path('nosotros', views.nosotros, name='nosotros'),
    path('perros', views.perros, name='perros'),
    path('gatos', views.gatos, name='gatos'),
    path('aves', views.aves, name='aves'),
    
=======
    path('tienda_original', views.tienda_original, name='tienda_original'),
>>>>>>> 6df66a2c48b50d8f813695775ba8a5569e2e5603
]


