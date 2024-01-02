from django.db import models
from django.core.validators import validate_comma_separated_integer_list

# Create your models here.


class Mercancia(models.Model):

    class MercanciaObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(estado='publico')

    name = models.CharField(max_length=30, blank=True,
                            null=True, default='')
    precio_unidad = models.FloatField(default=0, blank=True, null=True)
    pureza = models.CharField(validators=[
                              validate_comma_separated_integer_list], max_length=200, blank=True, null=True, default='0')
    size = models.CharField(validators=[
                            validate_comma_separated_integer_list], max_length=200, blank=True, null=True, default='0')
    peso_neto = models.CharField(validators=[
                                 validate_comma_separated_integer_list], max_length=200, blank=True, null=True, default='0')

    OPTIONS = (
        ('privado', 'Privado'),
        ('publico', 'Publico'),
    )
    estado = models.CharField(max_length=8, choices=OPTIONS, default='privado')
    objects = models.Manager()  # default
    mercanciaobjects = MercanciaObjects()  # Custom

    GENERO = [
        ('unisex', 'Unisex'),
        ('female', 'Female'),
        ('male', 'Male'),
    ]
    genero_usuario = models.CharField(
        max_length=17, choices=GENERO, blank=True, null=True, default='unisex')

    class Meta:
        abstract = True


def cadena_photo_directory(instance, filename):
    return 'Cadena/{0}/{1}'.format(instance.name, filename)


class Cadena(Mercancia):

    photo = models.ImageField(
        upload_to=cadena_photo_directory, default='imgExample.jpg')
    photo2 = models.ImageField(
        upload_to=cadena_photo_directory, default='imgExample.jpg')
    photo3 = models.ImageField(
        upload_to=cadena_photo_directory, default='imgExample.jpg')

    def __str__(self):
        txt = "Nombre: {0} | Precio: {1} | Pureza: {2} | Size: {3} | Peso: {4}"

        return txt.format(self.name, self.precio_unidad, self.pureza, self.size, self.peso_neto)


def brazalete_photo_directory(instance, filename):
    return 'Brazalete/{0}/{1}'.format(instance.name, filename)


class Brazalete(Mercancia):

    photo = models.ImageField(
        upload_to=brazalete_photo_directory, default='imgExample.jpg')
    photo2 = models.ImageField(
        upload_to=brazalete_photo_directory, default='imgExample.jpg')
    photo3 = models.ImageField(
        upload_to=brazalete_photo_directory, default='imgExample.jpg')

    def __str__(self):
        txt = "Nombre: {0} | Precio: {1} | Pureza: {2} | Size: {3} | Peso: {4}"

        return txt.format(self.name, self.precio_unidad, self.pureza, self.size, self.peso_neto)


def tobillera_photo_directory(instance, filename):
    return 'Tobillera/{0}/{1}'.format(instance.name, filename)


class Tobillera(Mercancia):

    photo = models.ImageField(
        upload_to=tobillera_photo_directory, default='imgExample.jpg')
    photo2 = models.ImageField(
        upload_to=tobillera_photo_directory, default='imgExample.jpg')
    photo3 = models.ImageField(
        upload_to=tobillera_photo_directory, default='imgExample.jpg')

    def __str__(self):
        txt = "Nombre: {0} | Precio: {1} | Pureza: {2} | Size: {3} | Peso: {4}"

        return txt.format(self.name, self.precio_unidad, self.pureza, self.size, self.peso_neto)


def anillo_photo_directory(instance, filename):
    return 'Anillo/{0}/{1}'.format(instance.name, filename)


