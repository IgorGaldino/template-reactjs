import React from "react";

const FamiliaMembro = (props) => {
  const { nome, sobrenome } = props;
  return (
    <div>
      {nome} <strong>{sobrenome}</strong>
    </div>
  );
};

export default FamiliaMembro;
