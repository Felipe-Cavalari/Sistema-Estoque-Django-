import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "toasty"

const ProdHeader = styled.div`
    width: 100%;
    margin-bottom: 30px;
    background-color: white;
    padding: 10px 0px;
    box-shadow: 0px 0px 5px black;
    border-radius: 5px;
    max-width: 1200px;
    word-break: break-all;
    display: flex;
    justify-content: space-around;
`

const Table = styled.table`
    width: 100%;
    margin: 0px;
    background-color: white;
    padding: 0px;
    box-shadow: 0px 0px 5px black;
    border-radius: 5px;
    max-width: 1200px;
    word-break: break-all;
`;

const Thead = styled.thead`
    
`

const Tbody = styled.tbody`

`

const Tr = styled.tr``

const Td = styled.td`
    padding: 10px 0px;
    text-align: center;
    width: auto;
    border-bottom: inset;

`
const Th = styled.th`
    
    text-align: center;
    border-bottom: 1px solid black;
    padding: 10px 0px;

`
const Ul = styled.ul`
    list-style: none;
`


function Grid_Produtos({ produtos }){

    const deletaProd = async (id) => {
        await axios.delete('http://127.0.0.1:8000/produtos/' + id)
        .then(({data}) => {
            toast.success(data)
        })
    }

    return(
        <>
        <ProdHeader>
            <a href="">Adicionar</a>
            <div className="">
                <label htmlFor="">pesquisar: </label>
                <input type="text" />
            </div>
        </ProdHeader>

        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Descrição do Produto</Th>
                    <Th>Quantidade</Th>
                    <Th>Data de entrada</Th>
                    <Th>Data de validade</Th>
                    <Th>Lote</Th>
                    <Th></Th>
                    
                </Tr>
            </Thead>
            <Tbody>
                {produtos.map((produto, i) => (
                    <Tr key={i}>
                        <Td width='30%'>{produto.nome}</Td>
                        <Td width='30%'>{produto.descr_prod}</Td>
                        <Td width='30%'>{produto.quantidade}</Td>
                        <Td width='30%'>{produto.data_entrada}</Td>
                        <Td width='30%'>{produto.data_validade}</Td>
                        <Td width='30%'>{produto.lote}</Td>
                        <Td width='30%'>
                            <Ul>
                                <li>editar</li>
                                <li><a onClick={() => deletaProd(produto.id_produto)}>excluir</a></li>
                            </Ul>
                        
                        </Td>
                        
                    </Tr>
                ))}
            </Tbody>
        </Table>

        </>
    )

}

export default Grid_Produtos