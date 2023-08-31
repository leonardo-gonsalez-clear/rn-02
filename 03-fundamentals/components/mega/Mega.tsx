import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";

interface Props {
  qtdNumeros: string
  numeros: number[]
}

export default class Mega extends Component<Props, Props> {

  constructor(props: Props) {
    super(props)

    this.state = {
      qtdNumeros: props.qtdNumeros,
      numeros: []
    }

  }


  changeNumber = (qtd: string) => {
    this.setState({ qtdNumeros: qtd })
  }

  randomNumber = (prev: number[]): number => {
    const random = Math.trunc(Math.random() * 60) + 1
    return prev.includes(random) ? this.randomNumber(prev) : random
  }

  generateNumbers = () => {
    let numerosArr = new Array(Number(this.state.qtdNumeros))
      .fill(true)
      .reduce((prev) => [...prev, this.randomNumber(prev)], [])
      .sort((a: number, b: number) => a - b)

    console.log(numerosArr)

    this.setState({ numeros: numerosArr })
  }

  render() {
    return (
      <View>
        <Text>Gerador de Mega-Sena: {this.state.qtdNumeros}</Text>

        <TextInput
          keyboardType="numeric"
          placeholder="Qntd de Números"
          value={this.state.qtdNumeros}
          onChangeText={qtd => this.changeNumber(qtd)}
        />

        <Button title="gerar" onPress={this.generateNumbers} />

        <Text>

          {this.state.numeros.join(", ")}

        </Text>
      </View>
    );
  }
}
