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
  
  <table> 
<tr><th>Caso de Teste </th>
<th>CT-06 – Realizar troca de mensagens com outro usuário na plataforma</th></tr>
<tr><th>Objetivo do teste</th>
  <th>•	Verificar a usabilidade da funcionalidade de troca de mensagens entre usuários na plataforma</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - Dois usuários realizam login na plataforma conforme descrito no CT-02.<br>
 2- O primeiro usuário clica no icone de conversas presente no canto esquerdo do cabeçalho.<br>
 3- O primeiro usuário clica em "Nova conversa" e seleciona o segundo usuário na lista.<br>
 4- O primeiro usuário escreve sua mensagem e clica no botão "Enviar".<br>
 5- O segundo usuário clica no icone de conversas presente no canto esquerdo do cabeçalho.<br>
 6- O segundo usuário visualiza a conversa recém criada entre ele e o primeiro usuário e clica nela.<br>
 7- O segundo usuário visualiza a mensagem recebida e responde com outra mensagem.<br>
 8- O primeiro usuário recebe a mensagem do segundo usuário.</th></tr>
<tr><th>Critérios de Êxito</th>	
  <th>•	Usuários devem ser capazes de iniciar uma nova conversa e trocar mensagens entre si.</th></tr>
  </table>

 <table> 
<tr><th>Caso de Teste </th>
<th>CT-07 – Atualizar informações do usuário</th></tr>
<tr><th>Objetivo do teste</th>
  <th>•	Verificar a funcionalidade de atualização de dados do usuário</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - O usuário realizam logi na plataforma conforme descrito no CT-02.<br>
 2- O usuário clica no icone de conta de usuário presente no canto superior direito do cabeçalho.<br>
 3- O usuário preenche os campos que ele deseja alterar.<br>
 4- O usuário clica no botão "Confirmar".<br>
<tr><th>Critérios de Êxito</th>	
  <th>•	Após preencher todos os dados e clicar em confirmar os dados deverão ser alterados no banco de dados (db.json). <br>• A aplicação deve permitir que usuário faça o proximo login usando o novo e-mail e nova senha caso o usuário tenha alterado essas informações também.</th></tr>
  </table>
  
   <table> 
<tr><th>Caso de Teste </th>
<th>CT 08 - Realizar compra de produto</th></tr>
<tr><th>Objetivo do teste</th>
  <th>•	Verificar a funcionalidade de compra de produtos pelo usuário.</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - O usuário realiza login na plataforma conforme descrito no CT-02.<br>
 2- O usuário seleciona o produto que deseja comprar, seja nas sugestões de produto da homepage ou buscando o produto na tela de busca conforme descrito no CT-03.<br>
 3- O usuário clica em "mais detalhes" no card do produto em questão e é redirecionado para a tela de detalhes do produto.<br>
 4- O usuário clica no botão "Comprar" e é redirecionado para a tela de comprar produto.<br>
 5- O usuário preenche os dados solicitados e clica em "Comprar"<br>
 6- O usuário visualiza a mensagem de "Pagamento efetuado com sucesso!".
<tr><th>Critérios de Êxito</th>	
  <th>•	O usuário deverá ser capaz de realizar o processo de compra do produto desejado, obtendo uma mensagem de "Pagamento efetuado com sucesso!" ao fim do processo.</th></tr>
  </table>
     
<table> 
<tr><th>Caso de Teste </th>
<th>CT-09 – Visualizar histórico de pedidos</th></tr>
<tr><th>Objetivo do teste</th>
  <th>•	Verificar a funcionalidade de visualização do histórico de pedidos pelo usuário.</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - O usuário realiza login na plataforma conforme descrito no CT-02.<br>
 2- O usuário clica no icone de "pedidos" presente no menu de navegação inferior.<br>
 3- O usuário visualiza os pedidos realizados anteriormente por ele.
<tr><th>Critérios de Êxito</th>	
  <th>•	O usuário deverá alcançar a página de histórico de pedidos e visualizar todos os pedidos realizados anteriormente por ele.</th></tr>
  </table>

 <table> 
<tr><th>Caso de Teste </th>
<th>CT-10 – Visualizar histórico de acesso do usuário</th></tr>
<tr><th>Objetivo do teste</th>
  <th>•	Verificar a funcionalidade de visualização do histórico de acesso da aplicação naquele aparelho.</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - O usuário realiza login na plataforma conforme descrito no CT-02.<br>
 2- O usuário clica no icone de "usuário" presente no canto direito do cabeçalho (onde a opção "Fazer login" estava antes do login).<br>
 3- O usuário visualiza a tela de opções da conta.<br>
 4- O usuário clica em "Histórico de acesso".<br>
 5- O usuário visualiza seu histórico de acesso na aplicação.
<tr><th>Critérios de Êxito</th>	
  <th>•	O usuário deverá alcançar a página de histórico de acesso e visualizar os logins realizados anteriormente no aplicativo naquele aparelho (incluindo o realizado durante esse teste).</th></tr>
  </table>

  <table> 
