
# Metodologia

Encontra-se descrita nesta seção a metodologia de trabalho adotada pelo grupo no desenvolvimento da solução. As seções presentes abaixo descrevem os ambientes de trabalhos utilizados pela equipe, além da estrutura utilizada para gestão do código fonte e a definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times).

## Relação de Ambientes de Trabalho

As alternativas do projeto são elaboradas a partir de diversas plataformas e a relação dos ambientes com seu propósito a respeito é apresentada conforme a tabela:

Ambiente|Plataforma|Link de Acesso
|:--------|:----------:|:-------------:|
|Repositório de código fonte|GitHub| [GitHub](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t1-time2_tradesneakers)|
|Documentos do Projeto|GitHub (docs/)|[Projeto Tradesneakers](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t1-time2_tradesneakers/tree/main/docs)|
|Criação de Diagramas| Figma, Lucidchart | [figma.com](https://www.figma.com/file/cOspOpPO836PiuVPmz1Qoy/Diagrama-de-Fluxo?node-id=0%3A1), [lucid.app](https://lucid.app/lucidchart/1d503f68-7142-471c-ad32-1c52bbc2a96e/edit?viewport_loc=-255%2C-118%2C5211%2C2535%2CUJ9R_lgPRyr9&invitationId=inv_38747e0a-3e2b-4a51-8178-ee6e51f13cf8#), [lucid.app](https://lucid.app/lucidchart/bf915dfa-c6eb-47d7-960a-5beeb6a6c3d6/edit?invitationId=inv_d993440a-48f2-4d67-91cd-b3923b651223&page=0_0#) |
|Projeto de Interface e Wireframes| Figma | [Figma](https://www.figma.com/proto/DsketTFONtcTTb3mKTRZzn/Wireframes )|
|Gerenciamento do Projeto| Trello |[Trello](https://trello.com/b/FFDjL827/trade-sneakers)|

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `b/`: resolução de bugs (bug fix)
- `f/`: implementações de novas funcionalidades (feature)
- `d/`: desenvolvimento de documentações

As branches deverão utilizar os prefixos sitados acima e a seguinte convenção para especificação do nome:
- [prefixo] + nome-da-tarefa
    * Exemplo: `d/controle-de-versão`

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `testing`: teste de implementações
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Utilizaremos a criação de `Pull Requests` para mantermos historico do nosso processo de desenvolvimento. Trazendo assim, confiabilidade ao subir nossas features para a branch `main` que será nosso ambiente de `produção`. Esta convenção trará mais segurança ao nosso ambiente de produção, uma vez que as pull requests terão que ser aprovadas por pelo menos um integrante do grupo.

## Gerenciamento de Projeto

### Divisão de Papéis

Divisão de papéis entre os membros do grupo.

- Scrum Master: Sérgio Luiz De Menezes Filho;
- Product Owner: Hestefani Romão Durães;
- Equipe de Desenvolvimento: Alex Junio, Álvaro Alfaya Fonseca, Denio Gonçalves de Lima, Mychel Costa da Silva, Talles Monteiro Góis;
- Equipe de Design: Alex Junio, Álvaro Alfaya Fonseca, Talles Monteiro Góis.

### Processo

Para dividir nossos processos vamos utilizar a metodologia Scrum. Nossas sprints tem uma semana sendo a divisão das tarefas feitas na Terça-feira e baseada na entrega semanal ao cliente que deve ser feita geralmente na Segunda-feira às 18:00hs.

Ao início de cada Sprint (possuindo geralmente duração de 1 semana), o grupo se reúne para definir quais tarefas serão realizadas, selecionando-as do Backlog do produto presente no quadro Kanban Trello (mostrado na figura abaixo). Após definir quais membros serão responsáveis por quais tarefas naquela Sprint, os itens selecionados são associados aos membros da equipe responsáveis por eles e movidos para a aba "To Do" do Kanban, correspondente à backlog da Sprint.

As tarefas, que são criadas como issues, devem estar devidamente descritas com todas as informações necessárias e com as etiquetas corretas.

Dentre as etiquetas temos:

- `documentation`: melhorias ou acréscimos à documentação
- `testing`: teste de implementações
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

#### Desenvolvimento

Ao iniciar uma tarefa, cada colaborador deve selecionar a tarefa em questão na aba "To Do" e movê-la para a aba "Doing".

O desenvolvedor deve verificar se ele tem todas as informações e ferramentas necessárias para realizar a tarefa, assim como deve verificar se não há nenhuma coisa que impeça sua realização.

Caso a tarefa seja de código, o desenvolvedor deve criar um branch para a tarefa e, quando finalizada e devidamente testada, solicitar que um colega revise.

#### Revisão
Quando a tarefa estiver completa, ela deve ser movida para a aba de review. Caso a tarefa precise ser testada então o responsável deve move-la para a aba testing, neste caso quem estiver responsável por revisar e testar deve, realizar testes, conferir se o código esta dentro do padrão e verificar se a tarefa foi de fato resolvida.

Caso seja encontrado algum problema, o revisor deve retornar com a tarefa para a aba Doing, comunicar ao desenvolvedor e solicitar a correção.

#### Finalização
Quando pronto, o revisor tem a função de fechar a issue, mergear o branch criado com o branch estável e mover a tarefa para aba Done.

![Processo 1](img/trello.jpeg)

### Ferramentas

As ferramentas empregadas no projeto são:

- Ferramenta de Comunicação.
- Repositório.
- Editor de código.
- Ferramenta de criação de Diagramas.
- Ferramenta de criação Interface e Wireframes.
- Ferramenta de gerenciamento do Projeto e Tarefas.

|Função    | Plataforma  | Link de Acesso |
|------|-----------------------------------------|----|
| Ferramenta de comunicação | Microsoft Teams| [teams.microsoft.com](https://teams.microsoft.com/)|
| Repositório | Github | [Projeto Tradesneakers](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t1-time2_tradesneakers/blob/main/README.md) |
| Editor de código | Expo Snack | [snack.expo.dev](https://snack.expo.dev/@sergiomenezes/tradesneakers)|
| Ferramenta de criação de Diagramas | Figma | [figma.com](https://www.figma.com/file/cOspOpPO836PiuVPmz1Qoy/Diagrama-de-Fluxo?node-id=0%3A1)|
| Ferramenta de criação Modelagem Processo de Negócios | LucidChart | [lucidchart.com](https://lucid.app/lucidchart/5130d6b9-41bb-48d6-87ec-5241f9bc1e4b/edit?invitationId=inv_10e21f06-ed1e-434c-b449-d38a1faef097&page=VjMd39PQffTe#)|
| Ferramenta de criação Interface e Wireframes | Figma, Lucidchart | [figma.com](https://www.figma.com/file/cOspOpPO836PiuVPmz1Qoy/Diagrama-de-Fluxo?node-id=0%3A1), [lucid.app](https://lucid.app/lucidchart/1d503f68-7142-471c-ad32-1c52bbc2a96e/edit?viewport_loc=-255%2C-118%2C5211%2C2535%2CUJ9R_lgPRyr9&invitationId=inv_38747e0a-3e2b-4a51-8178-ee6e51f13cf8#), [lucid.app](https://lucid.app/lucidchart/bf915dfa-c6eb-47d7-960a-5beeb6a6c3d6/edit?invitationId=inv_d993440a-48f2-4d67-91cd-b3923b651223&page=0_0#) |
| Ferramenta de gerenciamento do Projeto | Trello |[Trello](https://trello.com/b/FFDjL827/trade-sneakers)|

<br>

Com o intuito de economizar tempo e evitar o uso de múltiplas ferramentas com a mesma função, o grupo deu preferência para o uso das ferramentas já usadas e sugeridas pelo curso. 

Por isso, usamos o teams/ microsoft para comunicação, apresentação e guardar documentos. Seguindo a mesma linha, mas também por ser uma ferramenta crucial no mercado de trabalho, decidimos pelo uso do Github como repositório. 

Para organização de tarefas e gerenciamento de projeto utilizamos o Trello, uma ferramenta bem conhecida, já consolidada no mercado e que pode ser utilizada de forma gratuita.

Para criação de diagramas utilizamos as ferramentas Figma e Lucidchart, ferramentas simples de ser usar e entender os fluxos porém completas com todos os recursos necessários.

Foi usado o LucidChart para criação de processos de modelo de negócios, já que a plataforma oferece bastante facilidade e visibilidade na criação dos processos.

O editor de código escolhido foi o Expo Snack, indicado pelo microfundamento da faculdade. A plataforma é de código aberto para executar aplicativos React Native no navegador, conseguindo agrupar e executar o código no Expo Cliente ou em um reprodutor da web. O código pode ser salvo como lanches e facilmente compartilhado com outras pessoas.

## Prints do quadro do Trello (retrato atual do status da contribuição dos membros da equipe para o projeto)

### Etapa 3

Segue abaixo o print do quadro do Trello ao final da Etapa 3 (editado em um editor de imagens para mostrar todos os cards em uma única imagem). As tarefas colocadas em "Done" abaixo do Card "Etapa 3" e acima do Card "Etapa 2" correspondem às tarefas que foram finalizadas pelos membros da equipe. Os as tarefas que ainda se encontram em "Doing" correspondem às tarefas que os membros associados a elas não foram capazes de concluir a tempo do prazo de entrega e que portanto, encontram-se ausentes da submissão da tarefa da etapa 3.

![TrelloPrint_Etapa3](https://user-images.githubusercontent.com/74699119/198905025-7a1eca44-81ce-41eb-8a64-4fc80dd78d23.png)

### Etapa 4

Segue abaixo o print do quadro do Trello ao final da Etapa 4 (editado em um editor de imagens para mostrar todos os cards em uma única imagem). As tarefas colocadas em "Done" abaixo do Card "Etapa 4" e acima do Card "Etapa 3" correspondem às tarefas que foram finalizadas pelos membros da equipe. Os as tarefas que ainda se encontram em "Doing" correspondem às tarefas que os membros associados a elas não foram capazes de concluir a tempo do prazo de entrega e que portanto, encontram-se ausentes da submissão da tarefa da etapa 4.

![print_trello_e4](https://user-images.githubusercontent.com/74699119/204156202-03965419-0adf-4b8d-b776-8f0abbae9f10.png)

