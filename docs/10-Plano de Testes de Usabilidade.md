# Plano de Testes de Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

Os testes de usabilidade serão realizados com pessoas de fora da equipe supervisionadas por membros da equipe, adotando-se o modelo de descoberta de problemas. Os usuários selecionados serão instruidos a realizar tarfeas relacionadas a funcionalidades do sistema e observados pelos membros da equipe sem ajuda dos mesmos. Os supervisores observarão o uso do sistema pelos usuários e farão anotações sobre possíveis dificuldades que estes venham a ter no uso. Após finalizados os testes, os supervisores perguntarão também sobre possíveis sugestões dos usuários sobre melhorias na usabilidade do sistema. Os resultados de cada teste serão descritos na seção de "Registros de Testes de Usabilidade" presente neste repositório.

As tabelas abaixo demonstram cada caso de teste:

<table> 
<tr><th>Caso de Teste </th>
<th>CT-01 – Realizar cadastro na plataforma</th></tr>
<tr><th>Objetivo do teste</th>
  <th>•	Verificar a usabilidade da funcionalidade de cadastro na plataforma</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - Usuário visualiza a homepage da aplicação.<br>
 2- Usuário clica na opção de "Fazer login" presente no cabeçalho.<br>
 3– Usuário visualiza a tela de login e clica no botão "Registrar-se".<br>
 4- Usuário preenche todos os campos solicitados para o registro e clica em "Confirmar".<br>
 5- Usuário visualiza o alerta de "Usuário cadastrado com sucesso!" e clica em "Ok".<br>
 6- Usuário é redirecionado para a tela de login.</th></tr>
<tr><th>Critérios de Êxito</th>	
  <th>•	Usuário deve ser capaz de realizar o cadastro na plataforma.</th></tr>
  </table>

<table> 
<tr><th>Caso de Teste </th>
<th>CT-02 – Realizar login na plataforma com a conta préviamente cadastrada</th></tr>
<tr><th>Objetivo do teste</th>
  <th>•	Verificar a usabilidade da funcionalidade de login na plataforma</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - Usuário visualiza a homepage da aplicação.<br>
 2- Usuário clica na opção de "Fazer login" presente no cabeçalho.<br>
 3– Usuário informa o email e senha usados préviamente cadastrados e clica em "Entrar".<br>
 4- Usuário preenche todos os campos solicitados para o registro e clica em "Confirmar".<br>
 5- Usuário realiza login no sistema e é redirecionado para a homepage.</th></tr>
<tr><th>Critérios de Êxito</th>	
  <th>•	Usuário deve ser capaz de realizar o login na plataforma utilizando a conta préviamente cadastrada.</th></tr>
  </table>

<table> 
<tr><th>Caso de Teste </th>
<th>CT-03 – Realizar busca de produtos na plataforma</th></tr>
<tr><th>Objetivo do teste</th>
  <th>•	Verificar a usabilidade da funcionalidade de busca de produtos na plataforma</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - Usuário visualiza a homepage da aplicação.<br>
 2- Usuário clica na opção de "Buscar" presente no menu de navegação inferior.<br>
 3– Usuário visualiza tela de busca.<br>
 4- Usuário clica na caixa de busca presente na tela e digita as palavras chave que deseja buscar.<br>
 5- Usuário clica no icone da lupa presente na caixa de busca e espera o carregamento e visualização dos resultados da busca.</th></tr>
<tr><th>Critérios de Êxito</th>	
  <th>•	Usuário deve ser capaz de visualizar os produtos resultantes de sua busca na tela de busca de produtos.</th></tr>
  </table>

<table> 
<tr><th>Caso de Teste </th>
<th>CT-04 – Filtrar resultados da busca de produto por tamanho do tênis</th></tr>
<tr><th>Objetivo do teste</th>
  <th>•	Verificar a usabilidade da funcionalidade de filtrar busca de produtos por tamanho do tênis na plataforma</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - Usuário realiza a busca de produtos conforme descrito no CT-04.<br>
 2- Usuário clica na caixa de "Filtrar por tamanho" e seleciona o tamanho de tênis que deseja.<br>
 3– Usuário visualiza resultados da busca filtrados por tamanho do tênis.</th></tr>
<tr><th>Critérios de Êxito</th>	
  <th>•	Usuário deve ser capaz de visualizar os produtos resultantes de sua busca na tela de busca de produtos, desta vez filtrados pelo tamanho do tênis.</th></tr>
  </table>

<table> 
<tr><th>Caso de Teste </th>
<th>CT-05 – Visualizar detalhes do produto selecionado na tela de busca</th></tr>
<tr><th>Objetivo do teste</th>
  <th>•	Verificar a usabilidade da funcionalidade de após filtrar um produto na tela busca de produtos, clicar no botão "ver detalhes" e ser redirecionado para a página de visualização do produto</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - Usuário realiza a busca de produtos conforme descrito no CT-04.<br>
 2- Usuário clica na caixa de "Filtrar por tamanho" e seleciona o tamanho de tênis que deseja.<br>
 3– Usuário visualiza resultados da busca e clica no botão "ver detalhes" e é redirecionado para a página de visualização do produto.</th></tr>
<tr><th>Critérios de Êxito</th>	
  <th>•	Usuário deve ser capaz de visualizar os detalhes do produto selecionado na tela de busca de produtos após clicar no botão "ver detalhes" e ser redirecionado a página de visualizar o produto.</th></tr>
  </table>
