from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import permissions
from .serializers import *
from .models import *
from rest_framework.parsers import MultiPartParser, FormParser
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination
from django.db.models import Q
from functools import reduce
from rest_framework import filters


# CRUDs de cada producto

# Cadenas:

# Busqueda
class SearchCadenasView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        serch_term = request.query_params.get('s')
        matches = Cadena.objects.filter(
            Q(name__icontains=serch_term) |
            Q(precio_unidad__icontains=serch_term) |
            Q(size__icontains=serch_term) |
            Q(peso_neto__icontains=serch_term)
        )
        queryset = matches.order_by('name')
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(queryset, request)
        serializer = CadenasListSerializer(results, many=True)

        return paginator.get_paginated_response({'search_cadenas': serializer.data})


# Listar
class CadenasListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Cadena.mercanciaobjects.all().exists():
            cadenas = Cadena.mercanciaobjects.all()

            queryset = cadenas.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = CadenasListSerializer(results, many=True)

            return paginator.get_paginated_response({'cadenas': serializer.data})
        else:
            return Response({'error': 'ningun cadena encontrado'}, status=status.HTTP_404_NOT_FOUND)


# ListarAdmin
class CadenasListAdminView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Cadena.objects.all().exists():
            cadenas = Cadena.objects.all()

            queryset = cadenas.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = CadenasListSerializer(results, many=True)

            return paginator.get_paginated_response({'cadenas': serializer.data})
        else:
            return Response({'error': 'ningun cadena encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarName
class CadenasListNameView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('name',)

    def get(self, request, format=None):
        if Cadena.mercanciaobjects.all().exists():
            queryset = Cadena.mercanciaobjects.all()
            name_query = request.GET.get('name', None)

            if name_query:
                queryset = queryset.filter(name__icontains=name_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = CadenasListSerializer(results, many=True)

            return paginator.get_paginated_response({'cadenasName': serializer.data})
        else:
            return Response({'error': 'ningun cadena encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarSize
class CadenasListSizeView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('size',)

    def get(self, request, format=None):
        if Cadena.mercanciaobjects.all().exists():
            queryset = Cadena.mercanciaobjects.all()
            size_query = request.GET.get('size', None)

            if size_query:
                queryset = queryset.filter(size__contains=size_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = CadenasListSerializer(results, many=True)

            return paginator.get_paginated_response({'cadenasSize': serializer.data})
        else:
            return Response({'error': 'ningun cadena encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPureza
class CadenasListPurezaView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('pureza',)

    def get(self, request, format=None):
        if Cadena.mercanciaobjects.all().exists():
            queryset = Cadena.mercanciaobjects.all()
            pureza_query = request.GET.get('pureza', None)

            if pureza_query:
                queryset = queryset.filter(pureza__contains=pureza_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = CadenasListSerializer(results, many=True)

            return paginator.get_paginated_response({'cadenasPureza': serializer.data})
        else:
            return Response({'error': 'ningun cadena encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPeso
class CadenasListPesoView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('peso_neto',)

    def get(self, request, format=None):
        if Cadena.mercanciaobjects.all().exists():
            queryset = Cadena.mercanciaobjects.all()
            peso_neto_query = request.GET.get('peso_neto', None)

            if peso_neto_query:
                queryset = queryset.filter(peso_neto__contains=peso_neto_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = CadenasListSerializer(results, many=True)

            return paginator.get_paginated_response({'cadenasPeso': serializer.data})
        else:
            return Response({'error': 'ningun cadena encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPrecio
class CadenasListPrecioView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('precio_unidad',)

    def get(self, request, format=None):
        if Cadena.mercanciaobjects.all().exists():
            queryset = Cadena.mercanciaobjects.all()
            precio_unidad_query = request.GET.get('precio_unidad', None)

            if precio_unidad_query:
                queryset = queryset.filter(
                    precio_unidad__lte=precio_unidad_query)

            queryset = queryset.order_by('precio_unidad')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = CadenasListSerializer(results, many=True)

            return paginator.get_paginated_response({'cadenasPrecio': serializer.data})
        else:
            return Response({'error': 'ningun cadena encontrado'}, status=status.HTTP_404_NOT_FOUND)


# Obtener
class CadenaView(APIView):
    def get(self, request, id, format=None):
        if Cadena.objects.filter(id=id).exists():

            cadena = Cadena.objects.get(id=id)
            serializer = CadenaSerializer(cadena)

            return Response({'cadena': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'no exite el elemento'}, status=status.HTTP_404_NOT_FOUND)


# Editar
class EditCadenaView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        cadena = Cadena.objects.get(id=id)
        if (data['name']):
            cadena.name = data['name']
            cadena.save()
        if (data['precio_unidad']):
            cadena.precio_unidad = data['precio_unidad']
            cadena.save()
        if (data['pureza']):
            cadena.pureza = data['pureza']
            cadena.save()
        if (data['size']):
            cadena.size = data['size']
            cadena.save()
        if (data['peso_neto']):
            cadena.peso_neto = data['peso_neto']
            cadena.save()
        if (data['genero_usuario']):
            cadena.genero_usuario = data['genero_usuario']
            cadena.save()
        if (data['photo']):
            cadena.photo = data['photo']
            cadena.save()
        if (data['photo2']):
            cadena.photo2 = data['photo2']
            cadena.save()
        if (data['photo3']):
            cadena.photo3 = data['photo3']
            cadena.save()

        return Response({'success': 'Cadena editado'})


# EditarPrivado
class EditCadenaPrivateView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        cadena = Cadena.objects.get(id=id)

        cadena.estado = 'privado'
        cadena.save()
        return Response({'success': 'Cadena editado'})


# EditarPublico
class EditCadenaPublicView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        cadena = Cadena.objects.get(id=id)

        cadena.estado = 'publico'
        cadena.save()
        return Response({'success': 'Cadena editado'})


# Borrar
class DeleteCadenaView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def delete(self, request, id, format=None):
        cadena = Cadena.objects.get(id=id)
        cadena.delete()

        return Response({'success': 'Cadena eliminado'})


# Crear
class CreateCadenaView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        Cadena.objects.create()
        return Response({'success': 'Cadena creado'})


# Brazaletes:

# Busqueda
class SearchBrazaletesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        serch_term = request.query_params.get('s')
        matches = Brazalete.objects.filter(
            Q(name__icontains=serch_term) |
            Q(precio_unidad__icontains=serch_term) |
            Q(size__icontains=serch_term) |
            Q(peso_neto__icontains=serch_term)
        )
        queryset = matches.order_by('name')
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(queryset, request)
        serializer = BrazaletesListSerializer(results, many=True)

        return paginator.get_paginated_response({'search_brazaletes': serializer.data})


# Listar
class BrazaletesListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Brazalete.mercanciaobjects.all().exists():
            brazaletes = Brazalete.mercanciaobjects.all()

            queryset = brazaletes.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = BrazaletesListSerializer(results, many=True)

            return paginator.get_paginated_response({'brazaletes': serializer.data})
        else:
            return Response({'error': 'ningun brazalete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# ListarAdmin
class BrazaletesListAdminView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Brazalete.objects.all().exists():
            brazaletes = Brazalete.objects.all()

            queryset = brazaletes.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = BrazaletesListSerializer(results, many=True)

            return paginator.get_paginated_response({'brazaletes': serializer.data})
        else:
            return Response({'error': 'ningun brazalete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarName
class BrazaletesListNameView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('name',)

    def get(self, request, format=None):
        if Brazalete.mercanciaobjects.all().exists():
            queryset = Brazalete.mercanciaobjects.all()
            name_query = request.GET.get('name', None)

            if name_query:
                queryset = queryset.filter(name__icontains=name_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = BrazaletesListSerializer(results, many=True)

            return paginator.get_paginated_response({'brazaletesName': serializer.data})
        else:
            return Response({'error': 'ningun brazalete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarSize
class BrazaletesListSizeView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('size',)

    def get(self, request, format=None):
        if Brazalete.mercanciaobjects.all().exists():
            queryset = Brazalete.mercanciaobjects.all()
            size_query = request.GET.get('size', None)

            if size_query:
                queryset = queryset.filter(size__contains=size_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = BrazaletesListSerializer(results, many=True)

            return paginator.get_paginated_response({'brazaletesSize': serializer.data})
        else:
            return Response({'error': 'ningun brazalete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPureza
class BrazaletesListPurezaView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('pureza',)

    def get(self, request, format=None):
        if Brazalete.mercanciaobjects.all().exists():
            queryset = Brazalete.mercanciaobjects.all()
            pureza_query = request.GET.get('pureza', None)

            if pureza_query:
                queryset = queryset.filter(pureza__contains=pureza_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = BrazaletesListSerializer(results, many=True)

            return paginator.get_paginated_response({'brazaletesPureza': serializer.data})
        else:
            return Response({'error': 'ningun brazalete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPeso
class BrazaletesListPesoView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('peso_neto',)

    def get(self, request, format=None):
        if Brazalete.mercanciaobjects.all().exists():
            queryset = Brazalete.mercanciaobjects.all()
            peso_neto_query = request.GET.get('peso_neto', None)

            if peso_neto_query:
                queryset = queryset.filter(peso_neto__contains=peso_neto_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = BrazaletesListSerializer(results, many=True)

            return paginator.get_paginated_response({'brazaletesPeso': serializer.data})
        else:
            return Response({'error': 'ningun brazalete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPrecio
class BrazaletesListPrecioView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('precio_unidad',)

    def get(self, request, format=None):
        if Brazalete.mercanciaobjects.all().exists():
            queryset = Brazalete.mercanciaobjects.all()
            precio_unidad_query = request.GET.get('precio_unidad', None)

            if precio_unidad_query:
                queryset = queryset.filter(
                    precio_unidad__lte=precio_unidad_query)

            queryset = queryset.order_by('precio_unidad')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = BrazaletesListSerializer(results, many=True)

            return paginator.get_paginated_response({'brazaletesPrecio': serializer.data})
        else:
            return Response({'error': 'ningun brazalete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# Obtener
class BrazaleteView(APIView):
    def get(self, request, id, format=None):
        if Brazalete.objects.filter(id=id).exists():

            brazalete = Brazalete.objects.get(id=id)
            serializer = BrazaleteSerializer(brazalete)

            return Response({'brazalete': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'no exite el elemento'}, status=status.HTTP_404_NOT_FOUND)


# Editar
class EditBrazaleteView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        brazalete = Brazalete.objects.get(id=id)
        if (data['name']):
            brazalete.name = data['name']
            brazalete.save()
        if (data['precio_unidad']):
            brazalete.precio_unidad = data['precio_unidad']
            brazalete.save()
        if (data['pureza']):
            brazalete.pureza = data['pureza']
            brazalete.save()
        if (data['size']):
            brazalete.size = data['size']
            brazalete.save()
        if (data['peso_neto']):
            brazalete.peso_neto = data['peso_neto']
            brazalete.save()
        if (data['genero_usuario']):
            brazalete.genero_usuario = data['genero_usuario']
            brazalete.save()
        if (data['photo']):
            brazalete.photo = data['photo']
            brazalete.save()
        if (data['photo2']):
            brazalete.photo2 = data['photo2']
            brazalete.save()
        if (data['photo3']):
            brazalete.photo3 = data['photo3']
            brazalete.save()

        return Response({'success': 'Brazalete editado'})


# EditarPrivado
class EditBrazaletePrivateView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        brazalete = Brazalete.objects.get(id=id)

        brazalete.estado = 'privado'
        brazalete.save()
        return Response({'success': 'Brazalete editado'})


# EditarPublico
class EditBrazaletePublicView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        brazalete = Brazalete.objects.get(id=id)

        brazalete.estado = 'publico'
        brazalete.save()
        return Response({'success': 'Brazalete editado'})


# Borrar
class DeleteBrazaleteView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def delete(self, request, id, format=None):
        brazalete = Brazalete.objects.get(id=id)
        brazalete.delete()

        return Response({'success': 'Brazalete eliminado'})


# Crear
class CreateBrazaleteView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        Brazalete.objects.create()
        return Response({'success': 'Brazalete creado'})


# Tobilleras:

# Busqueda
class SearchTobillerasView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        serch_term = request.query_params.get('s')
        matches = Tobillera.objects.filter(
            Q(name__icontains=serch_term) |
            Q(precio_unidad__icontains=serch_term) |
            Q(size__icontains=serch_term) |
            Q(peso_neto__icontains=serch_term)
        )
        queryset = matches.order_by('name')
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(queryset, request)
        serializer = TobillerasListSerializer(results, many=True)

        return paginator.get_paginated_response({'search_tobilleras': serializer.data})


# Listar
class TobillerasListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Tobillera.mercanciaobjects.all().exists():
            tobilleras = Tobillera.mercanciaobjects.all()

            queryset = tobilleras.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = TobillerasListSerializer(results, many=True)

            return paginator.get_paginated_response({'tobilleras': serializer.data})
        else:
            return Response({'error': 'ningun tobillera encontrado'}, status=status.HTTP_404_NOT_FOUND)


# ListarAdmin
class TobillerasListAdminView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Tobillera.objects.all().exists():
            tobilleras = Tobillera.objects.all()

            queryset = tobilleras.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = TobillerasListSerializer(results, many=True)

            return paginator.get_paginated_response({'tobilleras': serializer.data})
        else:
            return Response({'error': 'ningun tobillera encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarName
class TobillerasListNameView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('name',)

    def get(self, request, format=None):
        if Tobillera.mercanciaobjects.all().exists():
            queryset = Tobillera.mercanciaobjects.all()
            name_query = request.GET.get('name', None)

            if name_query:
                queryset = queryset.filter(name__icontains=name_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = TobillerasListSerializer(results, many=True)

            return paginator.get_paginated_response({'tobillerasName': serializer.data})
        else:
            return Response({'error': 'ningun tobillera encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarSize
class TobillerasListSizeView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('size',)

    def get(self, request, format=None):
        if Tobillera.mercanciaobjects.all().exists():
            queryset = Tobillera.mercanciaobjects.all()
            size_query = request.GET.get('size', None)

            if size_query:
                queryset = queryset.filter(size__contains=size_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = TobillerasListSerializer(results, many=True)

            return paginator.get_paginated_response({'tobillerasSize': serializer.data})
        else:
            return Response({'error': 'ningun tobillera encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPureza
class TobillerasListPurezaView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('pureza',)

    def get(self, request, format=None):
        if Tobillera.mercanciaobjects.all().exists():
            queryset = Tobillera.mercanciaobjects.all()
            pureza_query = request.GET.get('pureza', None)

            if pureza_query:
                queryset = queryset.filter(pureza__contains=pureza_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = TobillerasListSerializer(results, many=True)

            return paginator.get_paginated_response({'tobillerasPureza': serializer.data})
        else:
            return Response({'error': 'ningun tobillera encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPeso
class TobillerasListPesoView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('peso_neto',)

    def get(self, request, format=None):
        if Tobillera.mercanciaobjects.all().exists():
            queryset = Tobillera.mercanciaobjects.all()
            peso_neto_query = request.GET.get('peso_neto', None)

            if peso_neto_query:
                queryset = queryset.filter(peso_neto__contains=peso_neto_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = TobillerasListSerializer(results, many=True)

            return paginator.get_paginated_response({'tobillerasPeso': serializer.data})
        else:
            return Response({'error': 'ningun tobillera encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPrecio
class TobillerasListPrecioView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('precio_unidad',)

    def get(self, request, format=None):
        if Tobillera.mercanciaobjects.all().exists():
            queryset = Tobillera.mercanciaobjects.all()
            precio_unidad_query = request.GET.get('precio_unidad', None)

            if precio_unidad_query:
                queryset = queryset.filter(
                    precio_unidad__lte=precio_unidad_query)

            queryset = queryset.order_by('precio_unidad')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = TobillerasListSerializer(results, many=True)

            return paginator.get_paginated_response({'tobillerasPrecio': serializer.data})
        else:
            return Response({'error': 'ningun tobillera encontrado'}, status=status.HTTP_404_NOT_FOUND)


# Obtener
class TobilleraView(APIView):
    def get(self, request, id, format=None):
        if Tobillera.objects.filter(id=id).exists():

            tobillera = Tobillera.objects.get(id=id)
            serializer = TobilleraSerializer(tobillera)

            return Response({'tobillera': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'no exite el elemento'}, status=status.HTTP_404_NOT_FOUND)


# Editar
class EditTobilleraView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        tobillera = Tobillera.objects.get(id=id)
        if (data['name']):
            tobillera.name = data['name']
            tobillera.save()
        if (data['precio_unidad']):
            tobillera.precio_unidad = data['precio_unidad']
            tobillera.save()
        if (data['pureza']):
            tobillera.pureza = data['pureza']
            tobillera.save()
        if (data['size']):
            tobillera.size = data['size']
            tobillera.save()
        if (data['peso_neto']):
            tobillera.peso_neto = data['peso_neto']
            tobillera.save()
        if (data['genero_usuario']):
            tobillera.genero_usuario = data['genero_usuario']
            tobillera.save()
        if (data['photo']):
            tobillera.photo = data['photo']
            tobillera.save()
        if (data['photo2']):
            tobillera.photo2 = data['photo2']
            tobillera.save()
        if (data['photo3']):
            tobillera.photo3 = data['photo3']
            tobillera.save()

        return Response({'success': 'Tobillera editado'})


# EditarPrivado
class EditTobilleraPrivateView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        tobillera = Tobillera.objects.get(id=id)

        tobillera.estado = 'privado'
        tobillera.save()
        return Response({'success': 'Tobillera editado'})


# EditarPublico
class EditTobilleraPublicView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        tobillera = Tobillera.objects.get(id=id)

        tobillera.estado = 'publico'
        tobillera.save()
        return Response({'success': 'Tobillera editado'})


# Borrar
class DeleteTobilleraView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def delete(self, request, id, format=None):
        tobillera = Tobillera.objects.get(id=id)
        tobillera.delete()

        return Response({'success': 'Tobillera eliminado'})


# Crear
class CreateTobilleraView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        Tobillera.objects.create()
        return Response({'success': 'Tobillera creado'})


# Aretes:

# Busqueda
class SearchAretesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        serch_term = request.query_params.get('s')
        matches = Arete.objects.filter(
            Q(name__icontains=serch_term) |
            Q(precio_unidad__icontains=serch_term) |
            Q(size__icontains=serch_term) |
            Q(peso_neto__icontains=serch_term)
        )
        queryset = matches.order_by('name')
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(queryset, request)
        serializer = AretesListSerializer(results, many=True)

        return paginator.get_paginated_response({'search_aretes': serializer.data})


# Listar
class AretesListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Arete.mercanciaobjects.all().exists():
            aretes = Arete.mercanciaobjects.all()

            queryset = aretes.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AretesListSerializer(results, many=True)

            return paginator.get_paginated_response({'aretes': serializer.data})
        else:
            return Response({'error': 'ningun arete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# ListarAdmin
class AretesListAdminView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Arete.objects.all().exists():
            aretes = Arete.objects.all()

            queryset = aretes.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AretesListSerializer(results, many=True)

            return paginator.get_paginated_response({'aretes': serializer.data})
        else:
            return Response({'error': 'ningun arete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarName
class AretesListNameView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('name',)

    def get(self, request, format=None):
        if Arete.mercanciaobjects.all().exists():
            queryset = Arete.mercanciaobjects.all()
            name_query = request.GET.get('name', None)

            if name_query:
                queryset = queryset.filter(name__icontains=name_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AretesListSerializer(results, many=True)

            return paginator.get_paginated_response({'aretesName': serializer.data})
        else:
            return Response({'error': 'ningun arete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarSize
class AretesListSizeView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('size',)

    def get(self, request, format=None):
        if Arete.mercanciaobjects.all().exists():
            queryset = Arete.mercanciaobjects.all()
            size_query = request.GET.get('size', None)

            if size_query:
                queryset = queryset.filter(size__contains=size_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AretesListSerializer(results, many=True)

            return paginator.get_paginated_response({'aretesSize': serializer.data})
        else:
            return Response({'error': 'ningun arete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPureza
class AretesListPurezaView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('pureza',)

    def get(self, request, format=None):
        if Arete.mercanciaobjects.all().exists():
            queryset = Arete.mercanciaobjects.all()
            pureza_query = request.GET.get('pureza', None)

            if pureza_query:
                queryset = queryset.filter(pureza__contains=pureza_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AretesListSerializer(results, many=True)

            return paginator.get_paginated_response({'aretesPureza': serializer.data})
        else:
            return Response({'error': 'ningun arete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPeso
class AretesListPesoView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('peso_neto',)

    def get(self, request, format=None):
        if Arete.mercanciaobjects.all().exists():
            queryset = Arete.mercanciaobjects.all()
            peso_neto_query = request.GET.get('peso_neto', None)

            if peso_neto_query:
                queryset = queryset.filter(peso_neto__contains=peso_neto_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AretesListSerializer(results, many=True)

            return paginator.get_paginated_response({'aretesPeso': serializer.data})
        else:
            return Response({'error': 'ningun arete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPrecio
class AretesListPrecioView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('precio_unidad',)

    def get(self, request, format=None):
        if Arete.mercanciaobjects.all().exists():
            queryset = Arete.mercanciaobjects.all()
            precio_unidad_query = request.GET.get('precio_unidad', None)

            if precio_unidad_query:
                queryset = queryset.filter(
                    precio_unidad__lte=precio_unidad_query)

            queryset = queryset.order_by('precio_unidad')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AretesListSerializer(results, many=True)

            return paginator.get_paginated_response({'aretesPrecio': serializer.data})
        else:
            return Response({'error': 'ningun arete encontrado'}, status=status.HTTP_404_NOT_FOUND)


# Obtener
class AreteView(APIView):
    def get(self, request, id, format=None):
        if Arete.objects.filter(id=id).exists():

            arete = Arete.objects.get(id=id)
            serializer = AreteSerializer(arete)

            return Response({'arete': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'no exite el elemento'}, status=status.HTTP_404_NOT_FOUND)


# Editar
class EditAreteView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        arete = Arete.objects.get(id=id)
        if (data['name']):
            arete.name = data['name']
            arete.save()
        if (data['precio_unidad']):
            arete.precio_unidad = data['precio_unidad']
            arete.save()
        if (data['pureza']):
            arete.pureza = data['pureza']
            arete.save()
        if (data['size']):
            arete.size = data['size']
            arete.save()
        if (data['peso_neto']):
            arete.peso_neto = data['peso_neto']
            arete.save()
        if (data['genero_usuario']):
            arete.genero_usuario = data['genero_usuario']
            arete.save()
        if (data['photo']):
            arete.photo = data['photo']
            arete.save()
        if (data['photo2']):
            arete.photo2 = data['photo2']
            arete.save()
        if (data['photo3']):
            arete.photo3 = data['photo3']
            arete.save()

        return Response({'success': 'Arete editado'})


# EditarPrivado
class EditAretePrivateView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        arete = Arete.objects.get(id=id)

        arete.estado = 'privado'
        arete.save()
        return Response({'success': 'Arete editado'})


# EditarPublico
class EditAretePublicView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        arete = Arete.objects.get(id=id)

        arete.estado = 'publico'
        arete.save()
        return Response({'success': 'Arete editado'})


# Borrar
class DeleteAreteView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def delete(self, request, id, format=None):
        arete = Arete.objects.get(id=id)
        arete.delete()

        return Response({'success': 'Arete eliminado'})


# Crear
class CreateAreteView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        Arete.objects.create()
        return Response({'success': 'Arete creado'})


# Pircings

# Busqueda
class SearchPircingsView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        serch_term = request.query_params.get('s')
        matches = Pircing.objects.filter(
            Q(name__icontains=serch_term) |
            Q(precio_unidad__icontains=serch_term) |
            Q(size__icontains=serch_term) |
            Q(peso_neto__icontains=serch_term)
        )
        queryset = matches.order_by('name')
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(queryset, request)
        serializer = PircingsListSerializer(results, many=True)

        return paginator.get_paginated_response({'search_pircings': serializer.data})


# Listar
class PircingsListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Pircing.mercanciaobjects.all().exists():
            pircings = Pircing.mercanciaobjects.all()

            queryset = pircings.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = PircingsListSerializer(results, many=True)

            return paginator.get_paginated_response({'pircings': serializer.data})
        else:
            return Response({'error': 'ningun pircing encontrado'}, status=status.HTTP_404_NOT_FOUND)


# ListarAdmin
class PircingsListAdminView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Pircing.objects.all().exists():
            pircings = Pircing.objects.all()

            queryset = pircings.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = PircingsListSerializer(results, many=True)

            return paginator.get_paginated_response({'pircings': serializer.data})
        else:
            return Response({'error': 'ningun pircing encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarName
class PircingsListNameView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('name',)

    def get(self, request, format=None):
        if Pircing.mercanciaobjects.all().exists():
            queryset = Pircing.mercanciaobjects.all()
            name_query = request.GET.get('name', None)

            if name_query:
                queryset = queryset.filter(name__icontains=name_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = PircingsListSerializer(results, many=True)

            return paginator.get_paginated_response({'pircingsName': serializer.data})
        else:
            return Response({'error': 'ningun pircing encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarSize
class PircingsListSizeView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('size',)

    def get(self, request, format=None):
        if Pircing.mercanciaobjects.all().exists():
            queryset = Pircing.mercanciaobjects.all()
            size_query = request.GET.get('size', None)

            if size_query:
                queryset = queryset.filter(size__contains=size_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = PircingsListSerializer(results, many=True)

            return paginator.get_paginated_response({'pircingsSize': serializer.data})
        else:
            return Response({'error': 'ningun pircing encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPureza
class PircingsListPurezaView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('pureza',)

    def get(self, request, format=None):
        if Pircing.mercanciaobjects.all().exists():
            queryset = Pircing.mercanciaobjects.all()
            pureza_query = request.GET.get('pureza', None)

            if pureza_query:
                queryset = queryset.filter(pureza__contains=pureza_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = PircingsListSerializer(results, many=True)

            return paginator.get_paginated_response({'pircingsPureza': serializer.data})
        else:
            return Response({'error': 'ningun pircing encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPeso
class PircingsListPesoView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('peso_neto',)

    def get(self, request, format=None):
        if Pircing.mercanciaobjects.all().exists():
            queryset = Pircing.mercanciaobjects.all()
            peso_neto_query = request.GET.get('peso_neto', None)

            if peso_neto_query:
                queryset = queryset.filter(peso_neto__contains=peso_neto_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = PircingsListSerializer(results, many=True)

            return paginator.get_paginated_response({'pircingsPeso': serializer.data})
        else:
            return Response({'error': 'ningun pircing encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPrecio
class PircingsListPrecioView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('precio_unidad',)

    def get(self, request, format=None):
        if Pircing.mercanciaobjects.all().exists():
            queryset = Pircing.mercanciaobjects.all()
            precio_unidad_query = request.GET.get('precio_unidad', None)

            if precio_unidad_query:
                queryset = queryset.filter(
                    precio_unidad__lte=precio_unidad_query)

            queryset = queryset.order_by('precio_unidad')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = PircingsListSerializer(results, many=True)

            return paginator.get_paginated_response({'pircingsPrecio': serializer.data})
        else:
            return Response({'error': 'ningun pircing encontrado'}, status=status.HTTP_404_NOT_FOUND)


# Obtener
class PircingView(APIView):
    def get(self, request, id, format=None):
        if Pircing.objects.filter(id=id).exists():

            pircing = Pircing.objects.get(id=id)
            serializer = PircingSerializer(pircing)

            return Response({'pircing': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'no exite el elemento'}, status=status.HTTP_404_NOT_FOUND)


# Editar
class EditPircingView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        pircing = Pircing.objects.get(id=id)
        if (data['name']):
            pircing.name = data['name']
            pircing.save()
        if (data['precio_unidad']):
            pircing.precio_unidad = data['precio_unidad']
            pircing.save()
        if (data['pureza']):
            pircing.pureza = data['pureza']
            pircing.save()
        if (data['size']):
            pircing.size = data['size']
            pircing.save()
        if (data['peso_neto']):
            pircing.peso_neto = data['peso_neto']
            pircing.save()
        if (data['genero_usuario']):
            pircing.genero_usuario = data['genero_usuario']
            pircing.save()
        if (data['lugar_de_uso']):
            pircing.lugar_de_uso = data['lugar_de_uso']
            pircing.save()
        if (data['photo']):
            pircing.photo = data['photo']
            pircing.save()
        if (data['photo2']):
            pircing.photo2 = data['photo2']
            pircing.save()
        if (data['photo3']):
            pircing.photo3 = data['photo3']
            pircing.save()

        return Response({'success': 'Pircing editado'})


# EditarPrivado
class EditPircingPrivateView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        pircing = Pircing.objects.get(id=id)

        pircing.estado = 'privado'
        pircing.save()
        return Response({'success': 'Pircing editado'})


# EditarPublico
class EditPircingPublicView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        pircing = Pircing.objects.get(id=id)

        pircing.estado = 'publico'
        pircing.save()
        return Response({'success': 'Pircing editado'})


# Borrar
class DeletePircingView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def delete(self, request, id, format=None):
        pircing = Pircing.objects.get(id=id)
        pircing.delete()

        return Response({'success': 'Pircing eliminado'})


# Crear
class CreatePircingView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        Pircing.objects.create()
        return Response({'success': 'Pircing creado'})


# Dijes

# Busqueda
class SearchDijesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        serch_term = request.query_params.get('s')
        matches = Dije.objects.filter(
            Q(name__icontains=serch_term) |
            Q(precio_unidad__icontains=serch_term) |
            Q(size__icontains=serch_term) |
            Q(peso_neto__icontains=serch_term)
        )
        queryset = matches.order_by('name')
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(queryset, request)
        serializer = DijesListSerializer(results, many=True)

        return paginator.get_paginated_response({'search_dijes': serializer.data})


# Listar
class DijesListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Dije.mercanciaobjects.all().exists():
            dijes = Dije.mercanciaobjects.all()

            queryset = dijes.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = DijesListSerializer(results, many=True)

            return paginator.get_paginated_response({'dijes': serializer.data})
        else:
            return Response({'error': 'ningun dije encontrado'}, status=status.HTTP_404_NOT_FOUND)


# ListarAdmin
class DijesListAdminView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Dije.objects.all().exists():
            dijes = Dije.objects.all()

            queryset = dijes.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = DijesListSerializer(results, many=True)

            return paginator.get_paginated_response({'dijes': serializer.data})
        else:
            return Response({'error': 'ningun dije encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarName
class DijesListNameView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('name',)

    def get(self, request, format=None):
        if Dije.mercanciaobjects.all().exists():
            queryset = Dije.mercanciaobjects.all()
            name_query = request.GET.get('name', None)

            if name_query:
                queryset = queryset.filter(name__icontains=name_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = DijesListSerializer(results, many=True)

            return paginator.get_paginated_response({'dijesName': serializer.data})
        else:
            return Response({'error': 'ningun dije encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarSize
class DijesListSizeView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('size',)

    def get(self, request, format=None):
        if Dije.mercanciaobjects.all().exists():
            queryset = Dije.mercanciaobjects.all()
            size_query = request.GET.get('size', None)

            if size_query:
                queryset = queryset.filter(size__contains=size_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = DijesListSerializer(results, many=True)

            return paginator.get_paginated_response({'dijesSize': serializer.data})
        else:
            return Response({'error': 'ningun dije encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPureza
class DijesListPurezaView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('pureza',)

    def get(self, request, format=None):
        if Dije.mercanciaobjects.all().exists():
            queryset = Dije.mercanciaobjects.all()
            pureza_query = request.GET.get('pureza', None)

            if pureza_query:
                queryset = queryset.filter(pureza__contains=pureza_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = DijesListSerializer(results, many=True)

            return paginator.get_paginated_response({'dijesPureza': serializer.data})
        else:
            return Response({'error': 'ningun dije encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPeso
class DijesListPesoView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('peso_neto',)

    def get(self, request, format=None):
        if Dije.mercanciaobjects.all().exists():
            queryset = Dije.mercanciaobjects.all()
            peso_neto_query = request.GET.get('peso_neto', None)

            if peso_neto_query:
                queryset = queryset.filter(peso_neto__contains=peso_neto_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = DijesListSerializer(results, many=True)

            return paginator.get_paginated_response({'dijesPeso': serializer.data})
        else:
            return Response({'error': 'ningun dije encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPrecio
class DijesListPrecioView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('precio_unidad',)

    def get(self, request, format=None):
        if Dije.mercanciaobjects.all().exists():
            queryset = Dije.mercanciaobjects.all()
            precio_unidad_query = request.GET.get('precio_unidad', None)

            if precio_unidad_query:
                queryset = queryset.filter(
                    precio_unidad__lte=precio_unidad_query)

            queryset = queryset.order_by('precio_unidad')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = DijesListSerializer(results, many=True)

            return paginator.get_paginated_response({'dijesPrecio': serializer.data})
        else:
            return Response({'error': 'ningun dije encontrado'}, status=status.HTTP_404_NOT_FOUND)


# Obtener
class DijeView(APIView):
    def get(self, request, id, format=None):
        if Dije.objects.filter(id=id).exists():

            dije = Dije.objects.get(id=id)
            serializer = DijeSerializer(dije)

            return Response({'dije': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'no exite el elemento'}, status=status.HTTP_404_NOT_FOUND)


# Editar
class EditDijeView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        dije = Dije.objects.get(id=id)
        if (data['name']):
            dije.name = data['name']
            dije.save()
        if (data['precio_unidad']):
            dije.precio_unidad = data['precio_unidad']
            dije.save()
        if (data['pureza']):
            dije.pureza = data['pureza']
            dije.save()
        if (data['size']):
            dije.size = data['size']
            dije.save()
        if (data['peso_neto']):
            dije.peso_neto = data['peso_neto']
            dije.save()
        if (data['genero_usuario']):
            dije.genero_usuario = data['genero_usuario']
            dije.save()
        if (data['tipo_dije']):
            dije.tipo_dije = data['tipo_dije']
            dije.save()
        if (data['photo']):
            dije.photo = data['photo']
            dije.save()
        if (data['photo2']):
            dije.photo2 = data['photo2']
            dije.save()
        if (data['photo3']):
            dije.photo3 = data['photo3']
            dije.save()

        return Response({'success': 'Dije editado'})


# EditarPrivado
class EditDijePrivateView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        dije = Dije.objects.get(id=id)

        dije.estado = 'privado'
        dije.save()
        return Response({'success': 'Dije editado'})


# EditarPublico
class EditDijePublicView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        dije = Dije.objects.get(id=id)

        dije.estado = 'publico'
        dije.save()
        return Response({'success': 'Dije editado'})


# Borrar
class DeleteDijeView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def delete(self, request, id, format=None):
        dije = Dije.objects.get(id=id)
        dije.delete()

        return Response({'success': 'Dije eliminado'})


# Crear
class CreateDijeView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        Dije.objects.create()
        return Response({'success': 'Dije creado'})


# Anillos:

# Busqueda
class SearchAnillosView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        serch_term = request.query_params.get('s')
        matches = Anillo.objects.filter(
            Q(name__icontains=serch_term) |
            Q(precio_unidad__icontains=serch_term) |
            Q(size__icontains=serch_term) |
            Q(peso_neto__icontains=serch_term)
        )
        queryset = matches.order_by('name')
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(queryset, request)
        serializer = AnillosListSerializer(results, many=True)

        return paginator.get_paginated_response({'search_anillos': serializer.data})


# Listar
class AnillosListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Anillo.mercanciaobjects.all().exists():
            anillos = Anillo.mercanciaobjects.all()

            queryset = anillos.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AnillosListSerializer(results, many=True)

            return paginator.get_paginated_response({'anillos': serializer.data})
        else:
            return Response({'error': 'ningun anillo encontrado'}, status=status.HTTP_404_NOT_FOUND)


# ListarAdmin
class AnillosListAdminView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Anillo.objects.all().exists():
            anillos = Anillo.objects.all()

            queryset = anillos.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AnillosListSerializer(results, many=True)

            return paginator.get_paginated_response({'anillos': serializer.data})
        else:
            return Response({'error': 'ningun anillo encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarName
class AnillosListNameView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('name',)

    def get(self, request, format=None):
        if Anillo.mercanciaobjects.all().exists():
            queryset = Anillo.mercanciaobjects.all()
            name_query = request.GET.get('name', None)

            if name_query:
                queryset = queryset.filter(name__icontains=name_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AnillosListSerializer(results, many=True)

            return paginator.get_paginated_response({'anillosName': serializer.data})
        else:
            return Response({'error': 'ningun anillo encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarSize
class AnillosListSizeView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('size',)

    def get(self, request, format=None):
        if Anillo.mercanciaobjects.all().exists():
            queryset = Anillo.mercanciaobjects.all()
            size_query = request.GET.get('size', None)

            if size_query:
                queryset = queryset.filter(size__contains=size_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AnillosListSerializer(results, many=True)

            return paginator.get_paginated_response({'anillosSize': serializer.data})
        else:
            return Response({'error': 'ningun anillo encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPureza
class AnillosListPurezaView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('pureza',)

    def get(self, request, format=None):
        if Anillo.mercanciaobjects.all().exists():
            queryset = Anillo.mercanciaobjects.all()
            pureza_query = request.GET.get('pureza', None)

            if pureza_query:
                queryset = queryset.filter(pureza__contains=pureza_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AnillosListSerializer(results, many=True)

            return paginator.get_paginated_response({'anillosPureza': serializer.data})
        else:
            return Response({'error': 'ningun anillo encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPeso
class AnillosListPesoView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('peso_neto',)

    def get(self, request, format=None):
        if Anillo.mercanciaobjects.all().exists():
            queryset = Anillo.mercanciaobjects.all()
            peso_neto_query = request.GET.get('peso_neto', None)

            if peso_neto_query:
                queryset = queryset.filter(peso_neto__contains=peso_neto_query)

            queryset = queryset.order_by('name')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AnillosListSerializer(results, many=True)

            return paginator.get_paginated_response({'anillosPeso': serializer.data})
        else:
            return Response({'error': 'ningun anillo encontrado'}, status=status.HTTP_404_NOT_FOUND)


# FiltrarPrecio
class AnillosListPrecioView(APIView):
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('precio_unidad',)

    def get(self, request, format=None):
        if Anillo.mercanciaobjects.all().exists():
            queryset = Anillo.mercanciaobjects.all()
            precio_unidad_query = request.GET.get('precio_unidad', None)

            if precio_unidad_query:
                queryset = queryset.filter(
                    precio_unidad__lte=precio_unidad_query)

            queryset = queryset.order_by('precio_unidad')
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(queryset, request)
            serializer = AnillosListSerializer(results, many=True)

            return paginator.get_paginated_response({'anillosPrecio': serializer.data})
        else:
            return Response({'error': 'ningun anillo encontrado'}, status=status.HTTP_404_NOT_FOUND)


# Obtener
class AnilloView(APIView):
    def get(self, request, id, format=None):
        if Anillo.objects.filter(id=id).exists():

            anillo = Anillo.objects.get(id=id)
            serializer = AnilloSerializer(anillo)

            return Response({'anillo': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'no exite el elemento'}, status=status.HTTP_404_NOT_FOUND)


# Editar
class EditAnilloView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        anillo = Anillo.objects.get(id=id)
        if (data['name']):
            anillo.name = data['name']
            anillo.save()
        if (data['precio_unidad']):
            anillo.precio_unidad = data['precio_unidad']
            anillo.save()
        if (data['pureza']):
            anillo.pureza = data['pureza']
            anillo.save()
        if (data['size']):
            anillo.size = data['size']
            anillo.save()
        if (data['peso_neto']):
            anillo.peso_neto = data['peso_neto']
            anillo.save()
        if (data['genero_usuario']):
            anillo.genero_usuario = data['genero_usuario']
            anillo.save()
        if (data['lugar_de_uso']):
            anillo.lugar_de_uso = data['lugar_de_uso']
            anillo.save()
        if (data['cantidad']):
            anillo.cantidad = data['cantidad']
            anillo.save()
        if (data['tipo_anillo']):
            anillo.tipo_anillo = data['tipo_anillo']
            anillo.save()
        if (data['photo']):
            anillo.photo = data['photo']
            anillo.save()
        if (data['photo2']):
            anillo.photo2 = data['photo2']
            anillo.save()
        if (data['photo3']):
            anillo.photo3 = data['photo3']
            anillo.save()

        return Response({'success': 'Anillo editado'})


# EditarPrivado
class EditAnilloPrivateView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        anillo = Anillo.objects.get(id=id)

        anillo.estado = 'privado'
        anillo.save()
        return Response({'success': 'Anillo editado'})


# EditarPublico
class EditAnilloPublicView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def put(self, request, format=None):
        data = self.request.data
        id = data['id']
        anillo = Anillo.objects.get(id=id)

        anillo.estado = 'publico'
        anillo.save()
        return Response({'success': 'Anillo editado'})


# Borrar
class DeleteAnilloView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def delete(self, request, id, format=None):
        anillo = Anillo.objects.get(id=id)
        anillo.delete()

        return Response({'success': 'Anillo eliminado'})


# Crear
class CreateAnilloView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        Anillo.objects.create()
        return Response({'success': 'Anillo creado'})
