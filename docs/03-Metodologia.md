
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Descreva aqui a metodologia de trabalho do grupo para atacar o problema. Definições sobre os ambiente de trabalho utilizados pela  equipe para desenvolver o projeto. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times).

## Relação de Ambientes de Trabalho

As alternativas do projeto são elaboradas a partir de diversas plataformas e a relação dos ambientes com seu propósito a respeito é apresentada conforme a tabela:

Ambiente|Plataforma|Link de Acesso
|:--------|:----------:|:-------------:|
|Repositório de código fonte|GitHub| [GitHub](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t1-time2_tradesneakers)|
|Documentos do Projeto|GitHub (docs/)|[Projeto Tradesneakers](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t1-time2_tradesneakers/blob/main/README.md)|
|Criação de Diagramas|  | []()|
|Projeto de Interface e Wireframes|  | []()|
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

Backlog
No início do nosso processo levantamos os requisitos necessários para a próxima entrega e colocamos no kanban do projeto na aba To Do para que cada integrante escolha suas tarefas.

As tarefas, que são criadas como issues, devem estar devidamente descritas com todas as informações necessárias e com as etiquetas corretas.

Dentre as etiquetas temos:

- `documentation`: melhorias ou acréscimos à documentação
- `testing`: teste de implementações
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

#### Desenvolvimento
Cada colaborador deve então escolher uma tarefa na aba de Backlog e movê-la para a aba Doing.

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
| Ferramenta de criação Interface e Wireframes |  | []()|
| Ferramenta de gerenciamento do Projeto | Trello |[]()|

<br>

Com o intuito de economizar tempo e evitar o uso de múltiplas ferramentas com a mesma função, o grupo deu preferência para o uso das ferramentas já usadas e sugeridas pelo curso. 

Por isso, usamos o teams/ microsoft para comunicação, apresentação e guardar documentos. Seguindo a mesma linha, mas também por ser uma ferramenta crucial no mercado de trabalho, decidimos pelo uso do Github como repositório. 

Para organização de tarefas e gerenciamento de projeto utilizamos o Trello, uma ferramenta bem conhecida, já consolidada no mercado e que pode ser utilizada de forma gratuita.

Para criação de diagramas utilizamos a ferramenta Figma, uma ferramenta bem simples de ser usar e entender os fluxos porém completa com todos os recursos necessários.

Foi usado o LucidChart para criação de processos de modelo de negócios, já que a plataforma oferece bastante facilidade e visibilidade na criação dos processos.

O editor de código escolhido foi o Expo Snack, indicado pelo microfundamento da faculdade. A plataforma é de código aberto para executar aplicativos React Native no navegador, conseguindo agrupar e executar o código no Expo Cliente ou em um reprodutor da web. O código pode ser salvo como lanches e facilmente compartilhado com outras pessoas.
