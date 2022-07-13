from dataclasses import fields
from django import forms
from .models import formularioDonaciones


class contactoFundacion (forms.ModelForm):
    class Meta:
        model = formularioDonaciones
        fields = ["nombre" ,"correo" ,"telefono" ,"nombreFundacion" ,"monto"]
        fields = '__all__'