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

## Vídeos de apresentação explicando as funcionalidades:
Segue abaixo os links dos vídeos hospedados no Youtube contendo a apresentação relacionada à progamação de funcionalidades para a etapa 3, 4 e 5 do projeto:

Vídeo mostrando as funcionalidades progamadas para a Etapa 3:<br>
https://youtu.be/7tLjU90fjfw

Vídeo mostrando as funcionalidades progamadas para a Etapa 4:<br>
https://youtu.be/j835g2sfgM8

Vídeo mostrando as funcionalidades progamadas para a Etapa 5:<br>
https://youtu.be/NGGmWPse3es

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
- Caso já tenha trocado mensagens com o usuário desejado, clicar sobre a conversa em questão já na tela de visualizar conversas, caso não tenha trocado nenhuma mensagem com o usuário em questão ainda, clicar no botão "Nova conversa", visualizar a tela de iniciar conversa e clicar em "Conversar" ao lado do nome do usuário desejado;
- Visualizar a tela de troca de mensagens;
- Digitar uma mensagem na caixa de texto presente no canto inferior da tela e clicar no icone de enviar;
- Visualizar a tela de troca de mensagens contendo a nova mensagem enviada;
- Caso queira testar a visualização de mensagens e o envio de mensagens pelo outro usuário, fazer login na conta do usuário para o qual a mensagem foi enviada e repetir o mesmo processo;

## Tela de compra de produto (RF-05, RF-07)
A tela de compra de produto poderá ser acessada ao clicar na opção "comprar" presente na tela de visualizar detalhes do produto. Ao entrar nessa tela, o usuário poderá tanto optar por usar um endereço préviamente cadastrado em sua conta como informar um novo endereço. Ele deverá também informar as informações de seu cartão de crédito para realizar a compra (que é um processo simulado, de modo que o usuário pode preencher qualquer número de 16 dígitos como número do cartão de crédito sem que ocorra uma operação real naquele número). Ao finalizar o preenchimento de todas as informações o usuário deverá clicar no botão "comprar no final da página para efetuar a compra.

