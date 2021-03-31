import React from "react";

const ComParametro = (props) => {
  const { titulo, aluno, nota } = props;
  const status = nota >= 7 ? "Aprovado" : "Recuperação";
  return (
    <div>
      <h2>{titulo}</h2>
      <p>
        <strong>{aluno} </strong>
        tem nota
        <strong> {nota} </strong>e está
        <strong> {status}</strong>!
      </p>
    </div>
  );
};

export default ComParametro;
