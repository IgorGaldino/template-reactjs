import "./styles/App.css";

import React from "react";

import Card from "./components/layout/Card";

import Primeiro from "./components/basic/Primeiro";
import ComParametro from "./components/basic/ComParametro";
import Fragmento from "./components/basic/Fragmento";
import Aleatorio from "./components/basic/Aleatorio";
import Familia from "./components/basic/Familia";
import FamiliaMembro from "./components/basic/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";

const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
          <TabelaProdutos />
        </Card>

        <Card titulo="#06 - Repetição" color="#FD4C65">
          <ListaAlunos />
        </Card>

        <Card titulo="#05 - Componentes com filhos" color="#00C8F8">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>

        <Card titulo="#04 - Exemplo de Card" color="#FA6900">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Igor Galdino"
            nota={9.5}
          />
        </Card>

        <Card titulo="#1 - Primeiro Componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};

export default App;
