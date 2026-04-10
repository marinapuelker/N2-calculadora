import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0);

  function somar() {
    setResultado(Number(numero1) + Number(numero2));
  }

  function subtrair() {
    setResultado((numero1) - (numero2));
  }

  function multiplicar() {
    setResultado((numero1) * (numero2));
  }

function dividir() {
  if (Number(numero2) === 0) {
    setResultado(0);
  } else {
    setResultado(Number(numero1) / Number(numero2));
  }
}

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>CALCULADORA</Text>

      <TextInput
        placeholder="Numero 1"
        style={estilos.caixa}
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />

      <TextInput
        placeholder="Numero 2"
        style={estilos.caixa}
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />

      <View style={estilos.areacaixa2}>
        <TouchableOpacity style={[estilos.caixa2, estilos.somar]} onPress={somar}>
          <Text style={estilos.caixa2texto}>SOMAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.caixa2, estilos.subtrair]} onPress={subtrair}>
          <Text style={estilos.caixa2texto}>SUBTRAIR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.caixa2, estilos.multiplicar]} onPress={multiplicar}>
          <Text style={estilos.caixa2texto}>MULTIPLICAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.caixa2, estilos.dividir]} onPress={dividir}>
          <Text style={estilos.caixa2texto}>DIVIDIR</Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.caixa3}>
        <Text style={estilos.textocaixa3}>{resultado}</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  titulo: {
    backgroundColor: "lightblue",
    padding: 12,
    width: 250,
    borderRadius: 10,
    fontWeight: "arial",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },

  caixa: {
    width: 250,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    backgroundColor: "white",
  },

   caixa2: {
    alignItems: "center",
    flex: 1,
    marginHorizontal: 2,
    padding: 10,
    borderRadius: 5,
  },

   caixa2texto: {
    color: "white",
    fontSize: 10,
  },

  areacaixa2: {
    width: 250,
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  somar: {
    backgroundColor: "green",
  },

  subtrair: {
    backgroundColor: "pink",
  },

  multiplicar: {
    backgroundColor: "red",
  },

  dividir: {
    backgroundColor: "blue",
  },

  caixa3: {
    backgroundColor: "black",
    width: 250,
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },

  textocaixa3: {
    color: "white",
    fontSize: 20,
    fontWeight: "arial",
  },
});
