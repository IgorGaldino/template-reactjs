import React from "react";
import alunos from "../../data/alunos";

const ListaAlunos = () => {
  const lis = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} -&gt; {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{lis}</ul>
    </div>
  );
};

export default ListaAlunos;
