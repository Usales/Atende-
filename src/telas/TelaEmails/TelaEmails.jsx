import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaEmails.css';

function TelaEmails() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);

  const informacoesEmails = [
    {
      title: 'Criação de Assinaturas Profissionais',
      category: 'Assinaturas',
      description: 'Como criar assinaturas de email profissionais e atraentes',
      content: `✍️ Criação de Assinaturas Profissionais

📋 Elementos Essenciais
• Nome completo
• Cargo/função
• Nome da empresa
• Telefone de contato
• Email profissional
• Endereço (opcional)

🎨 Estrutura Recomendada

1️⃣ Informações básicas:
   [Nome Completo]
   [Cargo] | [Empresa]
   
2️⃣ Contatos:
   📧 email@empresa.com
   📞 (xx) xxxxx-xxxx
   🌐 www.empresa.com
   
3️⃣ Redes sociais (opcional):
   LinkedIn | Instagram | Facebook

🔧 Configuração no Gmail

1️⃣ Arquivo > Opções > Email
2️⃣ Assinaturas > Nova
3️⃣ Digite o nome da assinatura
4️⃣ Inserir texto e formatação
5️⃣ Adicionar logo (máximo 100KB)
6️⃣ Definir como padrão

🔧 Configuração no Gmail

1️⃣ Configurações > Ver todas as configurações
2️⃣ Aba "Geral" > Assinatura
3️⃣ Criar nova assinatura
4️⃣ Formatação e imagem
5️⃣ Salvar alterações

💡 Dicas importantes:
• Máximo 4-6 linhas
• Fonte simples (Arial, Calibri)
• Tamanho 11-12pt
• Cores neutras
• Logo pequeno e otimizado
• Evitar muitas informações
• Testar em diferentes clientes

[EMAIL_VIDEO_1]

📱 Assinatura Mobile-Friendly:
• Texto maior (14pt)
• Informações essenciais apenas
• Links clicáveis
• Imagem pequena ou sem imagem`,
      videoId: 'Whe5_ftCDPg', // Tutorial real de assinatura do Gmail em português
      videoTitle: 'Como Criar Assinatura Profissional no Gmail'
    },
    {
      title: 'Configuração de Contas de Email',
      category: 'Configuração',
      description: 'Setup de contas IMAP, POP3 e Exchange no Gmail e outros clientes',
      content: `📧 Configuração de Contas de Email

⚙️ Tipos de Configuração

🥇 IMAP (Recomendado):
• Sincronização entre dispositivos
• Emails ficam no servidor
• Acesso offline limitado
• Ideal para múltiplos dispositivos

🥈 POP3:
• Download local dos emails
• Não sincroniza entre dispositivos
• Ocupa espaço no disco
• Acesso offline completo

🥉 Exchange:
• Corporativo/Office 365
• Sincronização completa
• Calendário e contatos
• Recursos avançados

🔧 Configuração IMAP no Gmail

1️⃣ Arquivo > Adicionar Conta
2️⃣ Configuração manual
3️⃣ Dados necessários:
   - Email e senha
   - Servidor IMAP: imap.provedor.com
   - Porta: 993 (SSL) ou 143
   - Servidor SMTP: smtp.provedor.com
   - Porta: 587 (TLS) ou 25

4️⃣ Configurações avançadas:
   - Autenticação necessária
   - Criptografia TLS/SSL
   - Timeout: 1 minuto

🌐 Principais Provedores

Gmail:
• IMAP: imap.gmail.com (993)
• SMTP: smtp.gmail.com (587)
• Autenticação de 2 fatores

Gmail/Hotmail:
• IMAP: Gmail.office365.com (993)
• SMTP: smtp-mail.Gmail.com (587)

Yahoo:
• IMAP: imap.mail.yahoo.com (993)
• SMTP: smtp.mail.yahoo.com (587)

[EMAIL_VIDEO_2]

🔒 Segurança:
• Senhas de aplicativo
• Autenticação de 2 fatores
• OAuth quando disponível
• Verificar certificados SSL`,
      videoId: 'ZyJ1QF8m3wE', // Tutorial configuração IMAP Gmail
      videoTitle: 'Configuração de Email IMAP no Gmail'
    },
    {
      title: 'Regras e Filtros de Email',
      category: 'Organização',
      description: 'Como criar regras automáticas para organizar emails',
      content: `📁 Regras e Filtros de Email

🎯 Benefícios das Regras
• Organização automática
• Redução de spam
• Priorização de mensagens
• Economia de tempo
• Caixa de entrada limpa

🔧 Criando Regras no Gmail

1️⃣ Arquivo > Gerenciar Regras e Alertas
2️⃣ Nova Regra > Regra em Branco
3️⃣ Definir condições:
   - Remetente específico
   - Assunto contém palavras
   - Enviado para mim
   - Tamanho do anexo
   - Importância

4️⃣ Definir ações:
   - Mover para pasta
   - Marcar como lido
   - Encaminhar para
   - Definir categoria
   - Excluir mensagem

5️⃣ Exceções (opcional):
   - Exceto se marcado como importante
   - Exceto se de pessoas específicas

🔧 Filtros no Gmail

1️⃣ Configurações > Filtros e endereços bloqueados
2️⃣ Criar novo filtro
3️⃣ Critérios de busca:
   - De/Para
   - Assunto
   - Contém palavras
   - Não contém
   - Tem anexo

4️⃣ Ações do filtro:
   - Aplicar marcador
   - Arquivar
   - Marcar como importante
   - Encaminhar para
   - Excluir

💡 Exemplos Práticos

📋 Regra para Newsletters:
• Condição: Assunto contém "newsletter"
• Ação: Mover para pasta "Newsletters"

📋 Regra para Chefe:
• Condição: De = chefe@empresa.com
• Ação: Marcar como importante + som

📋 Regra para Spam:
• Condição: Corpo contém palavras suspeitas
• Ação: Mover para lixo eletrônico

[EMAIL_VIDEO_3]

⚠️ Cuidados:
• Testar regras antes de aplicar
• Ordem das regras importa
• Backup antes de mudanças
• Monitorar resultados`,
      videoId: 'SOyGGJnaCN8', // Tutorial regras Gmail em português
      videoTitle: 'Criando Regras de Email no Gmail'
    },
    {
      title: 'Backup e Sincronização de Emails',
      category: 'Backup',
      description: 'Como fazer backup e sincronizar emails entre dispositivos',
      content: `💾 Backup e Sincronização de Emails

📋 Estratégias de Backup

🔄 Backup Automático:
• IMAP mantém emails no servidor
• Backup do provedor (Google, Microsoft)
• Exportação periódica
• Arquivos PST/OST

🔧 Exportação no Gmail

1️⃣ Arquivo > Abrir e Exportar > Importar/Exportar
2️⃣ Exportar para arquivo
3️⃣ Arquivo de Dados (.pst)
4️⃣ Selecionar pasta ou conta completa
5️⃣ Escolher local de destino
6️⃣ Definir senha (opcional)

🔧 Backup Gmail (Google Takeout)

1️⃣ Acessar takeout.google.com
2️⃣ Selecionar "Email"
3️⃣ Escolher formato: mbox
4️⃣ Método de entrega
5️⃣ Criar arquivo
6️⃣ Download quando pronto

🔄 Sincronização Multi-dispositivo

📱 Configuração IMAP:
• Mesmo servidor em todos dispositivos
• Pastas sincronizadas automaticamente
• Status de leitura compartilhado
• Rascunhos em comum

💻 Gmail em múltiplos PCs:
• Conta Exchange/Office 365
• Arquivo OST local
• Configurações sincronizadas
• PST para dados locais

📧 Aplicativos recomendados:

Mobile:
• Gmail (iOS/Android)
• Gmail (multiplataforma)
• Apple Mail (iOS)
• Samsung Email (Android)

Desktop:
• Microsoft Gmail
• Thunderbird (gratuito)
• Apple Mail (macOS)
• eM Client

[EMAIL_VIDEO_4]

🔒 Segurança do Backup:
• Criptografar arquivos PST
• Armazenar em local seguro
• Backup em nuvem criptografado
• Testar restauração periodicamente`,
      videoId: 'Ktor3rNsZpE', // Tutorial backup emails
      videoTitle: 'Backup de Emails no Gmail'
    },
    {
      title: 'Solução de Problemas de Email',
      category: 'Diagnóstico',
      description: 'Diagnóstico e resolução de problemas comuns de email',
      content: `🔧 Solução de Problemas de Email

⚠️ Problemas Comuns

📧 Não Consigo Enviar Emails:
• Verificar configurações SMTP
• Porta bloqueada pelo provedor
• Autenticação falhando
• Limite de envio atingido

📧 Não Recebo Emails:
• Verificar pasta de spam
• Configurações IMAP/POP3
• Caixa de email cheia
• Regras bloqueando mensagens

🔍 Diagnóstico Passo a Passo

1️⃣ Verificar Conectividade:
   ping smtp.provedor.com
   telnet smtp.provedor.com 587

2️⃣ Testar Configurações:
   - Servidor e portas corretos
   - SSL/TLS habilitado
   - Usuário e senha válidos

3️⃣ Verificar Logs:
   - Gmail: Arquivo > Informações > Configurações de Conta
   - Teste de Configurações de Conta
   - Log de atividades

🛠️ Soluções Específicas

💻 Gmail Travando:
• Modo Seguro: Gmail.exe /safe
• Reparar perfil: Control Panel > Mail
• Reconstruir índice de pesquisa
• Arquivos PST corrompidos

🌐 Problemas de Sincronização:
• Forçar envio/recebimento (F9)
• Verificar configurações de pasta
• Limpar cache offline
• Recriar perfil do Gmail

🔑 Problemas de Autenticação:
• Senha de aplicativo (Gmail, Yahoo)
• Autenticação de 2 fatores
• OAuth vs. autenticação básica
• Tokens expirados

[EMAIL_VIDEO_5]

🔧 Ferramentas Úteis:
• Microsoft Support and Recovery Assistant
• CanYouSeeMe.org (teste de portas)
• MX Toolbox (testes DNS/MX)
• Gmail Configuration Analyzer

⚡ Comandos Úteis:
Gmail.exe /resetnavpane
Gmail.exe /cleanprofile
Gmail.exe /cleanfreebusy`,
      videoId: 'N6Dpqe4-3eE', // Tutorial solução problemas email
      videoTitle: 'Solucionando Problemas de Email'
    },
    {
      title: 'Segurança em Emails',
      category: 'Segurança',
      description: 'Melhores práticas de segurança para emails corporativos',
      content: `🔒 Segurança em Emails

⚠️ Principais Ameaças

🎣 Phishing:
• Emails falsos solicitando dados
• Links maliciosos
• Anexos infectados
• Spoofing de domínio

💻 Malware:
• Vírus em anexos
• Ransomware
• Keyloggers
• Scripts maliciosos

🔐 Melhores Práticas

✅ Autenticação Forte:
• Senhas complexas únicas
• Autenticação de 2 fatores (2FA)
• Senhas de aplicativo
• Tokens de acesso

✅ Verificação de Emails:
• Verificar remetente real
• Não clicar em links suspeitos
• Confirmar solicitações por telefone
• Verificar URLs antes de clicar

🛡️ Configurações de Segurança

📧 Gmail Security:
1️⃣ Arquivo > Opções > Central de Confiabilidade
2️⃣ Configurações da Central de Confiabilidade
3️⃣ Email Seguro:
   - Criptografar mensagens
   - Assinar digitalmente
   - Certificados S/MIME

4️⃣ Anexos:
   - Bloquear tipos perigosos
   - Zona de segurança restrita
   - Não executar automaticamente

🔧 Gmail Security:
• Verificação em 2 etapas
• Alertas de atividade suspeita
• Aplicativos menos seguros: OFF
• Filtros de spam avançados

[EMAIL_VIDEO_6]

🚨 Sinais de Email Suspeito:
• Urgência excessiva
• Erros de gramática
• Links encurtados
• Anexos inesperados
• Solicitação de dados pessoais

💡 Em caso de suspeita:
1. NÃO abrir anexos
2. NÃO clicar em links
3. Verificar com TI
4. Reportar como spam
5. Excluir email`,
      videoId: 'BfFepKzbZ1I', // Tutorial segurança email
      videoTitle: 'Segurança em Emails Corporativos'
    },
    {
      title: 'Calendário e Agendamento',
      category: 'Produtividade',
      description: 'Uso eficiente do calendário integrado ao email',
      content: `📅 Calendário e Agendamento

🎯 Recursos do Calendário

📋 Tipos de Eventos:
• Reuniões presenciais
• Videoconferências
• Lembretes pessoais
• Eventos recorrentes
• Feriados

🔧 Criando Reuniões no Gmail

1️⃣ Calendário > Nova Reunião
2️⃣ Adicionar participantes
3️⃣ Definir horário e duração
4️⃣ Local ou link da reunião
5️⃣ Corpo da mensagem/agenda
6️⃣ Verificar disponibilidade
7️⃣ Enviar convite

⚙️ Configurações Avançadas:
• Lembretes automáticos
• Recorrência (diária, semanal, mensal)
• Categorias por cores
• Níveis de ocupação (livre, ocupado, ausente)
• Privacidade (público, privado)

📧 Gmail Calendar:

1️⃣ Google Calendar integrado
2️⃣ Criar evento > Adicionar convidados
3️⃣ Definir notificações
4️⃣ Video conferência automática (Meet)
5️⃣ Salas de reunião (Google Workspace)

🔄 Sincronização de Calendários

📱 Múltiplos Dispositivos:
• Exchange ActiveSync
• CalDAV (padrão aberto)
• iCloud Calendar (Apple)
• Google Calendar (Android)

💻 Aplicativos recomendados:
• Microsoft Gmail
• Google Calendar
• Apple Calendar
• Thunderbird + Lightning

[EMAIL_VIDEO_7]

💡 Dicas de Produtividade:
• Bloquear tempo para tarefas importantes
• Reuniões de 25 ou 50 minutos
• Buffer de 5-10 minutos entre reuniões
• Categorizar por projeto/cliente
• Usar cores para diferentes tipos`,
      videoId: 'fTLQi-Ye4-8', // Tutorial calendário Gmail
      videoTitle: 'Calendário e Reuniões no Gmail'
    },
    {
      title: 'Atalhos e Produtividade',
      category: 'Produtividade',
      description: 'Atalhos de teclado e dicas para usar email de forma mais eficiente',
      content: `⚡ Atalhos e Produtividade

⌨️ Atalhos Essenciais do Gmail

📧 Navegação:
• Ctrl + 1: Email
• Ctrl + 2: Calendário
• Ctrl + 3: Contatos
• Ctrl + 4: Tarefas
• F9: Enviar/Receber

📝 Composição:
• Ctrl + N: Novo email
• Ctrl + R: Responder
• Ctrl + Shift + R: Responder a todos
• Ctrl + F: Encaminhar
• F7: Verificar ortografia

🎯 Organização:
• Ctrl + Shift + V: Mover para pasta
• Delete: Excluir
• Ctrl + Q: Marcar como lido
• Ctrl + U: Marcar como não lido
• Ctrl + Shift + G: Sinalizar

🔍 Pesquisa Avançada:
• Ctrl + E: Pesquisar
• from:nome: Emails de pessoa específica
• subject:palavra: Buscar no assunto
• has:attachment: Com anexos
• received:today: Recebidos hoje

⚡ Gmail Shortcuts:

📧 Navegação (habilitar em configurações):
• j/k: Email anterior/próximo
• o ou Enter: Abrir email
• u: Voltar à lista
• gi: Ir para caixa de entrada

🎯 Ações:
• c: Compor
• r: Responder
• a: Responder a todos
• f: Encaminhar
• s: Destacar
• !: Marcar como spam

💡 Dicas de Produtividade

📋 Inbox Zero:
1. Excluir (não preciso)
2. Delegar (encaminhar)
3. Responder (< 2 minutos)
4. Adiar (snooze/agendar)
5. Fazer (converter em tarefa)

🕐 Gestão de Tempo:
• Verificar email 2-3x por dia
• Desativar notificações desnecessárias
• Usar templates para respostas comuns
• Processar emails em lotes

[EMAIL_VIDEO_8]

🎯 Templates de Resposta:
• Confirmação de recebimento
• Ausência temporária
• Redirecionamento
• Agradecimento padrão`,
      videoId: 'ErLQ7PnVc3E', // Tutorial atalhos Gmail
      videoTitle: 'Atalhos e Produtividade no Email'
    }
  ];

  const handleVoltar = () => {
    navigate('/');
  };

  const handleToggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Assinaturas': '#2563eb',
      'Configuração': '#059669', 
      'Organização': '#d97706',
      'Backup': '#0891b2',
      'Diagnóstico': '#dc2626',
      'Segurança': '#7c3aed',
      'Produtividade': '#be185d'
    };
    return colors[category] || '#6b7280';
  };

  return (
    <div className="tela-emails">
      {/* Back Button */}
      <button className="back-button animate-slide-down" onClick={handleVoltar}>
        ← Voltar para Início
      </button>

      {/* Header Section */}
      <div className="emails-header animate-slide-down animate-delay-1">
        <div className="header-title">
          <span className="title-icon">📧</span>
          <h1 className="page-title">E-mails & Acessos</h1>
        </div>
        <p className="page-description">
          Configuração, organização e melhores práticas para email corporativo
        </p>
      </div>

      {/* Email Information Grid */}
      <div className="emails-grid animate-slide-down animate-delay-2">
        {informacoesEmails.map((info, index) => (
          <div key={index} className={`emails-card ${expandedCard === index ? 'expanded' : ''} animate-slide-down animate-delay-${3 + index}`}>
            <div className="emails-main">
              <div className="emails-content">
                <div className="emails-header-card">
                  <h3 className="emails-title">{info.title}</h3>
                  <span 
                    className="emails-category" 
                    style={{ backgroundColor: getCategoryColor(info.category) }}
                  >
                    {info.category}
                  </span>
                </div>
                <p className="emails-description">{info.description}</p>
              </div>
              <div className="emails-actions">
                <button 
                  className="eye-button"
                  onClick={() => handleToggleExpand(index)}
                  title="Visualizar detalhes"
                >
                  <span className="eye-icon">👁️</span>
                </button>
              </div>
            </div>
            
            {/* Expanded Content */}
            {expandedCard === index && (
              <div className="emails-expanded">
                <div className="info-preview">
                  <h5>Informações detalhadas:</h5>
                  <div className="preview-content">
                    {info.content.includes('[EMAIL_VIDEO_') ? (
                      <div>
                        <pre>{info.content.split('[EMAIL_VIDEO_')[0]}</pre>
                        <div className="video-container">
                          <h6 className="video-title">{info.videoTitle}</h6>
                          <div className="video-wrapper">
                            <iframe
                              src={`https://www.youtube.com/embed/${info.videoId}?rel=0&modestbranding=1&hl=pt-BR`}
                              title={info.videoTitle}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="embedded-video"
                            ></iframe>
                          </div>
                        </div>
                        <pre>{info.content.split(/\[EMAIL_VIDEO_\d+\]/)[1]}</pre>
                      </div>
                    ) : (
                      <pre>{info.content}</pre>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TelaEmails;