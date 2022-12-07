# Trade sneakers

`ANÁLISE E DESENVOLVIMENTO DE SISTEMAS`

`Desenvolvimento de uma Aplicação Móvel em um Ambiente de Negócio`

`TERCEIRO SEMESTRE`

Nosso projeto chama-se <b>Trade sneakers</b>. É um app com o intuito facilitar e inovar  a experienciado usuário na troca de seus tênis,gerando economia e de quebra ainda ajuda contra a degradação do meio ambiente.
Nosso foco será proporcionar aos usuários uma maneira de trocarem seus tênis 
de forma segura, rápida e fácil,fazendo um bom ambiente de interação.

## Integrantes

* Alex Junio
* Álvaro Alfaya Fonseca
* Denio Gonçalves de Lima
* Hestefani Romão Durães
* Mychel Costa da Silva
* Sérgio Luiz De Menezes Filho
* Talles Monteiro Góis

## Orientador

* Will Ricardo Dos Santos Machado

## Instruções de utilização

Como o backend do projeto agora encontra-se hospedado no endereço https://tradesneakers-backend.glitch.me, a instalação local da aplicação não é necessária, podendo-se apenas acessar o frontend no link https://snack.expo.dev/@sergiomenezes/tradesneakers. Como as aplicações hospedadas no Glitch ficam inativas caso fiquem muito tempo sem serem acessadas, é interessante visitar o link https://tradesneakers-backend.glitch.me.com antes de rodar a aplicação para reativa-la.

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

# Documentação

<ol>
<li><a href="docs/01-Documentação de Contexto.md"> Documentação de Contexto</a></li>
<li><a href="docs/02-Especificação do Projeto.md"> Especificação do Projeto</a></li>
<li><a href="docs/03-Metodologia.md"> Metodologia</a></li>
<li><a href="docs/04-Projeto de Interface.md"> Projeto de Interface</a></li>
<li><a href="docs/05-Arquitetura da Solução.md"> Arquitetura da Solução</a></li>
<li><a href="docs/06-Template Padrão da Aplicação.md"> Template Padrão da Aplicação</a></li>
<li><a href="docs/07-Programação de Funcionalidades.md"> Programação de Funcionalidades</a></li>
<li><a href="docs/08-Plano de Testes de Software.md"> Plano de Testes de Software</a></li>
<li><a href="docs/09-Registro de Testes de Software.md"> Registro de Testes de Software</a></li>
<li><a href="docs/10-Plano de Testes de Usabilidade.md"> Plano de Testes de Usabilidade</a></li>
<li><a href="docs/11-Registro de Testes de Usabilidade.md"> Registro de Testes de Usabilidade</a></li>
<li><a href="docs/12-Apresentação do Projeto.md"> Apresentação do Projeto</a></li>
<li><a href="docs/13-Referências.md"> Referências</a></li>
</ol>

# Código

<li><a href="src/README.md"> Código Fonte</a></li>

# Apresentação

<li><a href="presentation/README.md"> Apresentação da solução</a></li>
