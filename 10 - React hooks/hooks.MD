# React Hooks

## useState

- Sua função é gerenciar valores, podendo ser consultado e alterado, permitindo re-renderizar um componente, o que não ocorre na manipulação de variáveis.

### useState nos inputs

- Pode ser conciliado o useState aos valores dos inputs, tendo o evento "onChange" como nome. Com isso, pode ser salvado valores de um formulário e, posteriormente, fazer o envio.

- Há também a estratégia de Controlled Inputs.

## useReducer

- O useReducer tem função semelhante ao useState, porém, na manipulação de conteúdo é possível executar uma função.

- Tendo um valor para gerenciar e uma função para alteração do valor.

- O reducer, geralmente contém operações mais complexas em relação ao useState, utilizando um switch/case.

## useEffect

- O useEffect é utilizado em diversas situações, tais como alterações nos elementos ou requisições HTTP.

- A grande vantagem é que estas ações podem ser controladas.

- O array de dependências possui os itens a serem monitorados.

### useEffect com array vazio

- Às vezes é necessário executar uma ação uma única vez, podendo ser feito com o array de dependências vazio. Na primeira renderização do componente, o código é executado.

### useEffect com array com valores

- Pode ser condicionada a execução do useEffect colocando valores no array de dependências.

- Sempre que este dado for modificado, o useEffect executa mais uma vez, permitindo a reutilização e de forma controlada.

### Limpeza do useEffect

- Algumas ações precisam ser limpas com uma técnica chamada <em>cleanup</em>

- Por exemplo, uma ação é executada de tempos em tempos, pode ser executada após uma mudança de página, para resolver isso, basta finalizar a ação no useEffect com um return.

## useContext

- O useContext é o hook utilizado para consumir um context, da <strong>Context API</strong>.

- É preciso criar o contexto e o prevedor, envolver os componentes que vão receber os dados e fazer o uso do hook onde necessário.

## useRef

- O useRef pode ser utilizado como o useState gerenciando valores, a diferença é que ele é um objeto, e seu valor está na propriedade current.

- Este hook não re-renderiza o componente ao ser utilizado, o que pode ser interessante em alguns casos.

### useRef e o DOM

- O useRef pode ser utilizado para selecionar elementos no JSX, com isso, pode ser feito manipulações no DOM, ou aplicar eventos como o focus.

## useCallback

- O useCallback pode ser utilizado em duas situações, uma vez que ele memoriza uma função, fazendo com que ela não seja reconstruída a cada renderização.

- O primeiro caso é quando é prezado pela performance, então uma função muito complexa pode ser criada uma vez só.

- O segundo caso é quando o React alerta que uma função deveria estar no useCallback.

## useMemo

- O useMemo pode ser utilizado para garantir a referência de um objeto.

- Fazendo com que algo possa ser atrelado a uma referência e não um valor.

- Com isso, é possível condicionar useEffects a uma variável de maneira mais inteligente.
