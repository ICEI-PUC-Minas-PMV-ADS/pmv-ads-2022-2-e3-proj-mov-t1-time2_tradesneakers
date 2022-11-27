# Plano de Testes de Software
Os requisitos para realização dos testes de software são:

Utilizando o backend hospedado no heroku.
- Backend publicado na internet (https://trade-sneakers-backend.herokuapp.com);
- Navegador da internet - Chrome, Firefox ou Edge;
- Conectividade de internet para acessar a aplicação no Snack.

Caso deseje rodar o backend de forma local.
- Visual Studio 2022 instalado para rodar o backend em JSON server de forma local;
- Localtunnel instalado para expor a porta do backend para a internet;
- Navegador da internet - Chrome, Firefox ou Edge, para acessar a aplicação no Snack.

Por meio do plano de testes serão validados os requisitos para garantir o funcionamento adequado do programa. Permitindo garantir a confiabilidade e segurança do software e identificando erros e falhas durante o desenvolvimento.
 
### Casos de Testes
Os testes funcionais a serem realizados na solução estão descritos a seguir:

|Caso de teste 01     | CT 01 - Registrar conta de usuário |
|-------|-------------------------
|Requisitos Associados | RF-01: Disponibilizar um sistema de login e autenticação, onde o usuário poderá criar uma conta com dados válidos e realizar login.
|Objetivo do teste| Verificar a funcionalidade de registro de novos usuários no sistema. |
|Passos |	1) Acessar o navegador. 2) Informar a URL do projeto do Snack. 3) Rodar o projeto no emulador de Android, IoS ou em um aparelho celular através do Expo Go através do QR Code disponibilizado no Snack. 4) Clicar na mensagem de "Fazer login" presente no canto direito do cabeçalho. 5) Visualizar tela de login. 6) Clicar no botão "Criar nova conta". 7) Preencher os campos cadastrados e clicar em "Cadastrar" 8) Caso todos os campos tenham sido preenchidos de forma apropriada, o sistema deve retornar uma mensagem de "Usuário cadastrado com sucesso" e redirecionar para a tela de login. |
|Critérios de êxito| - O usuário deverá ser capaz de criar uma nova conta caso preencha todos os campos apropriadamente.<br>- O sistema deverá retornar uma mensagem de erro caso o usuário preencha algum campo de maneira errada (não colocar nome de usuário, inserir um endereço de email com formatação indevida, inserir uma senha com menos de 4 caracteres ou inserir valores diferentes no campo "senha" e "repetir senha".<br>- O sistema deverá retornar uma mensagem de "e-mail já cadastrado" caso o usuário tente cadastrar uma conta com um e-mail que já foi cadastrado. |

|Caso de teste 02     | CT 02 - Realizar login na plataforma |
|-------|-------------------------
|Requisitos Associados | RF-01: Disponibilizar um sistema de login e autenticação, onde o usuário poderá criar uma conta com dados válidos e realizar login.
|Objetivo do teste| Verificar a funcionalidade de login e autenticação do sistema. |
|Passos |	1) Acessar o navegador. 2) Informar a URL do projeto do Snack. 3) Rodar o projeto no emulador de Android, IoS ou em um aparelho celular através do Expo Go através do QR Code disponibilizado no Snack. 4) Clicar na mensagem de "Fazer login" presente no canto direito do cabeçalho. 5) Visualizar tela de login. 6) Informar o e-mail e senha e clicar em "login". 7) Caso as informações fornecidas estejam corretas, o sistema deverá realizar o login e redirecionar o usuário para a tela anterior, um icone de usuário deverá agora aparecer no canto superior direito do cabeçalho aonde a mensagem de "Fazer login" costumava estar. |
|Critérios de êxito| - O sistema deverá realizar o login do usuário caso os dados informados estejam corretos.<br>- A mensagem de "Fazer login" deverá ser substituida por um icone de usuário após o login bem sucedido.-<br>- O sistema deverá retornar uma mensagem de erro caso o usuário informe dados incorretos durante o login. |

