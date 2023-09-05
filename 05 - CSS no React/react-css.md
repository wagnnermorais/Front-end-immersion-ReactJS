# CSS no React

## CSS Global

- O CSS global é utilizado para aplicar estilos a todos elementos do projeto.

- Utilizamos o arquivo index.css para isso, ele está na pasta src.

## CSS de componente

- O CSS de componente é utilizado apenas em um componente específico.

- Geralmente o arquivo é criado com o mesmo nome do componente.

- Diferente do Vue, ele não possui o CSS scoped, ou seja, pode vazar para outros elementos do projeto.

## CSS Inline

- O inline style do React é igual ao do CSS.

- Por meio do atributo style, aplicamos regras de CSS diretamente a um elemento.

- As outras abordagens são mais interessantes que essa, por questões de manutenção do código.

### CSS Inline Dinâmico

- O CSS inline dinâmico consiste em uma técnica de aplicação de estilo por condição.

- Teremos o atributo inserido em um if ternário.

- Dependendo da condição e do resultado dela, um estilo diferente pode ser exibido.

## Classes dinâmicas

- Podemos também aplicar uma lógica para adicionar classes a um elemento uilizando o if ternário.

- Essa abordagem é mais interessante que o CSS inline, pois o conteúdo da classe está no arquivo de CSS.

## CSS Modules

- CSS Modules permite deixa o CSS scoped.

- Ou seja, ele só funciona para o componente em questão.

- O nome do arquivo fica: Component.module.css e é necessário fazer sua importação também.
