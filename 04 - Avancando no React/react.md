# Avançando no React

## Imagens no React

### Imagens na pasta public

- As imagens do projeto podem ficar na pasta public, estando lá, elas podem ser utilizadas diretamente no projeto.

- A pasta public fica linkada com a src, exemplo: "/imagem.png"

### Imagens na pasta assets

- Outro local coumum de colocar as imagens em um projeto React é na pasta assets.

- Em assets, precisamos importar a imagem como se fosse um componente.

## O que são Hooks?

- Recursos do React que tem diversas funções, podemos criar os nossos também.

- Exemplo: guardar e alterar o estado de algum dado.

- Os hooks precisam ser importados, e sempre começam com a palavra "use".

- Alguns bem utilizados são: useState, useEffect.

- Os hooks que nós criamos, são chamados de custom hooks.

- Geralmente, toda a aplicação usa pelo menos um hook.

### Hook: useState

- O useState é um dos mais utilizados, podemos gerenciar o estado de um ou mais dados, é como se fosse um getter/setter.

- Utilizamos este hook pois as variáveis não funcionam como esperado, elas não re-renderizam o componente.

- Para guardar um dado, vamos utilizar setNomeDoDado.

### Hook: Previous State

- Previous State é um recurso do hook useState, podendo pegar o valor original dos dados e fazer alguma alteração.

- Muito utilizado em listas, pois pegamos o valor antigo e o modificamos.

- O primeiro argumento do set sempre é o previous state.

## Renderização de lista

- Dados do tipo array são muito comuns em aplicações.

- Geralmente recebemos um array de objetos, e precisamos iterar nele e exibir os elementos. Com o método map, a iteração é feita.

- É possível inserir JSX na execução.

### A propriedade key

- Iterar uma lista sem a propriedade key, gera um erro no console. O React precisa de uma chave única para cada elemento.

- Isso serve para ajudar a renderização do componente. O React utiliza isso para manipulação dos itens.

### Renderização condicional

- Renderização condicional é quando parte do template é exibido por meio de uma condição, que é simplesmente um if no JSX.

- A renderização condicional pode conter também um else, tendo sua estrutura igual a de um if ternário: condição ? execução1 : execução2

- Exemplo: Quando um usuário está autenticado/não autenticado.

## Props

- Props é um recurso fundamental do React, permitindo a passagem de dados de um componente pai para um componente filho.

- Será útil para quando houver dados vindo de um banco de dados.

- As props vem em um objeto no argumento da função do componente.

### Desestruturando props

- Os componentes geralmente tem mais de uma props. Para facilitar o uso delas, podemos desestruturar no parâmetro da função do componente.

- Assim, o objeto props vira o nome de cada propriedade, então não precisamos acessá-lo.

- Desta maneira: MyComponent({name, age})

- Utilizamos então name, ao invés de props.age.

### Children Prop

- Children Prop é utilizado quando um componente precisa ter JSX dentro dele, porém, o JSX vem do componente pai.

- Então, o componente age como um container, abrigando esse JSX e, o children, entra como uma prop do componente.

### Funções em props

- Podemos passar funções através de props, basta criar a função no componente pai e enviar como prop.

- No componente filho, podemos utilizar para algum evento.

## Reutilização de componentes

- Com o auxílio das props, reutilizar componentes faz mais sentido. Se temos 1000 dados de carros, podemos representá-los com apenas um componente repetido N vezes.

- Isso torna o código mais padronizado, e facilita a manutenção.

### Reutilização de componentes com loop

- Os arrays podem ter muitos itens, e às vezes nem sabemos ao certo sua quantidade total.

- Então, o correto é utilizar uma estrutura de loop para percorrer os itens.

## React Fragments

- Os Fragments são interessantes para quando há mais de um elemento pai no componente ou não queremos incluir HTML desnecessário no elemento pai, não alterando sua estrutura.

- A sintaxe é: <> ... </>

## Eleveção de state - State Lift

- State lift é quando um valor é levado do componente filho para o pai.

- Geralmente temos um componente que usa o state e outro que o altera.

- Então, o componente pai vai gerenciar os valores e passar para os filhos as alterações.
