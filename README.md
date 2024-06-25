# Hackaton 4.0 Saúde | Glasgow Back-end 🧠

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/iKaueMatos/Glasgow)](https://github.com/iKaueMatos/Glasgow/issues)

## Visão Geral

PrimárIA é um software web e mobile de atenção primária à saúde, destinado a ajudar
pacientes no acompanhamento de doenças crônicas, exames, receitas, alimentação, e
alertas de saúde, melhorando assim a conscientização da prevenção. Inclui uma IA
integrada com banco de dados de saúde que tenha acesso ao histórico médico, responda
dúvidas e forneça informações importantes sobre qual é o local correto para buscar
atendimento de acordo com a gravidade e evitar filas desnecessárias, centralizando tudo
em um só lugar. Além disso, será integrado com o WhatsApp através de um chatbot com
IA para oferecer suporte e informações diretamente pelo aplicativo de mensagens.

## Tecnologias Utilizadas 🛠️

- Node.js
- Express.js
- TypeScript
- Prisma
- Docker
- MySQL

## Documentação da API

link: [visualizar](https://documenter.getpostman.com/view/32899753/2sA3XY8JPA)

## Pré-requisitos 💡

1. Docker
2. WSL

## Configuração 🔧

### Variáveis de Ambiente

- `NODE_ENV`: Ambiente de execução do Node.js (`development`, `production`, etc.)
- `DB_HOST`: Host do banco de dados MySQL
- `DB_PORT`: Porta do banco de dados MySQL
- `DB_DATABASE`: Nome do banco de dados MySQL
- `DB_USER`: Usuário do banco de dados MySQL
- `DB_PASSWORD`: Senha do usuário do banco de dados MySQL
- `DATABASE_URL`: URL de conexão com o banco de dados MySQL
- Outras variáveis necessárias...

### Instalação 📄

1. Clone o repositório: `git clone https://github.com/iKaueMatos/Glasgow-Backend/edit/glasdow.V.1.0.1`
2. Instale as dependências: `npm install`

### Docker 🐳

Para rodar o projeto com Docker:

**Atenção: ** rodando o projeto com docker todo o ambiente do back-end irar ser inicializado de maneira simultanea, possibilitando fazer requisições para API.

1. Instale o Docker e o Docker Compose
2. Execute: `docker-compose up`

### Executando o Projeto sem o Docker ⚙️

Atenção: rodando o projeto sem a utilização do docker sera necessário instalar um SGBD na própria maquina. 

- **Desenvolvimento**: `npm run start:dev`
- **Produção**: `npm run start:prod`

## Licença
Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
