const pilotos = ["Vetel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop()

console.log(pilotos)

pilotos.push("Verstappen")
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift("Hamilton")
console.log(pilotos)

pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)
