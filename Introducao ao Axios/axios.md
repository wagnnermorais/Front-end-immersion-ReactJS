# Axios

- Axios é baseado em promises, ou seja, é possível utilizar async functions.

## Para fins de exemplos, será usado uma API terceirizada.

- JSONPlaceholder é uma API que retorna dados fakes para fins de testes e projetos pessoais.

https://jsonplaceholder.typicode.com/

## Rotas para requisições:

- /posts 100 posts
- /comments 500 comments
- /albums 100 albums
- /photos 5000 photos
- /todos 200 todos
- /users 10 users

## Headers

- Os <strong>headers</strong> são configurados no momento da requisição.

- Pode ser adicionado parâmetros adicionais, por exemplo, determinar o tipo de dado que é pedido.

## POST Request

- Para enviar dados, é utilizado o método POST.

- É necessário configurar a <strong>propriedade body</strong> com os dados a serem enviados.

## Interceptors

- Interceptors são como middlewares.

- Ou seja, podemos interceptar a requisição e a resposta inserindo algum código entre estas duas ações.
