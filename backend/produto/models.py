from django.db import models



class Produto(models.Model):
    id_produto = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=50, null=False)
    descr_prod = models.CharField(max_length=255, null=True)
    quantidade = models.IntegerField(null=False)
    data_entrada = models.DateField(null=False)
    data_validade = models.DateField(null=False)
    lote = models.IntegerField()

    class Meta:
        db_table = 'produtos'

   