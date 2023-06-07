from django.db import models



class Marca(models.Model):
    id_marca = models.AutoField(primary_key=True)
    nome_marca = models.CharField(max_length=100)

    class Meta:
        db_table= 'marca'

class Produto(models.Model):
    id_produto = models.AutoField(primary_key=True)
    nome_prod = models.CharField(max_length=50, null=False)
    marca = models.ForeignKey(Marca, on_delete=models.CASCADE)
    descr_prod = models.CharField(max_length=255, null=True)
    quantidade = models.IntegerField(null=False)
    data_entrada = models.DateField(null=False)
    data_validade = models.DateField(null=False)
    lote = models.IntegerField()

    class Meta:
        db_table = 'produtos'



    
 