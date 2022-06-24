# user authentication service
## Tema do projeto
Criar um sistema de login implementando entrega de token de autnticação para acesso às rotas privadas
## Tecnologias usadas no projeto:
- Javascript como linguagem de programação rodando no node;
- Mongoose para trabalhar com o mongoDB instalado na minha máquina local;
- expressJS como framework;
- Json web token para gerar o token de acesso e compará-lo na hora de acesso à rota privada
- Bcrypt para gerar uma senha mais segura contra ataques hackers
- Dotenv para separar os diferentes ambientes ou somente não divugar informações sensíveis no repositório do github

## Intuito
Adicionar uma camada de segurança essêncial para os web services, tornando eles mais profissionais.

## Competências abordadas neste projeto:
- Criação de um servidor http node simples através do framework ExpressJs;
- Sistema de roteamento entre pastas e arquivos do servidor;
- Utilização de controllers em um sistema;
- Manipulação do mongoDB através do ODM mongoose;
- Criação de models e collections de um banco de dados;
- Funcionalidades de criar, ler, atualizar e deletar algum document ou alguma collection do banco de dados;
- Implementação de senhas encriptadas;
- Implementação de rotas privadas da api;
- Validação de dados enviados do client;