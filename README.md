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

### Executando o Projeto ⚙️

- **Desenvolvimento**: `npm run start:dev`
- **Produção**: `npm run start:prod`

### Docker 🐳

Para rodar o projeto com Docker:

1. Instale o Docker e o Docker Compose
2. Execute: `docker-compose up`

## Licença
Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