|Caso de teste 03     | CT 03 - Realizar busca de produtos por nome de tamanho do tênis |
|-------|-------------------------
|Requisitos Associados | RF-03: Disponibilizar aos usuários uma plataforma uma página de produtos aonde poderão visualizar tênis cadastrados por outros usuários.
|Objetivo do teste| Verificar a funcionalidade de busca e visualização de produtos cadastrados na plataforma. |
|Passos | 1) Acessar o navegador. 2) Informar a URL do projeto do Snack. 3) Rodar o projeto no emulador de Android, IoS ou em um aparelho celular através do Expo Go através do QR Code disponibilizado no Snack. 4) Clicar no icone "buscar" presente no menu de navegação inferior. 5) Visualizar tela de busca de produtos. 6) Digitar o nome do produto que deseja buscar na caixa de busca e clicar no icone da lupa ao lado dela. 7) Visualizar resultados da busca. 8) Selecionar um tamanho de tênis dentre as opções presentes na caixa de seleção ao lado do texto "Filtrar por tamanho". 9) Visualizar resultados filtrados por tamanho. |
|Critérios de êxito| - O sistema deverá retornar os resultados das buscas conforme os critérios informados pelo usuário (palavras chave e numeração), sendo que as buscas podem resultar em nenhum resultado caso não exista nenhum produto cadastrado que se encaixe nos filtros informados. |

|Caso de teste 04     | CT 04 - Visualizando informações e detalhes do produto selecionado na tela de busca na tela "ProductDetailsPage" |
|-------|-------------------------
|Requisitos Associados | RF-03: Disponibilizar aos usuários uma plataforma uma página de produtos aonde poderão visualizar tênis cadastrados por outros usuários.
|Objetivo do teste| Verificar a funcionalidade da opção visualizar detalhes do produto selecionado na tela de busca. |
|Passos | 1) Acessar o navegador. 2) Informar a URL do projeto do Snack. 3) Rodar o projeto no emulador de Android, IoS ou em um aparelho celular através do Expo Go através do QR Code disponibilizado no Snack. 4) Clicar no ícone "buscar" presente no menu de navegação inferior. 5) Visualizar resultados da busca. 6) Selecionar um tamanho de tênis dentre as opções presentes na caixa de seleção ao lado do texto "Filtrar por tamanho"(no caso o tamanho escolhido foi o 40 que retorna o produto com id 1, pois ainda não foi implementado o retorno de qualquer id selecionado). 8) Visualizar o produto resultado do tamanho 40 e clicar no botão "Ver detalhes". 9) Após o clique no botão o usuário é redirecionado para a página "ProductDetailsPage" que apresenta as informações do produto selecionado. |
|Critérios de êxito| - O sistema deverá retornar o resultado da busca conforme os critérios informados pelo usuário (no caso o tamanho 40 que representa o produto com id 1), e após clicar no botão ser redirecionado para a página de visualizar o produto. | |

|Caso de teste 05     | CT 05 - Realizar troca de mensagens com outro usuário |
|-------|-------------------------
|Requisitos Associados | RF-04: Disponibilizar um sistema de mensagens onde os usuários poderão conversar entre si a respeito dos produtos e combinar possíveis trocas.|
|Objetivo do teste| Verificar a funcionalidade de troca de mensagens entre usuários dentro da plataforma |
|Passos |	1) Acessar o navegador. 2) Informar a URL do projeto do Snack. 3) Rodar o projeto no emulador de Android, IoS ou em um aparelho celular através do Expo Go através do QR Code disponibilizado no Snack. 4) Realizar login na plataforma conforme descrito no CT-02. 5) Clicar no icone de conversas presente no canto superior esquerdo do cabeçalho. 6) Visualizar a tela de converas. 7) Clicar no botão "Nova conversa". 8) Selecionar o usuário com o qual deseja iniciar uma nova conversa. 9) Visualizar a tela de troca de mensagens. 10) Escrever a menagem e clicar no icone de enviar. 11) Visualizar a mensagem enviada. 12) Realizar login na conta do usuário para o qual a mensagem foi enviada. 13) Clicar no icone de conversas no canto esquerdo do cabeçalho. 14) Clicar na conversa com o primeiro usuário. 15) Visualizar a mensagem recebida. 16) Responder a mensagem.|
|Critérios de êxito| - O usuário deverá ser capaz de iniciar uma nova conversa e enviar uma mensagem.<br>- O usuário para o qual a mensagem foi enviada deverá ser capaz de visualizar e responder a mensagem.|

|Caso de teste 06     | CT 06 - Atualizar informações de conta do usuário |
|-------|-------------------------
|Requisitos Associados | RF-09: Disponibilizar aos usuários um sistema de alteração de dados como nome de usuário, email, senha, etc.|
|Objetivo do teste| Verificar a funcionalidade de atualizar informações do usuário. |
|Passos |	1) Acessar o navegador. 2) Informar a URL do projeto do Snack. 3) Rodar o projeto no emulador de Android, IoS ou em um aparelho celular através do Expo Go através do QR Code disponibilizado no Snack. 4) Realizar login na plataforma conforme descrito no CT-02. 5) Clicar no icone de conta de usuario presente no canto superior direito da aplicação. 6) Visualizar a tela de atualizar dados. 7) Preencher campos que deseja alterar informações 8) Clicar em confirmar.|
|Critérios de êxito| - Após preencher todos os dados e clicar em confirmar os dados deverão ser alterados no banco de dados (db.json). <br>- A aplicação deve permitir que usuário faça o proximo login usando o novo e-mail e nova senha caso o usuário tenha alterado essas informações também.

