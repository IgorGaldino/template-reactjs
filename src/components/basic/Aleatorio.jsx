import React from "react";

const Aleatorio = (props) => {
  const { max, min } = props;
  const aleatorio = Math.floor(Math.random() * (max - min) + min);
  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>Valor Mínimo: </strong> {min}
      </p>
      <p>
        <strong>Valor Máximo: </strong> {max}
      </p>
      <p>
        <strong>Valor Escolhido: </strong> {aleatorio}
      </p>
    </div>
  );
};

export default Aleatorio;
