# Plano de Testes de Software
Os requisitos para realização dos testes de software são:

Antes da hospedagem do backend.
- Visual Studio 2022 instalado para rodar o backend em JSON server de forma local;
- Localtunnel instalado para expor a porta do backend para a internet;
- Navegador da internet - Chrome, Firefox ou Edge, para acessar a aplicação no Snack.

Após hospedagem do backend ser realizada.
- Backend publicado na internet;
- Navegador da internet - Chrome, Firefox ou Edge;
- Conectividade de internet para acessar a aplicação no Snack.

Por meio do plano de testes serão validados os requisitos para garantir o funcionamento adequado do programa. Permitindo garantir a confiabilidade e segurança do software e identificando erros e falhas durante o desenvolvimento.
 
### Casos de Testes
Os testes funcionais a serem realizados na solução estão descritos a seguir:

|Caso de teste 01     | CT 01 - Registrar conta de usuário |
|-------|-------------------------
|Requisitos Associados | RF-01: Disponibilizar um sistema de login e autenticação, onde o usuário poderá criar uma conta com dados válidos e realizar login.
|Objetivo do teste| Verificar a funcionalidade de registro de novos usuários no sistema. |
|Passos |	1) Caso o backend ainda não esteja hospedado, rodar o backend da aplicação no VS Code e expor via URL com o localtunnel conforme as instruções de utilização. 1) Acessar o navegador. 2) Informar a URL do projeto do Snack. 3) Rodar o projeto no emulador de Android, IoS ou em um aparelho celular através do Expo Go através do QR Code disponibilizado no Snack. 4) Clicar na mensagem de "Fazer login" presente no canto direito do cabeçalho. 5) Visualizar tela de login. 6) Clicar no botão "Criar nova conta". 7) Preencher os campos cadastrados e clicar em "Cadastrar" 8) Caso todos os campos tenham sido preenchidos de forma apropriada, o sistema deve retornar uma mensagem de "Usuário cadastrado com sucesso" e redirecionar para a tela de login. |
|Critérios de êxito| - O usuário deverá ser capaz de criar uma nova conta caso preencha todos os campos apropriadamente.<br>- O sistema deverá retornar uma mensagem de erro caso o usuário preencha algum campo de maneira errada (não colocar nome de usuário, inserir um endereço de email com formatação indevida, inserir uma senha com menos de 4 caracteres ou inserir valores diferentes no campo "senha" e "repetir senha".<br>- O sistema deverá retornar uma mensagem de "e-mail já cadastrado" caso o usuário tente cadastrar uma conta com um e-mail que já foi cadastrado. |

|Caso de teste 02     | CT 02 - Realizar login na plataforma |
|-------|-------------------------
|Requisitos Associados | RF-01: Disponibilizar um sistema de login e autenticação, onde o usuário poderá criar uma conta com dados válidos e realizar login.
|Objetivo do teste| Verificar a funcionalidade de login e autenticação do sistema. |
|Passos |	1) Caso o backend ainda não esteja hospedado, rodar o backend da aplicação no VS Code e expor via URL com o localtunnel conforme as instruções de utilização. 1) Acessar o navegador. 2) Informar a URL do projeto do Snack. 3) Rodar o projeto no emulador de Android, IoS ou em um aparelho celular através do Expo Go através do QR Code disponibilizado no Snack. 4) Clicar na mensagem de "Fazer login" presente no canto direito do cabeçalho. 5) Visualizar tela de login. 6) Informar o e-mail e senha e clicar em "login". 7) Caso as informações fornecidas estejam corretas, o sistema deverá realizar o login e redirecionar o usuário para a tela anterior, o nome do usuário logado deverá agora aparecer no canto superior direito do cabeçalho aonde a mensagem de "Fazer login" costumava estar. |
|Critérios de êxito| - O sistema deverá realizar o login do usuário caso os dados informados estejam corretos.<br>- Uma mensagem com o nome de usuário logado deverá aparecer no canto superior direito do cabeçalho após o login bem sucedido.<br>- O sistema deverá retornar uma mensagem de erro caso o usuário informe dados incorretos durante o login. |
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
