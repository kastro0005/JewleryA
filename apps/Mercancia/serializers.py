from rest_framework import serializers
from .models import *

# Serializador de cada producto(vista JSON)


# Cadena:

# Lista
class CadenasListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cadena
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'photo',
            'photo2',
            'photo3',
        ]


# Elemento
class CadenaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cadena
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'photo',
            'photo2',
            'photo3',
        ]


# Brazalete:

# Lista
class BrazaletesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brazalete
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'photo',
            'photo2',
            'photo3',
        ]


# Elemento
class BrazaleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brazalete
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'photo',
            'photo2',
            'photo3',
        ]


# Tobillera:

# Lista
class TobillerasListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tobillera
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'photo',
            'photo2',
            'photo3',
        ]


# Elemento
class TobilleraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tobillera
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'photo',
            'photo2',
            'photo3',
        ]


# Arete:

# Lista
class AretesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arete
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'unidades',
            'photo',
            'photo2',
            'photo3',
        ]


# Elemento
class AreteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arete
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'unidades',
            'photo',
            'photo2',
            'photo3',
        ]


# Pircing:

# Lista
class PircingsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pircing
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'lugar_de_uso',
            'photo',
            'photo2',
            'photo3',
        ]


# Elemento
class PircingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pircing
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'lugar_de_uso',
            'photo',
            'photo2',
            'photo3',
        ]


# Dije:

# Lista
class DijesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dije
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'tipo_dije',
            'photo',
            'photo2',
            'photo3',
        ]


# Elemento
class DijeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dije
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'tipo_dije',
            'photo',
            'photo2',
            'photo3',
        ]


# Anillo:

# Lista
class AnillosListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anillo
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'lugar_de_uso',
            'cantidad',
            'tipo_anillo',
            'photo',
            'photo2',
            'photo3',
        ]


# Elemento
class AnilloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anillo
        fields = [
            'id',
            'name',
            'estado',
            'precio_unidad',
            'pureza',
            'size',
            'peso_neto',
            'genero_usuario',
            'lugar_de_uso',
            'cantidad',
            'tipo_anillo',
            'photo',
            'photo2',
            'photo3',
        ]
