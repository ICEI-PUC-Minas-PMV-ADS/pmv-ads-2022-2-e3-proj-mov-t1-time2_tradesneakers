# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

![UML class TradeSneakers](https://user-images.githubusercontent.com/74699119/191073477-12c42435-6cd4-461a-93a1-bc1dbefdd355.png)
<p align="center"><b>Figura X</b> - Diagrama de classes do projeto</p>
<br>

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

|**LINGUAGEM**|
|:---------:|
|JAVASCRIPT|
|**FRAMEWORK**|       
|REACT|
|REACT NATIVE|
|**BIBLIOTECAS**|
|REACT NATIVE PAPER|
|**IDES**|
|EXPO DEV SNACKS|
|**FERRAMENTAS**|
|MICROSOFT TEAMS|
|GITHUB|
|TRELLO|

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software. Com base nessas características e nas respectivas sub-características, identificamos as sub-características que melhor de relacionam com projeto de software proposto, considerando-se alguns aspectos simples de qualidade. 

| Característica de qualidade | Subcaracteristicas de qualidade escolhidas |     Justificativa     | 
|-----------------------------|--------------------------------------------|-----------------------|
| Funcionalidade | Adequação; Segurança de Acesso | Verificar os atributos do software que evidenciam a apropriação para tarefas especificadas e que evidenciam sua capacidade de evitar o acesso não autorizado a dados | 
| Usabilidade | Conformidade; Apreensibilidade | Pensar em usabilidade é fundamental para entregar uma experiência positiva e alcançar os objetivos propostos | 
| Eficiência | Comportamento em relação ao tempo | Avaliar o relacionamento entre o nível de desempenho do software e a quantidade de recursos utilizada , sob condições estabelecidas  |
| Portabilidade | Adaptabilidade; Capacidade de instalação | Testar a facilidade de instalação a capacidade do software em ser transferido de um ambiente para outro | 
| Manutenibilidade | Estabilidade; Testabilidade | Validar o software e avaliar o risco de efeitos inesperados ocasionados por modificações |



| Subcaracterística  |                      Métricas  de Qualidade de Software               |  Peso  |
|--------------------|-----------------------------------------------------------------------|--------|
| Adequação | O software corresponde ao esperado para funcionalidade proposta? | Alto
| Adequação | O software é capaz de executar completamente todas as funções propostas? | Alto |
| Segurança de Acesso | Os dados coletados no cadastro estão armazenados de forma segura?  | Alto |
| Segurança de Acesso | O software possui etapas de autorização e autenticação no momento do acesso?  | Alto |
| Conformidade | O software está em conformidade com a Lei Geral de Proteção de Dados? | Alto |
| Conformidade | O software está em conformidade com as normas, convenções e regulamentações previstas em lei para a atividade proposta? | Alto |
| Apreensibilidade | O software apresenta telas que são de uso intuitivo? | Alto |
| Apreensibilidade | O software apresenta funcionalidades que são compreendidas facilmente? | Alto |
| Comportamento em relação ao tempo | O software apresenta tempo de resposta esperado em troca de telas? | Alto |
| Comportamento em relação ao tempo | O software apresenta velocidade na execução e no processamento de suas funções? | Alto |
| Adaptabilidade | O software é capaz de executar todas as suas funções em diferentes dispositivos?  | Alto |
| Capacidade de instalação | O software pode ser instalado de maneira rápida e intuitiva? | Alto |
| Estabilidade | O software apresenta falhas? | Alto |
| Estabilidade | O software apresenta comportamento inesperado após modificações? | Alto |
| Testabilidade | O software pode ser testado após modificações?| Alto |
| Testabilidade | O software possui registro de testes antes de atualizações? | Alto |


> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