class Anillo(Mercancia):

    LUGAR_USO = [
        ('mano', 'Mano'),
        ('pie', 'Pie'),
    ]
    lugar_de_uso = models.CharField(
        max_length=4, choices=LUGAR_USO, blank=True, null=True, default='mano')

    CANTIDAD = [
        ('simple', 'Simple'),
        ('pareja', 'Pareja'),
    ]
    cantidad = models.CharField(
        max_length=6, choices=CANTIDAD, blank=True, null=True, default='simple')

    TIPO_ANI = [
        ('compromiso', 'Compromiso'),
        ('matrimonio', 'Matrimonio'),
        ('normal', 'Normal'),
    ]
    tipo_anillo = models.CharField(
        max_length=10, choices=TIPO_ANI, blank=True, null=True, default='normal')

    photo = models.ImageField(
        upload_to=anillo_photo_directory, default='imgExample.jpg')
    photo2 = models.ImageField(
        upload_to=anillo_photo_directory, default='imgExample.jpg')
    photo3 = models.ImageField(
        upload_to=anillo_photo_directory, default='imgExample.jpg')

    def __str__(self):
        txt = "Nombre: {0} | Precio: {1} | Pureza: {2} | Size: {3} | Peso: {4}| Lugar: {5} | Cantidad: {6} | Tipo: {7}"
        return txt.format(self.name, self.precio_unidad, self.pureza, self.size, self.peso_neto, self.lugar_de_uso, self.cantidad, self.tipo_anillo)


def dije_photo_directory(instance, filename):
    return 'Dije/{0}/{1}'.format(instance.name, filename)


class Dije(Mercancia):

    TIPO_DIJ = [
        ('animales', 'Animales'),
        ('flores', 'Flores'),
        ('formas', 'Formas'),
        ('otros', 'Otros'),
    ]
    tipo_dije = models.CharField(
        max_length=10, choices=TIPO_DIJ, blank=True, null=True, default='otros')

    photo = models.ImageField(
        upload_to=dije_photo_directory, default='imgExample.jpg')
    photo2 = models.ImageField(
        upload_to=dije_photo_directory, default='imgExample.jpg')
    photo3 = models.ImageField(
        upload_to=dije_photo_directory, default='imgExample.jpg')

    def __str__(self):
        txt = "Nombre: {0} | Precio: {1} | Pureza: {2} | Size: {3} | Peso: {4} | Tipo: {5}"
        return txt.format(self.name, self.precio_unidad, self.pureza, self.size, self.peso_neto, self.tipo_dije)


def arete_photo_directory(instance, filename):
    return 'Arete/{0}/{1}'.format(instance.name, filename)


class Arete(Mercancia):

    UNIDADES = [
        ('solo', 'Solo'),
        ('pareja', 'Pareja'),
    ]
    unidades = models.CharField(
        max_length=6, choices=UNIDADES, blank=True, null=True, default='pareja')

    photo = models.ImageField(
        upload_to=arete_photo_directory, default='imgExample.jpg')
    photo2 = models.ImageField(
        upload_to=arete_photo_directory, default='imgExample.jpg')
    photo3 = models.ImageField(
        upload_to=arete_photo_directory, default='imgExample.jpg')

    def __str__(self):
        txt = "Nombre: {0} | Precio: {1} | Pureza: {2} | Size: {3} | Peso: {4} | Unidades: {5}"
        return txt.format(self.name, self.precio_unidad, self.pureza, self.size, self.peso_neto, self.unidades)


def pircing_photo_directory(instance, filename):
    return 'Pircing/{0}/{1}'.format(instance.name, filename)


class Pircing(Mercancia):

    LUGAR_USO = [
        ('oreja', 'Oreja'),
        ('nariz', 'Nariz'),
        ('boca', 'Boca'),
        ('ombligo', 'Ombligo'),
        ('otro', 'Otro'),
    ]
    lugar_de_uso = models.CharField(
        max_length=7, choices=LUGAR_USO, blank=True, null=True, default='otro')

    photo = models.ImageField(
        upload_to=pircing_photo_directory, default='imgExample.jpg')
    photo2 = models.ImageField(
        upload_to=pircing_photo_directory, default='imgExample.jpg')
    photo3 = models.ImageField(
        upload_to=pircing_photo_directory, default='imgExample.jpg')

    def __str__(self):
        txt = "Nombre: {0} | Precio: {1} | Pureza: {2} | Size: {3} | Peso: {4} | Lugar: {5}"
        return txt.format(self.name, self.precio_unidad, self.pureza, self.size, self.peso_neto, self.lugar_de_uso)
