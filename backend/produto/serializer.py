from rest_framework import serializers
from produto.models import Produto


class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        db_table = 'produtos'
        model = Produto
        fields = '__all__'