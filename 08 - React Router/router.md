# React Router

- React Router é o pacote mais utilizado para criar rotas em uma aplicação React.

- Cada rota é uma página, rota é a nomenclatura utilizada. Ou seja, permite nosso app SPA ter múltiplas páginas.

- Há diversas funcionalidades no React Router, tais como, redirecionamento, rotas aninhadas, 404, etc...

## Configurando o React Router

- Para configurar o React Router é utilizado principalmente o arquivo main.jsx.

- Precisa ser importado os componentes: createBrowserRouter, RouterProvider, Route.

- Eles serão utilizados na configuração e ao longo do projeto.

## Página de Erro - 404

- Pode ser criado facilmente uma página de erro, é necessário criar um componente que será a pagina, geralmente chamado de ErrorPage.

- Depois, é utilizado o hook useRouteError para obter as informações do erro.

- Por último, configurar a propriedade errorElement em main.jsx, como o componente criado.

## Criando componente base

- O Outlet é um componente que nos permite reaproveitar a estrutura das páginas.

- Podemos definir que um componente base seja estrutura e todas as páginas ficam dentro dele.

- As configurações de páginas devem ser feitas na propriedade children em main.jsx.

## Criando links entre páginas

- Para criar links, é utilizado o componente Link. Ele é configurado com a propriedade <strong>to</strong>, que leva a URL de destino.

- Isso permite uma mudança de página sem reload.

## Carregando dados

- Usando o hook useFetch, é possível exibir produtos na Home, dando possibilidade de explorar outros recursos do React Router.

## Carregando dados individuais

- O recurso de carregar rotas individuais é chamado de rota dinâmica.

- Ou seja, como temos vários produtos, a URL de cada um vai variar, dependendo de alguma característica, que geralmente é o id.

- O formato do path é: "/product/:id"

## Rotas aninhadas

- As rotas aninhadas, ou nested routes, são estruturas mais complexas onde combinamos rotas dinâmicas e criamos uma estrutura maior para acessar a página.

- Ex> "/products/:id/info"

## Link Ativo

- Para identificar links ativos utilizamos o componente NavLink ao invés de Link.

- Há uma propriedade isActive que pode aplicar estilos diferenciados para este link.

## Search Params

- O recurso de Search Params permite pegar informações da URL.

- Muito interessante para fazer funcionalidades de busca em um site.

- O hook utilizado para resgatar estes dados é o: useSearchParams.

## Redirect

- Podemos criar um redirecionamento de páginas com o componente Navigate.

- Exemplo: uma URL que deixa de existir, mas queremos redirecionar o usuário para outra.

- A configuração é feita no próprio main.jsx.
