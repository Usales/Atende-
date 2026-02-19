# 🎯 Atende+ | Plataforma de Suporte Técnico

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.8.2-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Uma plataforma moderna e completa para suporte técnico de TI, desenvolvida com React e Vite. Sistema inspirado no Zendesk com funcionalidades avançadas para gestão de respostas, criação de documentos técnicos e ferramentas de produtividade.

## 🌐 **Demo Online**

**🚀 [Acesse a Aplicação ao Vivo](https://atende.netlify.app/)**

*Experimente todas as funcionalidades diretamente no seu navegador!*

## 📋 **Índice**

- [🌐 Demo Online](#-demo-online)
- [🚀 Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias](#%EF%B8%8F-tecnologias)
- [📚 Biblioteca](#-biblioteca-telabiblioteca)
- [🏢 Instalação](#-instalação)
- [🔧 Scripts Disponíveis](#-scripts-disponíveis)
- [🏗️ Arquitetura](#%EF%B8%8F-arquitetura)
- [🎨 Sistema de Design](#-sistema-de-design)
- [📱 Responsividade](#-responsividade)
- [🗺️ Roadmap](#%EF%B8%8F-roadmap)

## 🚀 **Funcionalidades**

### 🏠 **Tela Inicial (TelaInicial)**
- **Sistema de Busca**: Campo centralizado com funcionalidade avançada
- **8 Categorias de Suporte**: Rede, Sistema, E-mail, Segurança, Hardware, Software, Respostas Prontas, Extensões Úteis
- **Navegação Inteligente**: Clique direto nas categorias para acesso rápido
- **Respostas Populares**: Lista com os atendimentos mais frequentes
- **Animações Staggered**: Entrada progressiva dos elementos

### 💬 **Sistema de Respostas (TelaRespostas)**
- **Respostas Dinâmicas**: 3 tipos de mensagens personalizáveis
- **Visualização em Tempo Real**: Botão 👁️ para preview do conteúdo
- **Mensagens Inteligentes**:
  - **Aguardando Resposta**: Saudação por horário + seleção de plataformas (Gmail, Google Chat, WhatsApp, Telefone)
  - **Encerramento**: Mensagem de finalização personalizada
  - **Regularização**: Aviso para equipamentos desatualizados
- **Seleção de Gênero**: Adequação automática do texto (masculino/feminino)
- **Copy-to-Clipboard**: Cópia instantânea das mensagens configuradas

### ✏️ **Criação de Documentos (TelaCriarRespostas)**
- **Interface Dinâmica**: Layout centralizado → split com documento A4
- **Tipos de Problema**: Upgrade, Falta de retorno, Encerramento, Outros
- **Formulário Inteligente**: Campos organizados (Nome, Telefone, Matrícula, Modelo, Serial, Patrimônio)
- **Controle de Visibilidade**: Checkboxes para mostrar/ocultar campos no documento
- **Opções de Upgrade**: Memória, SSD, Formatação com seleção múltipla
- **Documento A4**: Preview em tempo real com proporção real
- **Geração Dinâmica**: Documentos que se adaptam aos campos selecionados

### ✅ **Extensões Úteis (TelaExtensoes)**
- **Catálogo de Ferramentas**: Extensões de navegador para produtividade
- **Links Diretos**: Abertura automática na Chrome Web Store
- **Cards Interativos**: Hover effects com transformações suaves
- **Extensões Pré-configuradas**: AdGuard, LanguageTool, Wappalyzer, Lightshot e mais

### 📚 **Biblioteca (TelaBiblioteca)**
- **Bases por categoria**: Acesso à biblioteca por base (ex.: teste, procedimentos), com título e descrição vindos da Tela Inicial
- **Card “Crie sua base”**: Botão de ação no mesmo padrão visual dos category-cards (373px), abrindo o modal de adicionar
- **Modal “Adicionar à base”**: Formulário com pergunta/conteúdo, conteúdo detalhado (textarea), descrição, e container de ações:
  - **Copiar**: Botões para copiar conteúdo detalhado, descrição e respostas para a área de transferência
  - **Incluir respostas**: Checkbox + textarea para texto de respostas (ex.: mensagens padrão)
  - **Botões para download**: Adição de arquivos com nome de botão personalizado (ex.: “Manual PDF”)
- **Imagens**: Campo para anexar múltiplas imagens ao item
- **Cards expansíveis**: Itens da base no mesmo padrão da Tela Operacional (título, descrição, botão 👁️)
- **Visualização expandida**: Ao clicar em 👁️, exibe “Informações detalhadas”, botão “Copiar respostas” (quando houver), botões de download com nomes personalizados e preview do conteúdo
- **Layout responsivo**: Truncamento de título/descrição nos cards para manter o botão 👁️ sempre visível; suporte a dark mode

### 🎛️ **Sistema Global**
- **Header Responsivo**: Logo animada "Atende+" com navegação por clique
- **Modo Escuro/Claro**: Toggle fluido com persistência em toda aplicação
- **Navegação SPA**: React Router para transições sem reload
- **Footer Fixo**: Sempre visível com informações de contato

## 🛠️ **Tecnologias**

### **Core Framework**
- **React 19.1.1** - Biblioteca JavaScript moderna
- **Vite 7.1.2** - Build tool ultra-rápida
- **React Router DOM 7.8.2** - Navegação SPA

### **Estilização & UX**
- **CSS3 Moderno** - Flexbox, Grid, Animations
- **CSS Modules** - Escopamento de estilos
- **Responsive Design** - 5 breakpoints (320px → Desktop)
- **Dark Mode** - Tema completo com transições

### **Qualidade de Código**
- **ESLint 9.33.0** - Linting avançado
- **React Hooks** - Estado e efeitos modernos
- **Modular Architecture** - Componentes reutilizáveis

## 🏗️ **Arquitetura**

```
Atende+/
├── 📁 src/
│   ├── 📁 componentes/           # Componentes reutilizáveis
│   │   ├── 📁 Header/            # Cabeçalho com tema e navegação
│   │   │   ├── Header.jsx        # Componente principal
│   │   │   └── Header.css        # Estilos + animações
│   │   └── 📁 Footer/            # Rodapé fixo
│   │       ├── Footer.jsx
│   │       ├── Footer.css
│   │       └── index.js
│   ├── 📁 telas/                 # Páginas principais
│   │   ├── 📁 TelaInicial/       # Página inicial
│   │   │   ├── TelaInicial.jsx   # Busca + categorias + populares
│   │   │   └── TelaInicial.css   # Grid responsivo + animações
│   │   ├── 📁 TelaRespostas/     # Sistema de respostas
│   │   │   ├── TelaRespostas.jsx # Mensagens dinâmicas + preview
│   │   │   └── TelaRespostas.css # Cards expansíveis + formulários
│   │   ├── 📁 TelaCriarRespostas/ # Criação de documentos
│   │   │   ├── TelaCriarRespostas.jsx # Layout split + A4 preview
│   │   │   ├── TelaCriarRespostas.css # Document styling
│   │   │   └── index.js
│   │   ├── 📁 TelaExtensoes/     # Catálogo de extensões
│   │   │   ├── TelaExtensoes.jsx # Grid de ferramentas
│   │   │   ├── TelaExtensoes.css # Cards com hover effects
│   │   │   └── index.js
│   │   └── 📁 TelaBiblioteca/    # Biblioteca / bases de conhecimento
│   │       ├── TelaBiblioteca.jsx # Modal adicionar, cards expansíveis, copiar/download
│   │       └── TelaBiblioteca.css # Estilos da biblioteca e modal
│   ├── 📁 assets/                # Recursos estáticos
│   ├── App.jsx                   # Router principal
│   ├── App.css                   # Estilos globais
│   ├── index.css                 # Reset + variáveis CSS
│   └── main.jsx                  # Entry point
├── 📁 public/                    # Assets públicos
├── package.json                  # Dependências + scripts
├── vite.config.js                # Configuração Vite
└── README.md                     # Documentação
```

## 🎨 **Sistema de Design**

### **🎨 Paleta de Cores**
```css
/* Tema Claro */
--primary: #2563eb;      /* Azul principal */
--secondary: #22c55e;    /* Verde sucesso */
--background: #ffffff;   /* Fundo principal */
--surface: #f9fafb;     /* Cards e superfícies */
--text: #1f2937;        /* Texto principal */
--text-muted: #6b7280;  /* Texto secundário */
--border: #e5e7eb;      /* Bordas sutis */

/* Tema Escuro */
--dark-bg: #1f2937;     /* Fundo escuro */
--dark-surface: #374151; /* Superfícies escuras */
--dark-text: #ffffff;   /* Texto claro */
--dark-border: #4b5563; /* Bordas escuras */
```

### **📝 Tipografia**
- **Font Stack**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Títulos**: 1.75rem → 2rem (responsivo)
- **Subtítulos**: 1.25rem → 1.5rem
- **Corpo**: 0.95rem → 1rem
- **Small**: 0.8rem → 0.9rem

### **✨ Animações**
- **Stagger Delays**: 0.1s → 0.5s para elementos sequenciais
- **Hover Transforms**: scale(1.05-1.1) + translateY(-2px → -4px)
- **Transitions**: 0.2s → 0.3s ease para interações
- **Letter Animation**: Logo com entrada sequencial das letras

## 📱 **Responsividade**

### **🖥️ Breakpoints Estratégicos**
| Dispositivo | Resolução | Layout | Colunas |
|-------------|-----------|--------|---------|
| **Desktop** | >1024px | Grid completo | 3 colunas |
| **Large Tablet** | ≤1024px | Grid médio | 2 colunas |
| **Tablet** | ≤768px | Stack vertical | 1 coluna |
| **Mobile** | ≤480px | Compacto | 1 coluna |
| **Ultra-small** | ≤320px | Mínimo | Ícones apenas |

### **📐 Adaptações por Tela**
- **Cards**: Padding e altura ajustáveis
- **Grid**: Auto-fit com min-width inteligente
- **Navigation**: Ícones em telas pequenas
- **Forms**: Layout vertical em mobile
- **Document Preview**: Escala proporcional

### **🌙 Dark Mode**
- **Toggle Global**: Persistência em toda aplicação
- **Contrast Ratio**: WCAG AA compliant
- **Smooth Transitions**: 0.3s para mudanças de tema
- **Component Coverage**: 100% dos elementos

## 🏢 **Instalação**

### **📍 Pré-requisitos**

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 9+ ou **yarn** 1.22+ (vem com Node.js)
- **Git** ([Download](https://git-scm.com/))

### **🔄 Método 1: Clone via HTTPS**
```bash
# Clone o repositório
git clone https://github.com/Usales/Atende-.git

# Entre no diretório
cd Atende-

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### **🔑 Método 2: Clone via SSH (Recomendado)**
```bash
# Clone o repositório (SSH)
git clone git@github.com:Usales/Atende-.git

# Entre no diretório
cd Atende-

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### **📦 Método 3: Download Direto**
1. [Baixe o ZIP](https://github.com/Usales/Atende-/archive/refs/heads/main.zip)
2. Extraia o arquivo
3. Abra o terminal na pasta extraída
4. Execute os comandos:
```bash
npm install
npm run dev
```

### **⚙️ Configuração do Ambiente**

O projeto não requer variáveis de ambiente para funcionar localmente. Todas as configurações necessárias estão no `vite.config.js`.

### **🗺️ Verificando a Instalação**

Após executar `npm run dev`, você deve ver:

```
✨ Vite dev server running at:

➡️  Local:   http://localhost:5173/
➡️  Network: http://192.168.x.x:5173/

🚀 Ready in Xms
```

Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

### **📎 Estrutura Após Instalação**
```
Atende-/
├── 📁 node_modules/     # Dependências instaladas
├── 📁 src/              # Código fonte
├── 📁 public/           # Assets estáticos
├── 📁 dist/             # Build de produção (após npm run build)
├── 📄 package.json      # Dependências e scripts
├── 📄 vite.config.js    # Configurações do Vite
└── 📄 README.md        # Documentação
```

### **📝 Dependências Principais**
```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.8.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.0.0",
    "eslint": "^9.33.0",
    "vite": "^7.1.2"
  }
}
```

### **⚠️ Solução de Problemas**

**Erro de porta ocupada:**
```bash
# Use uma porta diferente
npm run dev -- --port 3000
```

**Erro de permissão (npm):**
```bash
# Limpe o cache do npm
npm cache clean --force

# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

**Erro de módulos não encontrados:**
```bash
# Reinstalação completa
npm ci
```

## 🔧 **Scripts Disponíveis**

### **🚀 Desenvolvimento**
```bash
# Inicia servidor de desenvolvimento com hot reload
npm run dev
# ➡️ http://localhost:5173
# ✨ Recarga automática ao salvar arquivos

# Servidor em porta personalizada
npm run dev -- --port 3000
```

### **🏢 Build & Deploy**
```bash
# Build para produção
npm run build
# ➡️ Gera pasta dist/ otimizada

# Preview do build local
npm run preview
# ➡️ http://localhost:4173
```

### **🔍 Qualidade de Código**
```bash
# Lint com ESLint
npm run lint
# ✅ Identifica erros de sintaxe e problemas
```

### **🌐 Deploy Online**
A aplicação está disponível em: **[https://atende.netlify.app/](https://atende.netlify.app/)**

## 📌 **Atualizações recentes**

- **Biblioteca (TelaBiblioteca)**: Nova tela acessível pela categoria “Criar Biblioteca” na Tela Inicial. Permite criar bases por categoria, adicionar itens com pergunta, conteúdo detalhado, descrição, respostas opcionais, botões de download com nome personalizado e imagens. Cards no padrão da Tela Operacional com expansão (👁️) e ações de copiar respostas.
- **Tela Inicial**: Integração com a rota `/biblioteca` e modal “Criar nova base” para criar bases e navegar para a Biblioteca com título e descrição.
- **App**: Rota `/biblioteca` registrada no React Router.

## 🗺️ **Roadmap**

### **🎯 Próximas Features**
- [ ] **Sistema de Autenticação** - Login/logout com JWT
- [ ] **Base de Dados** - Persistência de respostas e configurações
- [ ] **API REST** - Backend para sincronização
- [ ] **Busca Avançada** - Filtros e indexação
- [ ] **Templates Personalizados** - Editor de documentos
- [ ] **PWA** - Instalação offline + notificações
- [ ] **Relatórios** - Analytics de atendimentos
- [ ] **Multi-idiomas** - i18n para português/inglês

### **🔧 Melhorias Técnicas**
- [ ] **Testing Suite** - Jest + Testing Library
- [ ] **Storybook** - Documentação de componentes
- [ ] **TypeScript** - Tipagem estática
- [ ] **Performance** - Code splitting + lazy loading
- [ ] **Accessibility** - ARIA + screen readers
- [ ] **CI/CD** - GitHub Actions

---

## 🌟 **Links Importantes**

- 🚀 **Demo ao Vivo**: [https://atende.netlify.app/](https://atende.netlify.app/)
- 📂 **Repositório**: [https://github.com/Usales/Atende-](https://github.com/Usales/Atende-)
- 📖 **Documentação**: Este README
- 🐛 **Reportar Issues**: [GitHub Issues](https://github.com/Usales/Atende-/issues)

---

**📌 Atende+ © 2025 | Base de conhecimento e respostas prontas para auxílio de suporte de TI**
