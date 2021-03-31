import "../../styles/repeticao/TabelaProdutos.css";
import React from "react";
import produtos from "../../data/produtos";

const TabelaProdutos = () => {
  const trs = produtos.map((produto, index) => {
    return (
      <tr key={produto.id} className={index % 2 === 0 ? "Par" : "Impar"}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });
  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{trs}</tbody>
      </table>
    </div>
  );
};

export default TabelaProdutos;
