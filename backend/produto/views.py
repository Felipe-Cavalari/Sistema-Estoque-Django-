from rest_framework import viewsets
from produto.models import Produto
from produto.serializer import ProdutoSerializer


class ProdutoViewSet(viewsets.ModelViewSet):
    """Exibindo os produtos"""
    
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    

