# React Fundamentals

## Criando componentes

- Os componentes ficam dentro de uma pasta chamada components, que é criada em src.

- Componentes são nomeados em camelCase: FirstComponent.jsx.

- A utilização do .jsx facilita a formatação para os editores.

- Dentro do componente, é necessário criar e exportar uma função, que é a lógica dele.

## Importando Componentes

- Para utilizar e reutilizar um componente, é necessário o processo de importação.

- A sintaxe é: import X from "./components/X.jsx"

- Para inserir o componente dentro de outro, é utilizado a sintaxe de tag do HTML com o nome do componente: <FirstComponent />

## JSX

- JSX é o HTML do React, o código interno das funções de componentes, após o return.

- Vamos escrever as nossas tags e importar os outros componentes.

- Há algumas diferenças do HTML, ex: class = className.

- Pode ser escrito JavaScript dentro do JSX.

- O JSX pode ter apenas um elemento pai.

## Comentários no componente

- Há duas formas de inserir comentários em React.

- Pode ser utilizada a sintaxe de JS fora e dentro das funções, com: //.

- Ou no JSX, com: {/_ Algum comentário _/}.

- As chaves são necessárias para executar qualquer instrução de JS.

## Template Expressions

- Template expression é o recurso que permite a execução de JS no JSX.

- Podemos também inserir variáveis.

- A sintaxe é: { 2 + 2 }

- Tudo que vai entre chaves é entendido e executado como JavaScript.

## Hierarquia de componentes

- Os componentes podem ser reutilizados em outros componentes.

- Podemos montar também uma hierarquia, onde um componente é pai do outro.

- Ao importar o componente pai, todos os outros vem juntos.

## Eventos

### Eventos de click

- Os eventos são essencias para programar apps de front-end, vimos isso em DOM.

- Em React, temos os mesmos eventos, só que de forma simplificada, por exemplo, com onClick, conseguimos disparar um evento que ativa uma função ao clicar em um elemento.

### Funções nos eventos

- Quando temos lógicas complexas, é mais indicado criar uma função para o evento.

- Isso vai separar as responsabilidades e deixar o código mais fácil de dar manutenção

### Funções de renderização

- Podemos criar funções nos componentes que retornam JSX, isso pode ser utilizado para uma renderização condicional, por exemplo.

- Fazendo que o JSX varie, dependendo do resultado da operação.
