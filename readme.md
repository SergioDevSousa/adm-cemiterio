```bash
# 🪦 API de Administração de Cemitério

API REST para gerenciar túmulos, quadras e status de ocupação em um cemitério.  
Construída com **Node.js + Express + TypeScript + PostgreSQL**.

---

## 🚀 Tecnologias

- **Node.js 18+**
- **Express.js**
- **TypeScript**
- **PostgreSQL 16**
- **pg (node-postgres)** para conexão ao banco
- **dotenv** para variáveis de ambiente

---

## 📂 Estrutura do Projeto



📦 app-adm-sim
├── src
│   ├── controllers      # Lógica dos endpoints
│   │   └── tumuloController.ts
│   ├── database         # Conexão com Postgres
│   │   └── db.ts
│   ├── routes           # Definição das rotas
│   │   └── tumuloRoutes.ts
│   └── server.ts        # Ponto de entrada da API
├── .env                 # Variáveis de ambiente
├── package.json
├── tsconfig.json
└── README.md

```

---

## 🛠️ Instalação e Configuração

### ✅ 1. Clonar o projeto

```bash
git clone https://github.com/seu-usuario/app-adm-sim.git
cd app-adm-sim
````

### ✅ 2. Instalar dependências

```bash
npm install
```

### ✅ 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz com:

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASS=postgres
DB_NAME=bd_admin
DB_PORT=5432
PORT=3000
```

Ajuste os valores conforme seu ambiente.

---

## 🗄️ Banco de Dados

### ✅ Criar o banco e tabela

```sql
CREATE DATABASE bd_admin;

\c bd_admin;

CREATE TABLE tumulos (
  id SERIAL PRIMARY KEY,
  numero VARCHAR(10) NOT NULL,
  quadra VARCHAR(10) NOT NULL,
  status VARCHAR(20) DEFAULT 'livre'
);

INSERT INTO tumulos (numero, quadra, status) VALUES
('101', 'A', 'livre'),
('102', 'A', 'ocupado'),
('201', 'B', 'manutencao');
```

---

## ▶️ Executar o projeto

### ✅ Ambiente de desenvolvimento

```bash
npm run dev
```

### ✅ Build e produção

```bash
npm run build
npm start
```

---

## 🌐 Endpoints da API

Base URL: `http://localhost:3000/api/tumulos`

| Método     | Endpoint | Descrição              | Exemplo Body                                            |
| ---------- | -------- | ---------------------- | ------------------------------------------------------- |
| **GET**    | `/`      | Lista todos os túmulos | –                                                       |
| **POST**   | `/`      | Cria um novo túmulo    | `{ "numero": "301", "quadra": "C", "status": "livre" }` |
| **PUT**    | `/:id`   | Atualiza um túmulo     | `{ "status": "ocupado" }`                               |
| **DELETE** | `/:id`   | Remove um túmulo       | –                                                       |

Exemplo GET:

```bash
curl http://localhost:3000/api/tumulos
```

Exemplo POST:

```bash
curl -X POST http://localhost:3000/api/tumulos \
  -H "Content-Type: application/json" \
  -d '{"numero":"301","quadra":"C","status":"livre"}'
```

---

## 🖥️ Deploy no Servidor

Você pode rodar de duas formas:

### ✅ 1. Instalação direta no servidor

* Instale Node.js + PostgreSQL
* Copie o projeto e configure `.env`
* Rode com `npm run build && npm start`
* Para manter online, use `pm2`

### ✅ 2. Via Docker

* Adicione um `Dockerfile` e `docker-compose.yml`
* Suba com `docker compose up -d`
* Postgres e API rodarão juntos em containers

---

## 🧰 Próximos passos

* Criar autenticação (JWT) para proteger endpoints
* Adicionar novas entidades (falecidos, responsáveis, taxas)
* Documentar com Swagger para facilitar o consumo da API

---

## 📜 Licença

MIT © 2025
