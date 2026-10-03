# Gather

> Convites digitais feitos para momentos especiais.

O **Gather** é uma plataforma SaaS para criação, personalização e compartilhamento de convites digitais para diferentes tipos de eventos.

A proposta é permitir que cada usuário crie e gerencie seus próprios convites, escolhendo temas, adicionando informações do evento, fotos, histórias, presentes e outras informações importantes — tudo em uma página digital responsiva.

## Funcionalidades

- Cadastro e login de usuários
- Dashboard para gerenciamento dos convites
- Criação de múltiplos convites
- Edição e duplicação de convites
- Diferentes tipos de eventos
- Temas visuais personalizáveis
- Informações de data, horário e localização
- História do evento
- Galeria de fotos
- Timeline do evento
- Lista de presentes
- Chave Pix e QR Code
- Eventos presenciais ou online
- Publicação de convite através de link exclusivo
- Página pública responsiva

##  Tecnologias

### Frontend

- React
- Vite
- TypeScript

### Backend

- Node.js
- Express
- TypeScript

### Banco de dados e serviços

- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage

##  Estrutura do projeto

```text
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
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middlewares/
│   │   ├── lib/
│   │   ├── types/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── tests/
│   ├── package.json
│   └── tsconfig.json
│
└── supabase/
    ├── migrations/
    └── config.toml


Status

🚧 Em desenvolvimento

O Gather está sendo desenvolvido como uma plataforma SaaS de convites digitais, com foco em simplicidade, personalização e uma experiência agradável para quem cria e para quem recebe o convite.

📄 Licença
Este projeto é privado e está em desenvolvimento.