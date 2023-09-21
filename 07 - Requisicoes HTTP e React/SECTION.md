# HTTP e React

## JSON Server

- Será utilizado o pacote npm JSON Server, que simula uma API, ou seja, possibilita realizar requsições HTTP.

- É instalado com o comando "npm install json-server"

## Importância do useEffect

- O useEffect faz com que seja possível controlar a execução de uma ação, impedindo que recursos sejam re-executados a cada re-renderização

- O componente é re-renderizado a cada mudança.

- O useEffect possui um array de depedências que coordena o que permite a execução do código.

- O useEffect é muito comum nas requisições HTTP.

## Resgatando dados com React

- Para resgatar dados de uma API, há um procedimento no React.

- Usar useState para salvar os dados.

- Utilizar useEffect para chamar a API apenas quando necessário.

- Realizar a requisição da API com alguma ferramenta, AXIOS ou Fetch API.

## Adicionando dados

- Para adicionar dados via API, é preciso de inputs preenchendo os useStates.

- É reunido os dados em uma função, que é disparada no evento onSubmit.

## Carregamento dinâmico de dados

- Se a requisição obter êxito, podemos adicionar no front um novo item a lista.

- Já temos a informação dele e não precisamos fazer outra req HTTP, deixando o projeto mais performático.

## Custom hook para o fetch

- É normal separar as responsabilidades nos componentes.

- Ou seja, termos a função de requisição entre outro arquivo.

- Podemos criar o nosso próprio hook para isso, sendo chamado de custom hook.

- A pasta utilizada é a hooks.