**Tela - Tela de compra de produto**<br>
![comprar2](https://user-images.githubusercontent.com/74699119/204044594-6cb4f245-bcee-41ff-82c9-7aa547d7da72.png)

**Tela - Tela de compra de produto - Informar outro endereço**<br>
![comprar3](https://user-images.githubusercontent.com/74699119/204044598-a27cc7e4-b15b-47cf-b60f-42d820b9e4ca.png)

**Tela - Tela de compra de produto - Informações preenchidas**<br>
![comprar4](https://user-images.githubusercontent.com/74699119/204044604-71d18e1e-adf0-4bb2-aeca-c11f11451527.png)

**Tela - Compra realizada com sucesso**<br>
![comprar5](https://user-images.githubusercontent.com/74699119/204044609-19c25c72-3375-4500-bc84-b1a6538a21b0.png)

Estrutura de dados:
As informações relativas ao produto que está sendo comprado são recuperadas do backend simulado em JSON server sob a seguinte estrutura de dados:

```
    {
      "id": 1,
      "nome": "Tênis Air Jordan Cinza",
      "tamanho": 40,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAIAAACtIY/OAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 85.5,
    }
```
Recupera-se também as informações do usuário, visando obter o endereço padrão do mesmo. Essas informações são recuperadas na seguinte estrutura de dados:

```
    {
      "id": 1,
      "name": "a",
      "email": "a@a.com",
      "phone": "534543534534534",
      "firstname": "aa",
      "lastname": "aaa",
      "password": "$2a$10$mKMX9zbThmYgQiKj10erguWEm2XRLuICBsadUk2OZx5hM8w3i9Njq",
      "postalCode": 99999999,
      "publicPlace": "Rua X",
      "city": "Cidade X",
      "state": "XX",
      "country": "Brasil"
    }
```

### Requisitos atendidos
- RF-05
- RF-07

### Artefatos da funcionalidade
Páginas:
- BuyProductPage.js

Componentes:
- Header.js

Serviços:
- auth.services.js
- produtos.services.js
- orders.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar em "Buscar" no menu de navegação inferior;
- Visualizar a tela de busca de produtos;
- Inserir o texto na caixa de busca presente no topo da tela para realizar a busca;
- Caso deseje filtrar os resultados da busca pela numeração do tênis, selecionar um tamanho na caixa de seleção presente ao lado de "Filtrar por tamanho";
- Visualizar resultados da busca do produto selecionado;
- Selecionar o produto desejado e clicar no botão "Ver Detalhes";
- Visualizar tela de detalhes do produto;
- Clicar em "Comprar";
- Visualizar tela de compra de produto;
- Preencher os dados solicitados e clicar em "comprar" para finalizar a compra;
- Visualizar homepage e a mensagem de "Pagamento efetuado com sucesso!"

## Tela de histórico de pedidos (RF-05)
A tela de histórico de pedidos permite ao usuário atualmente logado visualizar um histórico de todas as compras e trocas que já realizou no sistema, bem como o status de processamento do pedido (que atualmente fica sempre em "processando" visto que o processo de compra e troca é apenas simulado e não se concretiza de fato). Essa tela poderá ser acessada através do menu de navegação inferior clicando no icone "Pedidos".

**Tela - Tela de histórico de pedidos**<br>
![historicoPedidos1](https://user-images.githubusercontent.com/74699119/204049222-70e9eeb7-41f4-47ed-9913-9178a821e821.png)

Estrutura de dados:
As informações relativas ao histórico de pedidos do usuário atualmente logado são recuperadas do backend simulado em JSON server sob a seguinte estrutura de dados:

```
  "orders": [
    {
      "produtoId": 1,
      "buyerId": 1,
      "cost": "115,50",
      "cardNumber": "**** **** **** 999",
      "address": "Rua X",
      "datePurchase": "Nov 24 2022 22:12:48",
      "datePurchaseInTicks": 1669338768195,
      "status": "Em processamento",
      "id": 7
    },
    {
      "produtoId": 1,
      "buyerId": 2,
      "cost": "120,74",
      "cardNumber": "**** **** **** 9999",
      "address": "R, C, UF, P CEP: 99999999",
      "datePurchase": "Nov 24 2022 22:27:38",
      "datePurchaseInTicks": 1669339658512,
      "status": "Em processamento",
      "id": 12
    },
    {
      "produtoId": 1,
      "buyerId": 1,
      "cost": "110,77",
      "cardNumber": "**** **** **** 9999",
      "address": "Rua X, Cidade X, XX, Brasil CEP: 99999999",
      "datePurchase": "Nov 24 2022 22:59:11",
      "datePurchaseInTicks": 1669341551302,
      "status": "Em processamento",
      "id": 13
    },
  ]
```
Recupera-se também as informações dos produtos, associando-as a cada pedido para que essas informações possam ser mostradas nos detalhes do pedido. Essas informações são recuperadas na seguinte estrutura de dados:

```
    produtos: [
    {
      "id": 1,
      "nome": "Tênis Air Jordan Cinza",
      "tamanho": 40,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAIAAACtIY/OAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 85.5,
      "marca": "Nike",
      "idUsuario": 1
    },
    {
      "id": 2,
      "nome": "Tênis Air Jordan Branco e Preto",
      "tamanho": 38,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QAA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 90,
      "marca": "Nike",
      "idUsuario": 2
    },
    {
      "id": 3,
      "nome": "Tênis Vans Amarelo",
      "tamanho": 36,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAIAAACtIY/OAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 100,
      "marca": "Vans",
      "idUsuario": 3
    },
    {
      "id": 4,
      "nome": "Tênis All Star Branco",
      "tamanho": 42,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 75,
      "marca": "Converse",
      "idUsuario": 4
    },
    {
      "id": 5,
      "nome": "Tênis Adidas Preto",
      "tamanho": 39,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 60,
      "marca": "Adidas",
      "idUsuario": 5
    },
    {
      "id": 6,
      "nome": "Tênis Puma Vermelho",
      "tamanho": 37,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlQAAAJSCAYAAAAFwVs0AAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 70,
      "marca": "Puma",
      "idUsuario": 6
    },
  ]
```

### Requisitos atendidos
- RF-05

### Artefatos da funcionalidade
Páginas:
- OrderHistoryPage.js

Componentes:
- Header.js

Serviços:
- auth.services.js
- produtos.services.js
- orders.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Fazer login com uma conta que já tenha comprado algum produto;
- Clicar em "Pedidos" no menu de navegação inferior;
- Visualizar a tela de histórico de pedidos para o usuário atualmente logado;

## Tela de histórico de acesso (RF-01)
A tela de histórico de acesso permite ao usuário visualizar todos os logins realizados no aplicativo em seu aparelho. Essa funcionalidade utiliza o banco de dados local SQLite, inserindo um novo registro contendo o nome do usuário que realizou login, bem como a data em que este login foi realizado toda a vez que algum usuário realiza login na aplicação. Por utilizar o SQLite, esses dados ficam armazenados diretamente no aparelho em que o login foi realizado, não estando disponíveis no banco de dados compartilhado que as demais funcionalidades utilizam.

**Tela - Acesso a tela de histórico de acesso pela tela de opções da conta**<br>
![historicoDeLogin1](https://user-images.githubusercontent.com/74699119/204116416-99fe4b35-d64e-4110-98de-d800e5888fc7.png)

**Tela - Tela de histórico de acesso**<br>
![historicoDeLogin2](https://user-images.githubusercontent.com/74699119/204116417-41e32594-0e87-4a65-b508-8fd3e31b176d.png)

Estrutura de dados:
As informações relativas ao histórico de acesso são guardadas no banco de dados local SQLite e recuperadas para serem mostradas na tela. Ao serem recuperadas, essas informações são obtidas como um array em formato JSON com a seguinte estrutura de dados contendo a data e o nome do usuário que realizou login nela:

```
  "[
    {
      "id": 1,
      "usuario": "a",
      "data": "Nov 26 2022 22:58:16"
    },
    {
      "id": 2,
      "usuario": "b",
      "data": "Nov 26 2022 23:05:25"
    },
    {
      "id": 3,
      "usuario": "Fulano",
      "data": "Nov 26 2022 23:04:24"
    },
  ]
```
### Requisitos atendidos
- RF-01

### Artefatos da funcionalidade
Páginas:
- LoginHistoryPage.js

Componentes:
- Header.js

Serviços:
- db.services.js
- registroDeLogin.servicesDb.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Fazer login com uma conta que já tenha comprado algum produto;
- Clicar no icone de usuário presente no lado direito de cabeçalho (onde a opção "Fazer login" estava antes do login);
- Visualizar a tela de opções da conta;
- Clicar em "Histórico de acesso";
- Visualizar a tela de Histórico de acesso;

## Tela de visualizar produtos cadastrados (RF-02)
A tela de visualizar produtos cadastrados permite ao usuário visualizar todos os produtos cadastrados por ele no sistema, além de ligar a outras telas como a de preencher detalhes do envio do produto (através do botão "Preencher/Alterar dados de envio"), ir para a tela de cadastro de produto (através do botão "Cadastar novo produto"), ir para a tela de propostas de troca (Através do botão "Visualizar propostas de troca") e também apagar produtos que ele mesmo cadastrou (clicando no botão "Apagar" no card do produto em questão). O usuário poderá também realizar buscas por nome e tamanho do produto nessa tela, similar ao que ocorre na tela de busca de produtos, mas ela só retornará produtos que foram cadastrados pelo próprio usuário. Essa tela é acessada clicando no icone "Postar" presente no menu de navegação inferior. 

**Tela - Tela de visualizar produtos cadastrados**<br>
![visualizarprodutocadastradoA](https://user-images.githubusercontent.com/74699119/206263149-9136afab-77d6-4a75-ac12-5f9583162191.png)

**Tela - Tela de visualizar produtos cadastrados - Apagar produto cadastrado**<br>
![visualizarprodutocadastradoB](https://user-images.githubusercontent.com/74699119/206263168-a09e4088-5a7c-476a-9dce-dda4c0297280.png)
<br/>
![visualizarprodutocadastradoC](https://user-images.githubusercontent.com/74699119/206263174-c946fe56-130e-46e4-bef4-5dc457eab3fa.png)
<br/>
![visualizarprodutocadastradoD](https://user-images.githubusercontent.com/74699119/206263196-286596a9-e1aa-4fb9-ba5c-961997c188d7.png)
<br/>
![visualizarprodutocadastradoE](https://user-images.githubusercontent.com/74699119/206263206-f8d9ff4e-05f5-4172-b819-02b19f0aff2d.png)
<br/>

Estrutura de dados:
As informações sobre os produtos cadastrados são recuperadas da mesma forma que na tela de busca de produtos, com a diferença de que são filtradas pelo atributo idUsuario para garantir que apenas produtos cadastrados pelo usuário atual (idUsuario igual ao id do usuário logado atualmente) sejam exibidos. As informações são recuperadas na seguinte estrutura de dados em JSON:

```
    produtos: [
    {
      "id": 7,
      "nome": "Tenis do Alex 1",
      "marca": "Alex",
      "tamanho": "40",
      "imagem": "data:image/png;base64,/9j/4QKkRXhpZgAATU0AKgAAAAgACAEAAAQAAAABAAAAgAEQAAIAAAAPAAAAbgEBAAQAAAABAAA...",
      "descricao": "Lorem ipsum",
      "preco": "100,00",
      "idUsuario": 25,
      "envioEndereco": "Rua X, Cidade X, XX, Brasil CEP: 99999999",
      "envioCodigoDeRastreamento": "asdasdasd",
      "statusDeRecebimento": "Aguardando recebimento do produto."
    },
    {
      "nome": "Tenis do Alex 2",
      "marca": "Alex",
      "tamanho": "36",
      "imagem": "data:image/png;base64,/9j/4QBYRXhpZgAATU0AKgAAAAgABAEAAAQAAAABAAAAMgEBAAQAAAABAAAAKIdpAAQAAAABAAAAP...",
      "descricao": "Lorem ipsum",
      "preco": "50,00",
      "idUsuario": 25,
      "statusDeRecebimento": "Aguardando envio do produto.",
      "id": 8
    },
  ]
```
### Requisitos atendidos
- RF-02

### Artefatos da funcionalidade
Páginas:
- PostProductPage.js

Componentes:
- Header.js
- SearchBar.js
- CardProdutoRegistrado.js

Serviços:
- produtos.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Fazer login com uma conta que já tenha cadastrado algum produto;
- Clicar no icone "postar" presente no menu de navegação inferior;
- Visualizar a tela de visualizar produtos cadastrados;
- Caso deseje apagar um produto, clicar no botão "Apagar" no card do produto;
- Visualizar a tela de visualizar produtos cadastrados, agora sem o produto apagado;

## Tela de visualizar propostas de troca (RF-05)
A tela de visualizar visualizar propostas de troca permite ao usuário visualizar todas as propostas de troca que realizou ou que outros usuários realizaram para ele. Essa tela mostra uma lista de todas as propostas de troca, com cards que exibem o produto desejado e o produto ofertado, bem como as informações dos vendedores envolvidos. Caso o usuário seja o recebedor do proposta, aparecem também no card dois botões de "Aceitar" e "Recusar", nos quais ele pode clicar par aceitar ou recusar a oferta. Caso o usuário seja o proponente da oferta, uma mensagem de "Aguardando respsota do vendedor" aparece. Após o vendedor aceitar ou recusar a proposta, uma mensagem de "Proposta aceita/recusada" aparece para ambos os usuários, caso a propsota tenha sido aceita, aparecerá também um botão de "Pagar envio" e duas mensagens indicando o status de pagamento do envio pelo vendedor e pelo proponente. 

**Tela - Tela de visualizar propostas**<br>
![propostaTrocaA](https://user-images.githubusercontent.com/74699119/206264759-370edfda-19cb-4649-9d59-c5ed609d1a41.png)

**Tela - Tela de visualizar propostas - Aguardar resposta**<br>
![propostaTrocaAguardando](https://user-images.githubusercontent.com/74699119/206264988-fdf9d96e-6d68-4e92-ac3f-7c9f1e156fe8.png)

**Tela - Tela de visualizar propostas - Aceitar proposta**<br>
![propostaTrocaB](https://user-images.githubusercontent.com/74699119/206264821-09dd7815-5a69-43ff-a513-f4ee78109a51.png)
<br>
![propostaTrocaC](https://user-images.githubusercontent.com/74699119/206264839-1cdc9820-8e34-4197-8f58-f86c3cd17345.png)

**Tela - Tela de visualizar propostas - Recusar proposta**<br>
![propostaTrocaB2](https://user-images.githubusercontent.com/74699119/206264885-06c15d23-273d-45e2-bcfc-188f513b38a2.png)
<br>
![propostaTrocaC2](https://user-images.githubusercontent.com/74699119/206264897-d0b3498a-a153-4b1a-9928-4a2ef4d6e9cc.png)


Estrutura de dados:
As informações sobre as propostas cadastradas são recuperadas do JSON server e tem as informações dos produtos envolvidos (desejado e recebido) e dos usuários (vendedor e proponente) incluidas em um objeto Offer para serem exibidas na tela. As informações são recuperadas na seguinte estrutura de dados em JSON:

```
  "tradeOffers": [
        {
        "id": 49,
        "idProdutoDesejado": 1,
        "idProdutoOferecido": 27,
        "idUsuario": 25,
        "idVendedor": 1,
        "decisaoVendedor": "Aceitar",
        "vendedorPagou": true,
        "proponentePagou": false
        },
        {
        "id": 50,
        "idProdutoDesejado": 2,
        "idProdutoOferecido": 28,
        "idUsuario": 1,
        "idVendedor": 2,
        "decisaoVendedor": "Aceitar",
        "vendedorPagou": true,
        "proponentePagou": false
        },
        {
        "id": 51,
        "idProdutoDesejado": 2,
        "idProdutoOferecido": 28,
        "idUsuario": 1,
        "idVendedor": 2,
        "decisaoVendedor": "Aceitar",
        "vendedorPagou": true,
        "proponentePagou": false
        },
        {
        "id": 52,
        "idProdutoDesejado": 1,
        "idProdutoOferecido": 2,
        "idUsuario": 2,
        "idVendedor": 1,
        "decisaoVendedor": "Aceitar",
        "vendedorPagou": true,
        "proponentePagou": false
        },
        {
        "idProdutoDesejado": 6,
        "idProdutoOferecido": 1,
        "idUsuario": 1,
        "idVendedor": 6,
        "id": 53
        }
  ]
```
```
    produtos: [
    {
      "id": 1,
      "nome": "Tênis Air Jordan Cinza",
      "tamanho": 40,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAIAAACtIY/OAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 85.5,
      "marca": "Nike",
      "idUsuario": 1
    },
    {
      "id": 2,
      "nome": "Tênis Air Jordan Branco e Preto",
      "tamanho": 38,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QAA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 90,
      "marca": "Nike",
      "idUsuario": 2
    },
    {
      "id": 3,
      "nome": "Tênis Vans Amarelo",
      "tamanho": 36,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAIAAACtIY/OAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 100,
      "marca": "Vans",
      "idUsuario": 3
    },
    {
      "id": 4,
      "nome": "Tênis All Star Branco",
      "tamanho": 42,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 75,
      "marca": "Converse",
      "idUsuario": 4
    },
    {
      "id": 5,
      "nome": "Tênis Adidas Preto",
      "tamanho": 39,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 60,
      "marca": "Adidas",
      "idUsuario": 5
    },
    {
      "id": 6,
      "nome": "Tênis Puma Vermelho",
      "tamanho": 37,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlQAAAJSCAYAAAAFwVs0AAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 70,
      "marca": "Puma",
      "idUsuario": 6
    },
  ]
```

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
- RF-05

### Artefatos da funcionalidade
Páginas:
- ViewOffersPage.js

Componentes:
- Header.js

Serviços:
- trocas.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Fazer login com uma conta que já tenha cadastrado algum produto;
- Clicar no icone "postar" presente no menu de navegação inferior;
- Visualizar a tela de visualizar propostas de troca;
- Caso deseje aceitar/recusar uma proposta de troca, clicar no botão "aceitar" ou "recusar";
- Visualizar a tela de visualizar propostas de troca com as informações atualizadas;

## Tela de pagar envio do produto para troca (RF-05 e RF-07)
A tela de pagar envio do produto para troca permite ao usuário pagar a taxa de curadoria e taxa de envio relativas a troca que aceitou realizar dentro do sistema. Essa tela funciona essencialmente de forma identica à tela de compra de produto, devendo informar o endereço de envio do produto e as informações do cartão de crédito para pagamento, clicando em "Comprar" ao final do processo exceto pelo fato de que o valor do produto não é incluido por tratar-se de uma troca.

**Tela - Tela de pagar envio do produto para troca**<br>
![pagarEnvioA](https://user-images.githubusercontent.com/74699119/206267338-40858f33-6268-40e1-a8a8-8a15466d424d.png)

**Tela - Tela de pagar envio do produto para troca - Fornecer endereço diferente**<br>
![pagarEnvioB](https://user-images.githubusercontent.com/74699119/206267347-01ba9646-1cfe-4dbb-90a7-493c18fd886d.png)

**Tela - Tela de pagar envio do produto para troca - Pagamento confirmado**<br>
![pagarEnvioC](https://user-images.githubusercontent.com/74699119/206267357-ae56ebf2-a6a0-4365-b513-4b6348aecd65.png)

Estrutura de dados:

As informações sobre o produto a ser adquirido são recuperadas em formato JSON no seguinte formato:

```
    {
      "id": 1,
      "nome": "Tênis Air Jordan Cinza",
      "tamanho": 40,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAIAAACtIY/OAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 85.5,
    }
```

Recupera-se também as informações do usuário, visando obter o endereço padrão do mesmo. Essas informações são recuperadas na seguinte estrutura de dados:

```
    {
      "id": 1,
      "name": "a",
      "email": "a@a.com",
      "phone": "534543534534534",
      "firstname": "aa",
      "lastname": "aaa",
      "password": "$2a$10$mKMX9zbThmYgQiKj10erguWEm2XRLuICBsadUk2OZx5hM8w3i9Njq",
      "postalCode": 99999999,
      "publicPlace": "Rua X",
      "city": "Cidade X",
      "state": "XX",
      "country": "Brasil"
    }
```

### Requisitos atendidos
- RF-05
- RF-07

### Artefatos da funcionalidade
Páginas:
- PayOfferPage.js

Componentes:
- Header.js

Serviços:
- produtos.services.js
- auth.services.js
- trocas.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Fazer login;
- Clicar no icone "postar" presente no menu de navegação inferior;
- Visualizar a tela de visualizar propostas de troca;
- Selecionar uma troca que já foi aceita e clicar em "Pagar envio";
- Visualizar a tela de pagar envio de troca;

# Funcionalidades progamadas por Álvaro Alfaya Fonseca

Nesta seção se encontra a documentação das funcionalidades progamadas pelo membro Álvaro Alfaya Fonseca, bem como o vídeo de apresentação explicando o processo de implementação das mesmas.

## Vídeo de apresentação explicando as funcionalidades:
Vídeo de apresentação da funcionalidade do botão "Ver detalhes":<br>
https://youtu.be/cPM_4womrFQ

Atualização da funcionalidade do botão "Ver detalhes" que agora mostra os detalhes de qualquer produto selecionado na tela de busca:
https://youtu.be/_nE-XatC7vY

## Visualização do produto selecionado na tela de busca (RF-03)
A tela de visualização do produto selecionado poderá ser acessada quando o usuário selecionar um produto através do filtro na tela de busca e clicando no botão "Ver Detalhes" que estará abaixo da descrição do produto, sendo assim, ele será redirecionado para a tela de visualização do produto selecionado com os detalhes do mesmo, nome do vendedor, um botão para enviar mensagem ao vendedor, ver a tabela de numeração do tênis e terá a opção de trocar ou comprar o tênis.

**Tela - Tela de busca com o botão "Ver Detalhes" no produto selecionado**<br>
![botao-ver-detalhes](https://user-images.githubusercontent.com/91163177/198849506-164de7e4-d10f-436a-bc18-6052b17c0541.png)

**Tela - Tela de visualização do produto selecionado após clicar no botão "Ver Detalhes"**<br>
![pagina-details-product](https://user-images.githubusercontent.com/91163177/206273894-03433e30-843a-4f62-ba50-6f8b9e213960.png)

**Tela - Tela de visualização do produto selecionado após clicar no botão "Enviar Mensagem"**<br>
![enviar-mensagem](https://user-images.githubusercontent.com/91163177/206277193-67421f02-2852-43b1-a90c-2be46bd181c0.png)

**Tela - Tela de visualização do produto selecionado após clicar no botão "Ver Tabela de Numeração"**<br>
![ver-tabela-de-numeracao](https://user-images.githubusercontent.com/91163177/206277372-8eafd0e2-03af-4ae6-8c93-ce00a6b5a722.png)

Estrutura de dados:
As informações sobre o produto selecionado na tela de busca e também mostrado na tela de visualização são recuperadas em formato JSON da API fake criada pelo JSON server na seguinte estrutura:

```
    produtos: 
    {
      "id": 1,
      "nome": "Tênis Air Jordan Cinza",
      "tamanho": 40,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAIAAACtIY/OAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 85.5,
    },

```

### Requisitos atendidos
- RF-03

### Artefatos da funcionalidade
Páginas:
- ProductDetailsPage.js

Serviços:
- produtos.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar em "Buscar" no menu de navegação inferior;
- Visualizar a tela de busca de produtos;
- Inserir o texto na caixa de busca presente no topo da tela para realizar a busca;
- Caso deseje filtrar os resultados da busca pela numeração do tênis, selecionar um tamanho na caixa de seleção presente ao lado de "Filtrar por tamanho";
- Visualizar resultados da busca do produto selecionado e clicar no botão "Ver Detalhes";
- Após clicar no botão será redirecionado para a página de visualização dos detalhes do produto selecionado onde o usuário poderá trocar ou comprar o tênis, enviar mensagem ao vendedor e também ver a tabela de numeração.

# Funcionalidades progamadas por Talles Monteiro Góis

Nesta seção se encontra a documentação das funcionalidades progamadas pelo membro Talles Monteiro Góis, bem como o vídeo de apresentação explicando o processo de implementação das mesmas.

## Vídeo de apresentação explicando as funcionalidades:
https://youtu.be/oHIGnVFBRG8

## Tela de atualizar dados do usuario (RF-09)
A funcionalidade de atualizar dados do usuário pode ser acessada a partir da tela de principal clicando-se no icone de conta de usuario. A tela de atualizar dados mostra ao usuário todas informações atuais da sua conta, caso o usuário queira mudar algumas dessas informações bastar clicar no campo desejado, inserir a nova informação e clicar em confirmar.
Caso todas as informações sejam válidas e o e-mail já não esteja em uso por outro usuário, o usuário terá seus dados alterados com sucesso.

**Icone Conta de Usuário - Redireciona o usuario para tela de atualizar informações**<br>
![atualizardados1](./img/atualizardados1.png)

**Tela - Atualizar informações**<br>
![atualizardados2](./img/atualizardados2.png)

Estrutura de dados:
Os dados prenchidos no formulário de atualizar informações são enviados para o backend em formato JSON na seguinte estrutura:

    {
      "email": "igor@igor.com",
      "password": "$2a$10$T2ViWfgEYNpdihqyzqSHOu5zCjdOcaXKQblcdu8XzizsDb70BRVSu",
      "name": "igor.gois",
      "phone": "(31) 98888-6666",
      "firstname": "igor",
      "lastname": "fernandes",
    }

### Requisitos atendidos
- RF-09

### Artefatos da funcionalidade
Páginas:
- InfoUpdatePage.js

Componentes:
- Header.js

Serviços:
- auth.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar em "Fazer login" no canto direito do cabeçalho;
- Visualizar a tela de login;
- Preencher as informações solicitadas e realizar o login;
- Clicar no icone de conta de usuario no canto superior direito;
- Visualizar os dados atuais do usuário;
- Preencher informações novas que o usuario deseja alterar;
- Caso as informações sejam válidas e o e-mail já não tenha sido cadastrado anteriormente, os dados serão alterados com sucesso.

# Funcionalidades progamadas por Alex junio gomes de freitas

Nesta seção se encontra a documentação das funcionalidades progamadas pelo membro alex junio gomes de freitas

## Vídeo de apresentação explicando as funcionalidades:
https://www.youtube.com/watch?v=4kGNdTdvBXE

## tela de HomePage
A tela de Homepage e a tela inicial do app onde ficara disponivel para o usario alguns dos produtos disponiveis no app para a compra e troca, onde o usuario pderar selicionar uns do tenis e ira ser redirecionado para a pagina do produto

**Tela homepage**<br>
![atualizardados1](./img/tela-home.png)


Estrutura de dados: 
As informações sobre o produto selecionado na tela HomePage são recuperadas em formato JSON da API fake criada pelo JSON server na seguinte estrutura:
```
   produtos: 
    {
      "id": 1,
      "nome": "Tênis Air Jordan Cinza",
      "tamanho": 40,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAIAAACtIY/OAAAAAXNSR0IArs4c6QA...",
      "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 85.5,
    },

```

### Requisitos atendidos
- Nossa tela homepage nao se encaixa em nenhum requisito, sendo somente uma tela

### Artefatos da funcionalidade
Páginas:
- HomePage.js

Componentes:
- Header.js
- cardProduto.js
- produtos.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar em no produto desejado;
- sera encaminhado para a page do produto desejado;

# Funcionalidades progamadas por Denio Gonçalves de Lima

Nesta seção se encontra a documentação das funcionalidades progamadas pelo membro Denio Gonçalves de Lima

## Vídeo de apresentação explicando as funcionalidades:


## tela de numeração 
A tela de numeração e a tela onde ficara disponivel a numeração disponivel dos tênis para o usuario avaliar qual sera a sua.

**Tela de numeração**<br>
![atualizardados1](./img/Tela-numeracao.jpeg)


### Requisitos atendidos
- Nessa tela nao se encaixa em nenhum requisito, sendo somente uma tela de numeração.

### Artefatos da funcionalidade
Página:
- ShoeNumbering.js

Componentes:
- Header.js

# Funcionalidades progamadas por Mychel Costa da Silva

Nesta seção se encontra a documentação das funcionalidades progamadas pelo membro Mychel Costa da Silva

## Vídeo de apresentação explicando as funcionalidades:
_

## Tela de formulário de envio para curadoria (RF-06)
A tela pode ser acessada ao clicar na opção "Preencher dados de envio" no card do produto desejando na tela da aba "Postar". Ao entrar nesta tela, o usuário poderá usar um endereço já cadastrado em sua conta ou informar um novo endereço, importante para confirmar os dados do remetente. Ele também deverá cadastrar o código de rastreio do pacote com o tênis que foi enviando para a curadoria no campo espeficicado. Depois de preencher o formulário, o usuário irá clicar em "Confirmar" para que o seu tênis seja cadastrado para a curadoria.

**Formulário de envio para curadoria (1/4)**  
  
![Formulário de envio para curadoria](https://user-images.githubusercontent.com/91169665/206067502-a92c7c51-ba68-4233-a74c-18ed7819d0e1.png)
  
**Formulário de envio para curadoria: Informar outro endereço (2/4)**  
  
![Formulário de envio para curadoria: Informar outro endereço](https://user-images.githubusercontent.com/91169665/206067569-57cf120d-e84b-4469-a69d-df83d0e76773.png)
  
**Formulário de envio para curadoria: Informações preenchidas (3/4)**  
  
![Formulário de envio para curadoria: Informações preenchidas](https://user-images.githubusercontent.com/91169665/206067599-d597872e-e858-4e97-bbdb-c3205444a600.png)
  
**Tênis cadastro para curadoria com sucesso (4/4)**  
  
![Tênis cadastro para curadoria com sucesso](https://user-images.githubusercontent.com/91169665/206067657-833fed88-bde7-4399-9d83-0661e7026299.png)
  
**Estrutura de dados:**  
  
As informações do produto que está sendo enviado são recuperadas do backend simulado em JSON Server com a seguinte estrutura de dados:

```
    {
      "id": 5,
      "nome": "Tênis Adidas Preto",
      "tamanho": 39,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QAAAARnQU1...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 60,
      "marca": "Adidas",
      "idUsuario": 5
    }
```

As informações do usuário também são recuperadas para obter o endereço padrão do mesmo. Essas informações são recuperadas na seguinte estrutura de dados:

```
    {
      "id": 1,
      "name": "a",
      "email": "a@a.com",
      "phone": "534543534534534",
      "firstname": "aa",
      "lastname": "aaa",
      "password": "$2a$10$mKMX9zbThmYgQiKj10erguWEm2XRLuICBsadUk2OZx5hM8w3i9Njq",
      "postalCode": 99999999,
      "publicPlace": "Rua X",
      "city": "Cidade X",
      "state": "XX",
      "country": "Brasil"
    }
```

Após confirmar o cadastro, as informações relativas ao produto que está sendo enviado são atualizadas no backend sob a seguinte estrutura de dados:
```
    {
      "id": 5,
      "nome": "Tênis Adidas Preto",
      "marca": "Adidas",
      "tamanho": 39,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QAAAARnQU1...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 60,
      "idUsuario": 5,
      "envioEndereco": "Rua B, Sao Paulo, SP, Brasil CEP: 54321000",
      "envioCodigoDeRastreamento": "BR123456789"
    }
```

### Requisitos atendidos
- RF-06

### Artefatos da funcionalidade
Páginas:  
- SendProductPage.js

Componentes:  
- Header.js

Serviços:  
- auth.services.js
- produtos.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar em "Postar" no menu de navegação inferior;
- Visualizar a tela de cadastro de produtos;
- Selecionar o produto desejado e clicar no botão "Preencher dados de envio";
- Visualizar tela de formulário de envio para curadoria;
- Preencher os dados solicitados e clicar em "Confirmar" para finalizar o cadastro;
- Visualizar homepage e a mensagem de "Tênis cadastro para curadoria com sucesso!"
