# Formulários em React

- Para envio de dados é necessário um formulário, em React também é utilizado a tag form.

- As labels tem o atributo for alterado para htmlFor, que conta com o name do input.

- Não utilizamos action, o envie deve ser feito pelo JavaScript, de forma assíncrona.

## Label envolvendo o input

- Em React, um padrão muito utilizado é a label ser o elemento pai do input.

- O atributo for é opcional nessa abordagem.

- Simplifica o HTML e permanece a semântica.

## Manipulando valores

- Para manipular os valores de um formulário, vamos utilizar o hook useState.

- Ou seja, armazenamos o valor com o set.

- O evento que vai nos inputs é o onChange e, nele, teremos a função de alteração.

### Simplificando a manipulação

- Quando temos diversos inputs no form, podemos simplificar a manipulação.

- Criamos uma função inline dentro do onChange e trocamos o valor do dado.

## Envio de Formulário

- Para enviar formulários utilizamos o evento onSubmit.

- Podemos executar uma função, assim como nos inputs.

- Temos que parar o envio do formulário com o preventDefault.

- E nesta função é que fazemos validações de dados.

## Controlled Inputs

- Com o Controlled input, podemos atribuir valores pré-existentes aos inputs dos forms.

- Precisamos igualar o atributo value ao state e também fazer uma lógica que entrega uma string vazia, se não houver valor.

## Limpando formulários

- Com o controlled input, limpar o formulário fica simples, basta atribuir valores vazios aos states.

- Geralmente, isso é feito após o envio, para resetar o formulário.

## Input textarea

- O textarea pode ser aplicado como um input normal de texto.

- O atributo value pode ser utilizado para mudar o texto inicial.

- E com o onChange, mudamos o seu state.

## Input select

- O select é muito semelhante aos outros inputs, o evento onChange pode mudar o valor do seu state.

- E o value deve ser atribuido a uma das options.
