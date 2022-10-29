# Programação de Funcionalidades

Nessa seção são apresentadas as telas correspondentes as funcionalidades implementadas. As instruções de acesso da aplicação são apresentadas a seguir:

Como o backend do projeto ainda não se encontra hospedado, o usuário que deseja utilizar a aplicação na versão atual deverá rodar o JSON Server em seu próprio computador através dos seguintes passos:
- Fazer download do arquivo db.json presente na pasta https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t1-time2_tradesneakers/tree/main/src/backend.
- Colocar o arquivo em um diretório e abrir este diretório no VS Code.
- Instalar as bibliotecas JSON Server e JSON Server auth utilizando os comandos "npm install -g json-server" e 
"npm install -g json-server-auth" no terminal do VS Code.
- Instalar o localtunnel utilizando o comando "npm install -g localtunnel".
- Rodar o JSON Server localmente utilizando o comando "json-server-auth db.json" no terminal do VS Code.
- Utilizar o localtunnel para expor a porta 3000 em que o JSON Server está rodando para a internet utilizando o comando "lt --port 3000" no prompt de comando do seu sistema operacional.
- Acessar a URL fornecida pelo localtunnel em um navegador e clicar em "Click to continue" para habilitar a URL.

Após a realização destas etapas para rodar o backend, o usuário deverá acessar o link da aplicação no Snack em https://snack.expo.dev/@sergiomenezes/tradesneakers e seguir os seguintes passos:
- Acessar o arquivo urls.js presente na pasta src/services nos diretórios do Snack (presentes no canto esquerdo da página do Snack acessada através do link acima).
- Substituir a URL presente como valor da variável "BASE_URL" pela nova URL fornecida pelo localtunnel na etapa anterior (as URLs fornecidas são temporárias e deixam de ser válidas após finalizar o processo no prompt de comando, de modo que uma nova URL precisa ser fornecida a cada vez que a aplicação for ser executada).
- Caso deseje rodar a aplicação em um dispositivo físico, baixar o aplicativo "Expo Go" na App Store/Apple Store e escanear o QR code fornecido pelo snack ao clicar na aba de "My device" presente na página do Snack.
- Caso deseje rodar a aplicação em um emulador de Android ou IoS, clicar na taba "Android" ou "IoS" na página do Snack.
Observação: Algumas funcionalidades como o sistema de alertas não funciona apropriadamente ao rodar a aplicação no modo "Web" do Snack. Por isto, é recomendado rodar a aplicação nos emuladores de Android, IoS ou em um dispositivo físico através do Expo Go.

# Funcionalidades progamadas por Sérgio Luiz de Menezes Filho

Nesta seção se encontra a documentação das funcionalidades progamadas pelo membro Sérgio Luiz de Menezes Filho, bem como o vídeo de apresentação explicando o processo de implementação das mesmas.

## Vídeo de apresentação explicando as funcionalidades:

## Cadastro de conta de usuário (RF-01)
A funcionalidade de cadastro de conta de usuário pode ser acessada a partir da tela de login clicando-se no botão "Registrar-se". O usuário deverá informar seu nome de usuário, e-mail, telefone e a senha que deseja usar (além de repetir a senha). Caso todas as informações sejam válidas e o e-mail já não esteja em uso por outro usuário, o usuário terá sua conta cadastrada receberá uma mensagem de "Cadastro realizado com sucesso" ao clicar no botão "Confirmar".

