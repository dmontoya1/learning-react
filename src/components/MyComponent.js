import React, { Component } from "react";

export default class MyComponent extends Component {
  render() {
    let receta = {
      nombre: "Pizza Hawaiana",
      ingredientes: ["tomate", "queso", "piña", "jamón"],
      calorias: 400
    };

    return (
      <div>
        <h1>{receta.nombre}</h1>
        <h3>{"Calorías: " + receta.calorias}</h3>
        <ul>
          {receta.ingredientes.map((i, j) => {
            return <li key={j}>{i}</li>;
          })}
        </ul>
      </div>
    );
  }
}
