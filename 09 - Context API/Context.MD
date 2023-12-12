# Context API

- Um recurso do React que facilita o compartilhamento de dados entre os componentes.

## Criando Contexto

### Nomenclatura

- O arquivo tem a primeira letra maiúscula, como nos componentes, e termina com Context.

- ExampleContext.jsx.

### Estrutura de pasta

- A convenção é deixar na pasta context em src.

### Utilização

- Importar o contexto no componente a ser usado.

## Criando o provider

- O provider vai delimitar o escopo do contexto, ou seja, em que componente teremos acesso aos dados.

- O provider deve encapsular os componentes que precisam do context.

- Tem a prop <em>"children"</em>, para inserirmos elementos dentro.

## Alterando o contexto

- Para exibir e alterar o valor do contexto, é utilizado o hook useContext.

## Contexto com Hook

- Pode ser criado um hook e trabalhar o contexto nele.

- Concentra-se o useContext em um só local, que será no hook e, há um intervalo para uma possível validação na alteração do contexto.

## Context e useReducer

- Contextos mais complexos podem necessitar de variações no comportamento, por isso, é mais indicado utilizar o hook useReducer.

- Ele funciona como um useState, mas com mais possibilidades.
