# Template ReactJS

Este repositório é um template para uma aplicação em React JS. Existem alguns componentes de layout já criados.

## Conceitos utilizados

* React;
* JSX;
* React Components;
* Yarn
* Eslint
* Prettier

## Execução dos scripts

Abaixo são listados os principais scripts para execução e desenvolvimento do projeto.

### `yarn`
Instalação das dependências listadas no arquivo package.json.

### `yarn dev`

Execução da aplicação local.
Inicia um servidor local no endereço [http://localhost:3000](http://localhost:3000) no browser.

Após edição de algum arquivo a página será atualizada (Hot reload).

### `yarn lint`
Pode ser utilizado na implementação ou edição de componentes. Verifica inconsistência de código através do Eslint.
Eslint trabalha junto com prettier para manter a padronização do código.

### `yarn build`
Utilizado para gerar a build da aplicação.

### Estrutura de pastas
* /node_modules -> Dependências do projeto;
* /public -> Arquivos globais do projeto;
* /src -> Arquivos de desenvolvimento;
* /src/assets/css -> Arquivos de estilos;
* /src/assets/img -> Arquivos de imagens;
* /src/components -> Componentes do projeto (Sub componentes que são utilizados em uma página);
* /src/layouts -> Componentes responsáveis pelo layout do sistema;
* /src/views -> Componentes de view, ou seja, onde é contido o conteúdo do sistema (CRUD, por ex.);

### Criação de rotas
* /src/routes.js -> Arquivo responsável para criação da rota;

### Dicas de extensões para vc code;
* Eslint (dbaeumer.vscode-eslint) -> Padronização de código JS;
* Prettier (esbenp.prettier-vscode) -> Code formatter;
* Visual Studio IntelliCode (visualstudioexptteam.vscodeintellicode) -> Autocomplete;
* HTML Snippets (abusaidm.html-snippets) -> Autocomplete HTML;
* indent-rainbow (oderwat.indent-rainbow) -> Marcação de identação;
* IntelliSense for CSS class names in HTML (zignd.html-css-class-completion) -> Autocomplete class CSS;
* Bracket Pair Colorizer (coenraads.bracket-pair-colorizer) -> Marcação de parenteses;
* colorize (kamikillerto.vscode-colorize) -> Visualizar cores digitais;
* Trailing Spaces (shardulm94.trailing-spaces) -> Verifica espaços vazios;
* React code snippets (xabikos.reactsnippets) -> Atalhos/autocomplete ReactJS;
* Material Icon Theme (pkief.material-icon-theme) -> Icones de pastas e arquivos;
* Dracula Official (dracula-theme.theme-dracula) -> Tema escuro para editor;
