# Instruções de utilização

## Instalação do Site

Como o backend do projeto agora encontra-se hospedado no endereço https://tradesneakers-backend.glitch.me, a instalação local da aplicação não é necessária, podendo-se apenas acessar o frontend no link https://snack.expo.dev/@sergiomenezes/tradesneakers. Como as aplicações hospedadas no Glitch ficam inativas caso fiquem muito tempo sem serem acessadas, é interessante visitar o link https://tradesneakers-backend.glitch.me antes de rodar a aplicação para reativa-la.

* Observação importante: Como o aplicativo utiliza o expo-sqlite, que não é compatível com a plataforma Web do React Native, a aplicação presente em https://snack.expo.dev/@sergiomenezes/tradesneakers pode ser rodada apenas nos emuladores de Android/IoS ou em dispositivos físicos contendo o sistema operacional Android ou IoS, mas não na versão Web (um erro de "Access to WebDatabase API is denied in third party contexts" ocorre caso tente-se rodar a aplicação na opção "Web").

Caso deseje rodar o backend da aplicação localmente, seguir os seguintes passos:

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


## Histórico de versões

### [0.1.0] - 06/10/2022
#### Adicionado
- Implementação parcial das primeiras funcionalidades correspondentes aos RFs 01 e 03 (Cadastro, Login e Busca de produtos).
- Backend ainda não hospedado na internet, frontend pode ser acessado através do Snack em https://snack.expo.dev/@sergiomenezes/tradesneakers.

### [0.1.1] - 30/10/2022
#### Adicionado
- Implementação parcial das funcionalidades relativas a troca de mensagens, visualização de detalhes do produto, atualização de informações cadastrais e tabela de numeração (RFs 04, 03, 09 e 08), além da implementação parcial da homepage.
- Backend ainda não hospedado na internet, frontend pode ser acessado através do Snack em https://snack.expo.dev/@sergiomenezes/tradesneakers.

### [0.1.2] - 27/11/2022
#### Adicionado
- Implementação das funcionalidades de compra de produto, histórico de pedidos e histórico de acesso (RFs 05 e 07, 05 e 01), além do avanço da implementação da tela de visualização de detalhes do produto (RF 03) e da homepage.
- Backend agora encontra-se hospedado no endereço https://trade-sneakers-backend.herokuapp.com, não sendo mais necessário rodar o backend localmente.

### [0.1.3] - 7/12/2022
#### Adicionado
- Implementação das funcionalidades de cadastro de produto, apagar produto cadastrado, preenchimento das informações de envio do produto, criação de proposta de troca de produto, gerenciamento de propostas de troca e pagamento da taxa de curadoria e envio para trocas (RF 02, RF 02, RF 06, RF 05, RF 05 e RF 07), além da atualização da página de detalhes de produto e da exibição da tela de numeração de calçados (RF 03 e RF 08).
- Backend agora encontra-se hospedado no endereço https://tradesneakers-backend.glitch.me/, devido ao fato de que a hospedagem no Heroku deixou de ser gratuita.
