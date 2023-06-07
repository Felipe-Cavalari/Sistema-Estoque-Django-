from rest_framework import viewsets
from produto.models import Produto, Marca
from produto.serializer import ProdutoSerializer, MarcaSerializer

class MarcaViewSet(viewsets.ModelViewSet):
    queryset = Marca.objects.all()
    serializer_class = MarcaSerializer
    methods = ['GET', 'POST', 'PUT']

class ProdutoViewSet(viewsets.ModelViewSet):
    """Exibindo os produtos"""
    
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    methods = ['GET', 'POST', 'PUT', 'DELETE']

