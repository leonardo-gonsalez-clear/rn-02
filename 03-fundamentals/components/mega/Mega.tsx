import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

interface Props {
  qtdNumeros: string
}

export default class Mega extends Component<Props, Props> {

  constructor(props: Props) {
    super(props)

    this.state = {
      qtdNumeros: props.qtdNumeros,
    }

  }


  changeNumber = (qtd: string) => {
    this.setState({ qtdNumeros: qtd })
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
      </View>
    );
  }
}
