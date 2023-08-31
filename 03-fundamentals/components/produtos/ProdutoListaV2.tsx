import { View, Text, FlatList } from 'react-native'
import React from 'react'
import produtos from './produtos'

const ProdutoListaV2 = () => {
  return (
    <View>
      <Text>Lista de produtos V2</Text>

      <FlatList
        data={produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={({ item: produto }) => (
          <Text key={produto.id}>
            {produto.nome} - R$ {produto.preco}
          </Text>
        )}
      />
    </View>
  )
}

export default ProdutoListaV2
