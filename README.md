# JLI Hub - E-commerce FrontEnd (Fake store API)

Projeto desenvolvido como prática de consumo de API com autenticação e listagem de produtos usando React + TypeScript + MUI.

# Tecnologias utilizadas

React 19
TypeScript
Vite
Material UI (MUI)
Axios
React Router DOM
Fake Store API 

# Visão geral

A aplicação exibe uma tela de login (com autenticação fake via token) e uma tela de listagem de produtos, com layout responsivo e estilização moderna.

# Funcionalidades

Login com autenticação (token salvo no `localStorage`)
Proteção de rota por autenticação
Listagem de produtos com informações e imagens
Logout com remoção de token

# Como rodar o projeto

1. **clone o repositório**

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2. Instale as dependências

```bash
npm install
```

inicie o servidor de desenvolvimento
```bash
npm run dev
```
A aplicação estará disponível normalmente em http://localhost:5173

3. Credenciais de teste

A Fake Store API permite login com os seguintes dados:

Usuário: mor_2314, Senha: 83r5^_

4. Árvore de código

src/
├── api/            # Configuração do Axios
├── auth/           # Funções para manipular o token
├── components/     # Componentes reutilizáveis como ProductCard
├── pages/          # Páginas principais (Login, Products)
├── main.tsx        # Ponto de entrada do app
└── index.css       # Estilos globais