**Tela - Tela de cadastro de conta de usuário**<br>
![cadastro1](https://user-images.githubusercontent.com/74699119/194682734-8e4a73ab-1893-4470-99ff-b8e1b9c88d8e.png)

**Alerta - Mensagem de sucesso**<br>
![cadastro2](https://user-images.githubusercontent.com/74699119/194682741-23862030-71dd-4bca-809c-45e128cf1efc.png)

Estrutura de dados:
Os dados prenchidos no formulário de cadastro são enviados para o backend em formato JSON na seguinte estrutura:

    {
      "email": "Usuario@email.com",
      "password": "Senha",
      "name": "Usuario",
      "phone": "99999999",
    }

A senha é então encriptada utilizando-se o bcrypjs e os dados são armazenados em formato JSON no backend simulado do JSON server na seguinte estrutura de dados.
```
"users": [
    {
      "email": "Usuario@email.com",
      "password": "$2a$10$adRRvEnLyMsJSPuAWA2bwenACnDlQCqKfVbCzuUrxjVoEbTtY8tTa",
      "name": "Usuario",
      "phone": "99999999",
      "id": 15
    },
]
```
### Requisitos atendidos
- RF-01

### Artefatos da funcionalidade
Páginas:
- RegisterPage.js

Componentes:
- Header.js

Serviços:
- auth.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar em "Fazer login" no canto direito do cabeçalho;
- Visualizar a tela de login;
- Clicar no botão "Registrar-se";
- Visualizar a tela de cadastro de conta de usuário;
- Preencher as informações solicitadas;
- Clicar no botão "Confirmar";
- Caso as informações sejam válidas e o e-mail já não tenha sido cadastrado anteriormente, visualizar a mensagem de "Usuário cadastrado com sucesso!".

## Login de usuário (RF-01)
A tela de login pode ser acessada clicando na opção "Fazer login" presente no canto direito do cabeçalho, que estará presente caso nenhum usuário esteja logado no sistema. A partir da tela de login, o usuário que já possuir uma conta cadastrada poderá realizar login ao informar seu email e senha cadastrados, sendo redirecionado para a homepage caso o login seja bem sucedido. Após a realização do login, a opção de "Fazer login" no cabeçalho é substituida por um icone de conta de usuário.

**Tela - Tela de login**<br>
![login1](https://user-images.githubusercontent.com/74699119/194682839-323020b5-c4b2-4b16-890e-53a8c1a81bae.png)

**Cabeçalho após login de usuário**<br>
![login2](https://user-images.githubusercontent.com/74699119/194682859-7e7e2329-4f0a-4df6-8554-254ba1604bed.png)

Estrutura de dados:
Os dados prenchidos no formulário de login são enviados em formato JSON para o backend na seguinte estrutura:

    {
      "email": "Usuario@email.com",
      "password": "Senha",
    }

Caso as informações de login estejam corretas, o backend responde a requisição retornando um Token JWT na seguinte estrutura:
```
{
  "accessToken": "xxx.xxx.xxx"
}
```

### Requisitos atendidos
- RF-01

### Artefatos da funcionalidade
Páginas:
- LoginPage.js

Componentes:
- Header.js

Serviços:
- auth.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar em "Fazer login" no canto direito do cabeçalho;
- Visualizar a tela de login;
- Preencher as informações solicitadas;
- Clicar no botão "Entrar";
- Caso as informações sejam válidas, o login será realizado e o usuário será redirecionado para a homepage, podendo observar que a opção de "Fazer login" do cabeçalho foi substituida por um ícone de conta de usuário.

## Busca de produtos (RF-03)
A tela de busca de produtos poderá ser acessada ao clicar no icone de "Buscar" representado por uma lupa presente no menu de navegação inferior. Dentro desta tela o usuário é capaz de informar um texto na caixa de busca para realizar uma pesquisa e obter assim a lista de tênis filtados de acordo com as palavras utilizadas na busca. O usuário poderá também nesta tela selecionar um filtro de tamanho/numeração do tênis, que realizará a filtragem dos resultados de modo a mostrar somente tênis que possuam a numeração desejada.

**Tela - Tela de busca**<br>
![busca1](https://user-images.githubusercontent.com/74699119/194682865-111f2484-7108-4993-a71a-3a84a1d0529c.png)

**Tela - Tela de busca após realização de busca**<br>
![busca2](https://user-images.githubusercontent.com/74699119/194682867-7bfbcded-9342-4e03-b5a4-5a9094c7507a.png)

**Tela - Tela de busca após filtrar resultados por numeração do tênis**<br>
![busca3](https://user-images.githubusercontent.com/74699119/194682872-eccc7ed0-6b88-430c-9540-e26e980c0e8e.png)
<br>
![busca4](https://user-images.githubusercontent.com/74699119/194682875-f21e369a-6929-4978-8999-2fd7f6369c06.png)

Estrutura de dados:
As informações sobre os produtos a serem mostrados na tela são recuperadas em formato JSON da API fake criada pelo JSON server na seguinte estrutura:

Obs: Como não possuímos um serviço de armazenamento separado para hospedar as imagens em URLs próprias e o React Native é incapaz de utilizar sources dinâmicos para imagens, as imagens dos produtos estão armazenadas em Base64, com a string completa das imagens tendo sido parcialmente omitidas no exemplo abaixo por serem muito grandes. 
```
    produtos: [
    {
      "id": 1,
      "nome": "Tênis Air Jordan Cinza",
      "tamanho": 40,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAIAAACtIY/OAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 85.5,
    },
    {
      "id": 2,
      "nome": "Tênis Air Jordan Branco e Preto",
      "tamanho": 38,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QAA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 90,
    },
    {
      "id": 3,
      "nome": "Tênis Vans Amarelo",
      "tamanho": 36,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAIAAACtIY/OAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 100,
    },
    {
      "id": 4,
      "nome": "Tênis All Star Branco",
      "tamanho": 42,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 75,
    },
    {
      "id": 5,
      "nome": "Tênis Adidas Preto",
      "tamanho": 39,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 60,
    },
    {
      "id": 6,
      "nome": "Tênis Puma Vermelho",
      "tamanho": 37,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlQAAAJSCAYAAAAFwVs0AAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 70,
    },
  ]
```
### Requisitos atendidos
- RF-03

### Artefatos da funcionalidade
Páginas:
- SearchPage.js

Componentes:
- SearchBar.js
- Header.js
- BottomNavigation.js

Serviços:
- auth.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar em "Buscar" no menu de navegação inferior;
- Visualizar a tela de busca de produtos;
- Inserir o texto na caixa de busca presente no topo da tela para realizar a busca;
- Visualizar resultados da busca;
- Caso deseje filtrar os resultados da busca pela numeração do tênis, selecionar um tamanho na caixa de seleção presente ao lado de "Filtrar por tamanho";
- Visualizar resultados da busca filtrados pela numeração dos tênis.


## Tela de visualizar conversas (RF-04)
A tela de visualizar conversas poderá ser acessada ao clicar no icone de "Conversas" representado por um balão de conversa presente no canto esquerdo do cabeçalho. Dentro desta tela o usuário poderá visualizar todas as conversas que iniciou com outros usuários da plataforma, podendo visualizar a mensagem mais recente de cada uma delas, bem como a data da mesma, poderá também filtra-las pelo nome do usuário com o qual conversou ao inserir seu nome na caixa de busca presente abaixo do cabeçalho. Dentro dessa tela, o usuário terá a opção de selecionar um novo usuário para iniciar uma nova conversa (clicando no botão "nova conversa" presente na parte inferior da tela e clicando no nome do usuário desejado) ou clicar em uma conversa específica para abri-la na tela de troca de mensagens, aonde poderá visualizar todas as mensagens já trocadas entre ele e o usuário em questão, bem como enviar novas mensagens para a conversa.

**Tela - Tela de visualizar conversas**<br>
![chatPage](https://user-images.githubusercontent.com/74699119/198773007-dcf97ae2-5ea1-4782-8094-13592fa77a26.png)

**Tela - Tela de visualizar conversas (após filtrar conversas)**<br>
![chatPage2](https://user-images.githubusercontent.com/74699119/198773097-19d6210a-46aa-434b-ad65-f90b364a9866.png)

Estrutura de dados:
Como o JSON server é um backend simulado que não permite operações mais complexas a nível de backend, a organização das conversas é feita no frontend a partir dos dados recuperados da tabela "messages" e da tabela "users", de modo que uma lista de conversas é montada baseado na existência ou não de mensagens trocadas com outros usuários, adicionando-se informações como nome e id do usuário em questão, bem como o conteúdo e data da mensagem mais recente trocada entre este e o usuário da aplicação. Os dados das tabelas "messages" e "users" são recuperados nas seguintes estruturas:

**messages**
```
"messages": [
    {
      "id": 1,
      "message": "Teste",
      "authorId": 1,
      "destinataryId": 11,
      "dateSent": "Oct 18 2022 12:31:20",
      "dateSentInTicks": 1666107080965,
      "messageHasBeenSeen": true
    },
    {
      "id": 2,
      "message": "Teste",
      "authorId": 1,
      "destinataryId": 14,
      "dateSent": "Oct 18 2022 12:32:35",
      "dateSentInTicks": 1666107155885,
      "messageHasBeenSeen": true
    },
    {
      "id": 3,
      "message": "A",
      "authorId": 1,
      "destinataryId": 11,
      "dateSent": "Oct 18 2022 12:33:21",
      "dateSentInTicks": 1666107201188,
      "messageHasBeenSeen": true
    },
    {
      "id": 4,
      "message": "teste",
      "authorId": 1,
      "destinataryId": 11,
      "dateSent": "Oct 18 2022 12:43:16",
      "dateSentInTicks": 1666107796571,
      "messageHasBeenSeen": true
    },
  ]
```
**users**
```
"users": [
    {
      "email": "Usuario@email.com",
      "password": "$2a$10$adRRvEnLyMsJSPuAWA2bwenACnDlQCqKfVbCzuUrxjVoEbTtY8tTa",
      "name": "Usuario",
      "phone": "99999999",
      "id": 15
    },
]
```

### Requisitos atendidos
- RF-04

### Artefatos da funcionalidade
Páginas:
- ChatPage.js

Componentes:
- Header.js

Serviços:
- auth.services.js
- messages.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar no icone de balão de conversa no cabeçalho;
- Visualizar a tela de conversas;
- Inserir o texto na caixa de busca presente abaixo do cabeçalho caso deseje filtrar as conversas por nome do usuário;
- Visualizar a tela de conversas com resultados filtrados;

## Tela de iniciar conversa (RF-04)
A tela de iniciar conversa poderá ser acessada através da tela de conversas ao clicar no botão "Nova conversa" presente na parte de baixo da tela. Ao acessar essa tela, o usuário visualizará uma lista de todos os usuários do sistema em ordem alfabética, podendo clicar no botão "Conversar" para iniciar ou continuar uma conversa com aquele usuário selecionado. O usuário poderá também realizar uma busca nesta tela, filtrando os usuários pelo nome baseado no texto digitado no campo de pesquisa.

**Tela - Tela de iniciar conversa**<br>
![newChatPage](https://user-images.githubusercontent.com/74699119/198853641-845418a0-b11a-415e-9417-9b65255fcde3.png)

**Tela - Tela de iniciar conversa (após filtrar usuários)**<br>
![newChatPage2](https://user-images.githubusercontent.com/74699119/198853644-4d00aed3-a21e-4ea1-9578-c5c1e471c666.png)

Estrutura de dados:
A tela em questão recupera as informações dos usuários do backend, mostrando todos os usuários em ordem alfabética exceto o próprio usuário logado. Os dados são recuperados na seguitne estrutura.

```
  "users": [
    {
      "email": "a@a.com",
      "password": "$2a$10$/JrNm4sdi6gKOxSZpbQGFuyf.u4bnQ5M71J8uxAEqaUpAWyd7kQgm",
      "name": "a",
      "id": 1
    },
    {
      "email": "b@b.com",
      "password": "$2a$10$EO69.Bu0HC7u4v9MIHvRMu6HTMrdGvAjBVRDPEh7Y9Gv5DR9Ezwzq",
      "name": "b",
      "id": 2
    },
    {
      "id": 3,
      "name": "ddd",
      "email": "d@d.com",
      "phone": "3423423423423",
      "password": "$2a$10$.8txYgJ9t3XiFy0CSYco7u0n43I3tuBrMvpsQO/CelzPTLO2XVXi6"
    },
    {
      "email": "f@f.com",
      "password": "$2a$10$sqmJ.2SDLzP7zLumWU2TWe5CFdlH7laJh.3.usC8pUdVRpDBihibm",
      "name": "f",
      "id": 4
    },
  ]
```

### Requisitos atendidos
- RF-04

### Artefatos da funcionalidade
Páginas:
- NewChatPage.js

Componentes:
- Header.js

Serviços:
- auth.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar no icone de balão de conversa no cabeçalho;
- Visualizar a tela de conversas;
- Clicar no botão "Nova conversa";
- Visualizar a tela de iniciar conversa;
- Inserir o texto na caixa de busca presente abaixo do cabeçalho caso deseje filtrar os usuário por nome;
- Visualizar a tela de iniciar conversa com resultados filtrados;

## Tela de troca de mensagens (RF-04)
A tela de troca de mensagens poderá ser acessada ao iniciar ou continuar uma conversa com um usuário específico. Esta tela poderá ser acessada tanto da tela de visualizar conversas (para continuar uma conversa já iniciada) quanto da tela de iniciar conversa (para iniciar uma nova conversa), futuramente poderá se iniciar uma conversa também da tela de visualizar produto (que ainda não está completamente implementada). Esta tela consiste em um chat entre dois usuários, o usuário logado e o usuário com o qual este deseja conversar, onde o usuário poderá compor e enviar mensagens de texto para serem lidas pelo outro usuário. Ao enviar uma nova mensagem, ela será adicionada à conversa com a data de envio e o status de visualização (se foi ou não visualizada pelo destinatário). 

**Tela - Tela de troca de mensages**<br>
![viewChatPage](https://user-images.githubusercontent.com/74699119/198853827-eb568912-5702-4e8a-91bb-4e7cf32ffd5f.png)

Estrutura de dados:
As mensagens enviadas pelos usuários são guardadas no backend na seguinte estrutura de dados:

```
  "messages": [
    {
      "id": 1,
      "message": "Teste",
      "authorId": 1,
      "destinataryId": 11,
      "dateSent": "Oct 18 2022 12:31:20",
      "dateSentInTicks": 1666107080965,
      "messageHasBeenSeen": true
    },
    {
      "id": 2,
      "message": "Teste",
      "authorId": 1,
      "destinataryId": 14,
      "dateSent": "Oct 18 2022 12:32:35",
      "dateSentInTicks": 1666107155885,
      "messageHasBeenSeen": true
    },
    {
      "id": 3,
      "message": "A",
      "authorId": 1,
      "destinataryId": 11,
      "dateSent": "Oct 18 2022 12:33:21",
      "dateSentInTicks": 1666107201188,
      "messageHasBeenSeen": true
    },
    {
      "id": 4,
      "message": "teste",
      "authorId": 1,
      "destinataryId": 11,
      "dateSent": "Oct 18 2022 12:43:16",
      "dateSentInTicks": 1666107796571,
      "messageHasBeenSeen": true
    },
    {
      "id": 5,
      "message": "teste",
      "authorId": 1,
      "destinataryId": 11,
      "dateSent": "Oct 18 2022 12:44:41",
      "dateSentInTicks": 1666107881650,
      "messageHasBeenSeen": true
    },
    {
      "id": 6,
      "message": "teste",
      "authorId": 1,
      "destinataryId": 14,
      "dateSent": "Oct 18 2022 12:44:46",
      "dateSentInTicks": 1666107886354,
      "messageHasBeenSeen": true
    },
    ]
```
As mensagens serão recuperadas do backend na mesma estrutura de dados, sendo subsequentemente filtradas para excluir todas as mensagens que não possuam o usuário logado como remetente e o usuário com quem ele deseja falar como destinatário ou o inverso (usuário logado como destinatário e usuário com quem deseja falar como remetente), de modo a mostrar apenas as mensagens referentes àquela conversa.

O nome do usuário com quem o usuário logado está conversando também é recuperado do backend através de um método "getUser" que retorna as informações daquele único usuário a partir de seu id, conforme ilustrado abaixo (obs: como estamos utilizando o JSON Server, todas as informações do usuário são recuperadas, em um backend convencional seria solicitado que apenas o nome fosse retornado).

```
    {
      "email": "a@a.com",
      "password": "$2a$10$/JrNm4sdi6gKOxSZpbQGFuyf.u4bnQ5M71J8uxAEqaUpAWyd7kQgm",
      "name": "a",
      "id": 1
    }
```

### Requisitos atendidos
- RF-04

### Artefatos da funcionalidade
Páginas:
- ViewChatPage.js

Componentes:
- Header.js

Serviços:
- auth.services.js
- messages.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar no icone de balão de conversa no cabeçalho;
- Visualizar a tela de conversas;
- Clicar no botão "Nova conversa";
- Visualizar a tela de iniciar conversa;
- Inserir o texto na caixa de busca presente abaixo do cabeçalho caso deseje filtrar os usuário por nome;
- Visualizar a tela de iniciar conversa com resultados filtrados;
