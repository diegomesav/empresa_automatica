from django.shortcuts import render

# Create your views here.
# gestion/views.py
from rest_framework import viewsets
from .models import Empleado, Proveedor, Insumo, Cliente, HistoricoCliente, Categoria, Producto, Venta
from .serializers import EmpleadoSerializer, ProveedorSerializer, InsumoSerializer, ClienteSerializer, HistoricoClienteSerializer, CategoriaSerializer, ProductoSerializer, VentaSerializer

class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer

class InsumoViewSet(viewsets.ModelViewSet):
    queryset = Insumo.objects.all()
    serializer_class = InsumoSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class HistoricoClienteViewSet(viewsets.ModelViewSet):
    queryset = HistoricoCliente.objects.all()
    serializer_class = HistoricoClienteSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer
