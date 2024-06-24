# Projeto Glasgow

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/iKaueMatos/Glasgow)](https://github.com/iKaueMatos/Glasgow/issues)
[![GitHub stars](https://img.shields.io/github/stars/iKaueMatos/Glasgow)](https://github.com/iKaueMatos/Glasgow/stargazers)

## Visão Geral

PrimárIA é um software web e mobile de atenção primária à saúde, destinado a ajudar
pacientes no acompanhamento de doenças crônicas, exames, receitas, alimentação, e
alertas de saúde, melhorando assim a conscientização da prevenção. Inclui uma IA
integrada com banco de dados de saúde que tenha acesso ao histórico médico, responda
dúvidas e forneça informações importantes sobre qual é o local correto para buscar
atendimento de acordo com a gravidade e evitar filas desnecessárias, centralizando tudo
em um só lugar. Além disso, será integrado com o WhatsApp através de um chatbot com
IA para oferecer suporte e informações diretamente pelo aplicativo de mensagens.

## Tecnologias Utilizadas

- Node.js
- Express.js
- TypeScript
- Prisma
- Docker
- MySQL

## Pré-requisitos

Liste todos os pré-requisitos necessários para rodar o projeto localmente, como Node.js, Docker, etc.

## Configuração

### Variáveis de Ambiente

- `NODE_ENV`: Ambiente de execução do Node.js (`development`, `production`, etc.)
- `DB_HOST`: Host do banco de dados MySQL
- `DB_PORT`: Porta do banco de dados MySQL
- `DB_DATABASE`: Nome do banco de dados MySQL
- `DB_USER`: Usuário do banco de dados MySQL
- `DB_PASSWORD`: Senha do usuário do banco de dados MySQL
- `DATABASE_URL`: URL de conexão com o banco de dados MySQL
- Outras variáveis necessárias...

### Instalação

1. Clone o repositório: `git clone https://github.com/iKaueMatos/Glasgow`
2. Instale as dependências: `npm install`

### Executando o Projeto

- **Desenvolvimento**: `npm run start:dev`
- **Produção**: `npm run start:prod`

### Docker

Para rodar o projeto com Docker:

1. Instale o Docker e o Docker Compose
2. Execute: `docker-compose up`

## Executando Migrações e Comandos do Prisma
Para rodar uma migração ou qualquer comando relacionado ao Prisma, é necessário entrar no container da aplicação:

1. Entre no container: `docker exec -it glasgow-api sh`
2. Execute os comandos do Prisma, como `npx prisma migrate dev --name <Nome da migration>` 

## Funcionalidades

(Em Desenvolvimento)

## Contribuição

Explique como os desenvolvedores podem contribuir com seu projeto, como abrir issues e enviar pull requests.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
