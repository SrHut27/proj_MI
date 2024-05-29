# Projeto
Proposto pelo professor Lucimar de Sasso Vieira na disciplina de Programação em Microinformática na Faculdade de Tecnologia de Rio Preto, o projeto de construção de uma página web tem como objetivo proporcionar aos alunos uma compreensão dos conceitos, sistemas e ferramentas utilizados na criação de páginas na Internet. Além disso, o projeto promove o crescimento pessoal e profissional dos alunos, incentivando-os a buscar empresas para as quais possam propor e desenvolver uma página web, aplicando a teoria aprendida em sala de aula.

###### Equipe
Coordenador: Professor Lucimar Sasso Vieira
Desenvolvedores: Gabriel Henrique Liebana, Gabriel Ribeiro de Freitas, e Kaio de Medeiros Gaspar

### Landing Page - Sol a Sun
_Obs: Para a realização do projeto, entramos em contato com a empresa Sol a Sun._

Conheça a Sol a Sun, uma empresa especializada na manutenção e instalação de placas e sistemas solares. Com muitos anos de experiência no mercado, a empresa segue uma proposta fiel aos clientes, sempre buscando inovar no atendimento e na qualidade dos serviços prestados. Entre em contato com André, líder da empresa.

## Estrutura
O projeto foi inspirado na famosa arquitetura MVC (Model, View, Controller), que possui as seguintes características:

+ Model: Desenho da estrutura do banco de dados NoSQL;
+ View: Templates que serão oferecidos pelas rotas da aplicação;
+ Controller: Responsável pelo redirecionamento do usuário (rotas), lógica da aplicação, tratamento de dados e erros.
No entanto, nosso projeto apenas se inspirou na estrutura MVC, pois utilizamos o banco de dados PostgreSQL, que emprega uma linguagem SQL amplamente conhecida. Essa é a principal diferença. Além disso, os controles da aplicação foram divididos em dois arquivos: Routes e Controllers. O primeiro serve para definir as rotas para o usuário, enquanto o segundo trata da lógica da aplicação, dados e erros.

##### Estrutura de Arquivos
O projeto está organizado da seguinte forma:
├───server
│   ├───configs
│   ├───controllers
│   ├───database
│   └───routes
├───styles
└───views
    ├───layouts
    └───index.html

+ Server: Contém as configurações, controladores, definições de banco de dados e rotas da aplicação.
+ Styles: Arquivos de estilo CSS para a aplicação.
+ Views: Templates HTML renderizados pelo servidor, incluindo layouts e páginas individuais.
