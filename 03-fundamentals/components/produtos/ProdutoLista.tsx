import { View, Text } from 'react-native'
import React from 'react'
import produtos from './produtos'

const ProdutoLista = () => {
  return (
    <View>
      <Text>Lista de produtos</Text>

      <View>
        {produtos.map(produto => (
          <Text key={produto.id}>{produto.nome} - R$ {produto.preco}</Text>
        ))}
      </View>
    </View>
  )
}

export default ProdutoLista 
