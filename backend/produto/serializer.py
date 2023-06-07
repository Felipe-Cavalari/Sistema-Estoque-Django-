from rest_framework import serializers
from produto.models import Produto, Marca


class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        db_table = 'produtos'
        model = Produto
        fields = '__all__'


class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        db_table='marca'
        model= Marca
        fields='__all__'
