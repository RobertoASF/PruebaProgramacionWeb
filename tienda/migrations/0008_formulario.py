# Generated by Django 4.0.5 on 2022-06-14 03:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0007_users_correo'),
    ]

    operations = [
        migrations.CreateModel(
            name='formulario',
            fields=[
                ('auto_increment_id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=75)),
                ('apellido', models.CharField(max_length=100)),
                ('correo', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=14)),
                ('region', models.CharField(max_length=50)),
                ('comuna', models.CharField(max_length=50)),
                ('direccion', models.CharField(max_length=100)),
            ],
        ),
    ]