<tr><th>Caso de Teste </th>
<th>CT 11 - Visualizar produtos cadastrados pelo usuário</th></tr>
<tr><th>Objetivo do teste</th>
  <th>•	Verificar a funcionalidade de visualizar produtos cadastrados pelo usuário.</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - O usuário realiza login na plataforma conforme descrito no CT-02.<br>
 2- O usuário clica no icone de "postar", presente no menu de navegação inferior.<br>
 3- O usuário visualiza a tela de produtos cadastrados.
<tr><th>Critérios de Êxito</th>	
  <th>•	O usuário deverá alcançar a página de visualizar produtos cadastrados, sendo capaz de visualizar todos os produtos cadastrados por aquela conta.</th></tr>
  </table>

  <table> 
<tr><th>Caso de Teste </th>
<th>CT 12 - Apagar produto cadastrado pelo usuário</th></tr>
<tr><th>Objetivo do teste</th>
  <th>•	Verificar a funcionalidade de apagar produtos cadastrados pelo usuário.</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - O usuário realiza login na plataforma conforme descrito no CT-02.<br>
 2- O usuário clica no icone de "postar", presente no menu de navegação inferior.<br>
 3- O usuário visualiza a tela de produtos cadastrados.<br>
 4- O usuário seleciona um produto e clica no botão "Apagar".<br>
 5- O usuário visualiza novamente a tela de produtos cadastrados, dessa vez sem o produto apagado.
<tr><th>Critérios de Êxito</th>	
  <th>•	O usuário deverá alcançar a página de visualizar produtos cadastrados e ser capaz de apagar os produtos que desejar nela, visualizando a tela sem o produto após ela ser atualizada.</th></tr>
  </table>

  <table> 
<tr><th>Caso de Teste </th>
<th>CT 13 - Visualizar proposta de troca</th></tr>
<tr><th>Objetivo do teste</th>
  <th>•	Verificar a funcionalidade de visualizar propostas de troca no sistema.</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - O usuário realiza login na plataforma conforme descrito no CT-02.<br>
 2- O usuário acessa a tela de visualizar produtos cadastrados conforme descrito no CT-11.<br>
 3- O usuário visualiza a tela de propostas de troca
<tr><th>Critérios de Êxito</th>	
  <th>•	O usuário deverá alcançar a página de visualizar propostas de troca.</th></tr>
  </table>
    
  <table> 
<tr><th>Caso de Teste </th>
<th>CT 14 - Aceitar proposta de troca</th></tr>
<tr><th>Objetivo do teste</th>
  <th>• Verificar a funcionalidade de visualizar e aceitar propostas de troca no sistema.</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - O usuário realiza login na plataforma conforme descrito no CT-02.<br>
 2- O usuário acessa a tela de visualizar propostas de troca conforme descrito no CT-13.<br>
 3- O usuário seleciona a proposta de troca que deseja aceitar e clica em "Aceitar".
<tr><th>Critérios de Êxito</th>	
  <th>•	O usuário deverá alcançar a página de visualizar propostas de troca e aceitar a proposta de troca que desejar.</th></tr>
  </table>

   <table> 
<tr><th>Caso de Teste </th>
<th>CT 15 - Recusar proposta de troca</th></tr>
<tr><th>Objetivo do teste</th>
  <th>• Verificar a funcionalidade de visualizar e recusar propostas de troca no sistema.</th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - O usuário realiza login na plataforma conforme descrito no CT-02.<br>
 2- O usuário acessa a tela de visualizar propostas de troca conforme descrito no CT-13.<br>
 3- O usuário seleciona a proposta de troca que deseja recusar e clica em "Recusar".
<tr><th>Critérios de Êxito</th>	
  <th>•	O usuário deverá alcançar a página de visualizar propostas de troca e recusar a proposta de troca que desejar.</th></tr>
  </table>
     
     <table> 
<tr><th>Caso de Teste </th>
<th>CT 16 - Pagar taxa de envio e curadoria para uma proposta de troca aceita</th></tr>
<tr><th>Objetivo do teste</th>
  <th>• 	Verificar a funcionalidade de pagar taxa de envio e curadoria para uma proposta de troca aceita no snack. </th></tr>
<tr><th>Ações esperadas</th>
  <th>1 - O usuário realiza login na plataforma conforme descrito no CT-02.<br>
 2- O usuário acessa a tela de visualizar propostas de troca conforme descrito no CT-13.<br>
 3- O usuário seleciona uma proposta de troca já aceita pelo vendedor e clica em "pagar envio".<br>
 4- O usuário visualiza a tela de pagar taxa de envio e curadoria.<br>
 5- O usuário preenche as informações solicitadas e clica em "Comprar".<br>
 6- O usuário visualiza a mensagem de sucesso.
<tr><th>Critérios de Êxito</th>	
  <th>•	O usuário deverá ser capaz de realizar o pagamento da taxa de envio e curadoria para a troca em questão e obtem uma mensagem de sucesso ao fim do processo.</th></tr>
  </table>
    
