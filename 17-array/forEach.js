const aprovados = ["Bia", "Carlos", "Ana"]

aprovados.forEach(function(nome, indice) {
  console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)

const forEach = (array, callback) => {
  const width = array.length

  for (let i = 0; i < width; i++) {
    callback(array[i], i, array)
  }
}

forEach(aprovados, (nome, indice) => console.log(`${indice + 1}) ${nome}`))