|Caso de teste 07     | CT 07 - Realizar compra de produto |
|-------|-------------------------
|Requisitos Associados | RF-05: Disponibilizar uma funcionalidade onde os usuários poderão escolher comprar um produto cadastrado ou fazer “ofertas” de troca do produto por outro produto cadastrado. Sendo que o usuário ao qual a oferta de troca foi feita poderá visualizar todas as ofertas em aberto e optar por aceitar ou recusar as mesmas.<br>RF-07: 	Disponibilizar um sistema de pagamento para que os usuários possam pagar os custos relativos ao envio, serviço de curadoria e preço do produto em caso de compra.|
|Objetivo do teste| Verificar a funcionalidade de compra de produtos cadastrados na plataforma. |
|Passos |	1) Acessar o navegador. 2) Informar a URL do projeto do Snack. 3) Rodar o projeto no emulador de Android, IoS ou em um aparelho celular através do Expo Go através do QR Code disponibilizado no Snack. 4) Realizar login na plataforma conforme descrito no CT-02. 5) Buscar o produto que deseja e entrar na página de visualizar detalhes do produto conforme descrito no CT-04. 6) Clicar na opção "Comprar produto". 7) Visualizar tela de compra de produto. 8) Preencher as informações solicitadas nos campos de "entrega para" e "pagamento". 9) Clicar em "comprar". 10) Visualizar mensagem de sucesso "Pagamento efetuado com sucesso!" |
|Critérios de êxito| - O usuário deve ser capaz de finalizar a compra do produto, obtendo a mensagem de "Pagamento efetuado com sucesso!" ao final do processo.|

|Caso de teste 08     | CT 08 - Visualizar histórico de compras/trocas de produtos |
|-------|-------------------------
|Requisitos Associados | RF-05: Disponibilizar uma funcionalidade onde os usuários poderão escolher comprar um produto cadastrado ou fazer “ofertas” de troca do produto por outro produto cadastrado. Sendo que o usuário ao qual a oferta de troca foi feita poderá visualizar todas as ofertas em aberto e optar por aceitar ou recusar as mesmas.|
|Objetivo do teste| Verificar a funcionalidade de visualização do histórico de pedidos dentro da plataforma. |
|Passos | 1) Acessar o navegador. 2) Informar a URL do projeto do Snack. 3) Rodar o projeto no emulador de Android, IoS ou em um aparelho celular através do Expo Go através do QR Code disponibilizado no Snack. 4) Realizar login na plataforma conforme descrito no CT-02. 5) Caso o usuário em questão não tenha realizado nenhuma compra ou troca na plataforma, realizar uma compra conforme descrito no CT-07 para poder visualiza-la posteriormente na tela de histórico de pedidos. 6) Clicar no icone "pedidos" presente no menu de navegação inferior. 7) Visualizar tela de histórico de pedidos.|
|Critérios de êxito| - O usuário deverá visualizar a tela de histórico de pedidos, contendo detalhes sobre todas as transações de compra ou troca realizadas anteriormente por ele. |

|Caso de teste 09     | CT 09 - Visualizar histórico de acesso do usuário |
|-------|-------------------------
|Requisitos Associados | RF-01: Disponibilizar um sistema de login e autenticação, onde o usuário poderá criar uma conta com dados válidos e realizar login.
|Objetivo do teste| Verificar a funcionalidade de registro dos logins do usuário no histórico de acesso da aplicação. |
|Passos | 1) Acessar o navegador. 2) Informar a URL do projeto do Snack. 3) Rodar o projeto no emulador de Android, IoS ou em um aparelho celular através do Expo Go através do QR Code disponibilizado no Snack. 4) Realizar login na plataforma conforme descrito no CT-02. 5) Clicar no icone de usuário presente no canto direito do cabeçalho (presente no mesmo local onde "Fazer login" aparecia antes do login 6) Visualizar tela de opções da conta. 7) Selecionar a opção "Histórico de acesso". 8) Visualizar histórico de acesso do usuário, incluindo o login realizado no passo 4. |
|Critérios de êxito| - O usuário deverá visualizar a tela de histórico de acesso contendo informações sobre os logins realizados anteriormente por ele (incluindo o login realizado neste caso de teste). |
