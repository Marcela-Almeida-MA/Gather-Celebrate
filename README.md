# Gather

> Convites digitais feitos para momentos especiais.

O **Gather** é uma plataforma SaaS para criação, personalização e compartilhamento de convites digitais para diferentes tipos de eventos.

A proposta é permitir que cada usuário crie e gerencie seus próprios convites, escolhendo temas e adicionando informações do evento, fotos, histórias, presentes e outros detalhes importantes, tudo em uma página digital responsiva.

> 🚧 **Status:** em desenvolvimento

---

## Funcionalidades

### Convites
- Criação de múltiplos convites
- Edição e duplicação de convites
- Publicação de convites
- Link exclusivo para cada convite
- Página pública responsiva

### Personalização
- Diferentes tipos de eventos
- Temas visuais personalizáveis
- Data, horário e localização
- Eventos presenciais ou online
- História do evento
- Galeria de fotos
- Timeline do evento
- Lista de presentes
- Chave Pix e QR Code

### Usuários
- Cadastro e login
- Autenticação
- Dashboard para gerenciamento dos convites

---

## Tecnologias

| Camada | Tecnologias |
|---|---|
| Frontend | React, Vite, TypeScript |
| Backend | Node.js, Express, TypeScript, Zod, Vitest, Supertest |
| Banco e serviços | Supabase (PostgreSQL, Auth e Storage) |

---

## Arquitetura

O backend é estruturado em camadas para separar responsabilidades:

```
Requisição HTTP → Route → Middleware → Controller → Service → Supabase → PostgreSQL
```

| Camada | Responsabilidade |
|---|---|
| `routes` | Definem os endpoints da API |
| `middlewares` | Autenticação e outras validações intermediárias |
| `controllers` | Recebem as requisições HTTP e retornam as respostas |
| `services` | Lógica de negócio e comunicação com o banco |
| `schemas` | Validação dos dados recebidos com Zod |
| `lib` | Configurações e clientes externos, como o Supabase |

### Estrutura do projeto

```
App/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── lib/
│   │   └── types/
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── env.ts
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middlewares/
│   │   ├── schemas/
│   │   ├── lib/
│   │   ├── types/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── tests/
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
│
└── supabase/
    ├── migrations/
    └── config.toml
```

---

## API

Atualmente a API possui a estrutura inicial para:

| Método | Rota | Acesso | Descrição |
|---|---|---|---|
| `GET` | `/api/health` | Público | Verifica se o backend está funcionando |
| `GET` | `/api/auth/me` | Protegido | Identifica o usuário autenticado |
| `POST` | `/api/invitations` | Protegido | Cria um novo convite |

Os dados de `POST /api/invitations` são validados com Zod antes de chegarem à camada de serviço.

---

## Segurança

- A autenticação utiliza o **Supabase Auth**.
- O frontend envia o token no header `Authorization: Bearer TOKEN`.
- O backend valida o token antes de liberar o acesso às rotas protegidas.
- A `SUPABASE_SERVICE_ROLE_KEY` é usada **somente no backend** e nunca deve ser exposta no frontend.

---

## Desenvolvimento

### Backend

```bash
cd backend
npm install
npm run dev     # servidor em modo desenvolvimento
npm run build   # build de produção
npm test        # testes
```

### Variáveis de ambiente

O backend utiliza um arquivo `.env`:

```env
PORT=3000
SUPABASE_URL=sua_url_do_supabase
SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key
```

> ⚠️ O `.env` é de uso local e **não deve ser versionado** no Git.

---

## Progresso

### Backend
- [x] Estrutura inicial do projeto
- [x] Configuração do Express
- [x] Configuração de variáveis de ambiente
- [x] Conexão com Supabase
- [x] Health check
- [x] Middleware de autenticação
- [x] Service de convites
- [x] Controller de convites
- [x] Rotas de convites
- [x] Validação com Zod
- [ ] Testes dos endpoints de convites
- [ ] CRUD completo de convites
- [ ] Regras de autorização
- [ ] Upload e gerenciamento de fotos
- [ ] Gerenciamento de presentes
- [ ] Publicação de convites

### Frontend
- [ ] Dashboard
- [ ] Editor de convites
- [ ] Personalização de temas
- [ ] Galeria de fotos
- [ ] Timeline
- [ ] Lista de presentes
- [ ] Página pública do convite

---

## Roadmap

### MVP
- Autenticação
- Dashboard
- Criação e gerenciamento de convites
- Temas
- Conteúdo do convite
- Página pública
- Publicação através de slug

### Futuro
- RSVP
- Lista de convidados
- QR Code
- Analytics
- Domínios personalizados
- Pagamentos
- Integrações com outros serviços