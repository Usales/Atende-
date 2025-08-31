import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaSoftwares.css';

function TelaSoftwares() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);

  const informacoesSoftwares = [
    {
      title: 'Microsoft Office (Pacote Office)',
      category: 'Office',
      description: 'Instalação e configuração do Microsoft Office 365 e versões locais',
      content: `📄 Microsoft Office (Pacote Office)

💼 Versões Disponíveis

🔹 Microsoft 365 (Assinatura):
• Office 365 Business Basic: Apps web
• Office 365 Business Standard: Apps desktop + web
• Office 365 Business Premium: Completo + segurança
• Office 365 Personal: Uso doméstico
• Sincronização na nuvem OneDrive

🔹 Office 2021 (Licença Perpétua):
• Office Home & Student 2021
• Office Home & Business 2021
• Office Professional 2021
• Licença única, sem updates

🔧 Instalação Microsoft 365

1️⃣ Através do Site Official:
   - Acesse office.com
   - Faça login com conta Microsoft
   - Clique em "Instalar Office"
   - Execute o download
   - Aguarde instalação automática

2️⃣ Instalação Corporativa:
   - Office Deployment Tool (ODT)
   - Arquivo configuration.xml
   - Comando: setup.exe /configure config.xml
   - Instalação silenciosa em lote
   - Gerenciamento via Group Policy

🔧 Configuração Inicial

📧 Configurar Email:
• Outlook: Adicionar conta de email
• Configuração automática (Exchange)
• Configuração manual IMAP/POP3
• Perfis múltiplos se necessário
• Arquivos PST para backup

☁️ OneDrive Sincronização:
• Login automático após instalação
• Selecionar pastas para sincronizar
• Configurar backup automático
• Compartilhamento de arquivos
• Versões anteriores habilitadas

💡 Dicas de Licenciamento:
• 1 licença = 5 dispositivos (Microsoft 365)
• Verificar compatibilidade Windows
• Desinstalar versões antigas primeiro
• Ativar com chave produto ou conta
• Suporte técnico Microsoft incluído`
    },
    {
      title: 'LibreOffice (Alternativa Gratuita)',
      category: 'Office Gratuito',
      description: 'Instalação do LibreOffice como alternativa gratuita ao Microsoft Office',
      content: `📝 LibreOffice (Alternativa Gratuita)

🆓 Sobre o LibreOffice

✅ Vantagens:
• 100% gratuito e código aberto
• Compatível com formatos Microsoft
• Sem necessidade de licenças
• Funciona offline completamente
• Suporte à múltiplas linguagens
• Atualizações regulares gratuitas

📋 Aplicações Incluídas:
• Writer (equivalente ao Word)
• Calc (equivalente ao Excel)
• Impress (equivalente ao PowerPoint)
• Draw (desenho vetorial)
• Base (banco de dados)
• Math (editor de fórmulas)

🔧 Instalação LibreOffice

1️⃣ Download Oficial:
   - Acesse libreoffice.org
   - Clique em "Download LibreOffice"
   - Escolha seu sistema operacional
   - Baixe a versão estável mais recente
   - Execute o instalador

2️⃣ Processo de Instalação:
   - Execute como administrador
   - Escolha "Instalação Típica"
   - Marcar tipos de arquivo associados
   - Aguardar conclusão
   - Reiniciar se solicitado

🔧 Configuração Inicial

🌐 Idioma e Localização:
• Ferramentas > Opções > Configurações de idioma
• Definir português brasileiro
• Configurar corretor ortográfico
• Dicionário de sinônimos
• Configurar moeda local

📄 Compatibilidade Microsoft:
• Ferramentas > Opções > Carregar/Salvar
• Sempre salvar em formato Microsoft
• Configurar como padrão se necessário
• Testar abertura de documentos .docx
• Verificar formatação preservada

💡 Dicas Migração Microsoft:
• Treinar usuários nas diferenças
• Converter templates existentes
• Configurar impressoras adequadamente
• Backup antes da migração completa
• Suporte durante período transição`
    },
    {
      title: 'Google Drive Desktop',
      category: 'Nuvem',
      description: 'Instalação e configuração do Google Drive para sincronização de arquivos',
      content: `☁️ Google Drive Desktop

🌐 Sobre Google Drive Desktop

✅ Recursos Principais:
• Sincronização automática na nuvem
• 15GB gratuitos (compartilhados com Gmail)
• Acesso offline aos arquivos
• Colaboração em tempo real
• Versionamento de arquivos
• Compartilhamento seguro

💼 Planos Disponíveis:
• Gratuito: 15GB
• Google One Basic: 100GB
• Google One Standard: 200GB
• Google Workspace: Para empresas
• Armazenamento ilimitado (planos business)

🔧 Instalação Google Drive Desktop

1️⃣ Download e Instalação:
   - Acesse drive.google.com/drive/download
   - Clique em "Download para Desktop"
   - Execute GoogleDriveSetup.exe
   - Fazer login com conta Google
   - Autorizar acesso aos arquivos

2️⃣ Configuração Inicial:
   - Escolher pasta local sincronização
   - Configurar qual conteúdo sincronizar
   - Modo streaming vs. espelhar
   - Configurar backup automático
   - Definir configurações de rede

🔧 Modos de Sincronização

💾 Streaming (Recomendado):
• Arquivos ficam na nuvem
• Download sob demanda
• Economia espaço local
• Acesso rápido via ícones
• Marca arquivos disponíveis offline

📁 Espelhamento:
• Arquivos baixados localmente
• Sincronização bidirecional
• Requer espaço em disco
• Acesso totalmente offline
• Backup local completo

💡 Dicas de Uso Eficiente:
• Organizar com pastas lógicas
• Usar Google Workspace para produtividade
• Configurar backup automático importante
• Compartilhamento inteligente com equipes
• Monitorar uso de armazenamento regularmente`
    },
    {
      title: 'Navegadores Web Essenciais',
      category: 'Navegadores',
      description: 'Instalação e configuração de Chrome, Firefox, Edge e outros navegadores',
      content: `🌐 Navegadores Web Essenciais

🔧 Google Chrome

📥 Instalação Chrome:
• Acesse google.com/chrome
• Clique "Baixar Chrome"
• Execute ChromeSetup.exe
• Instalação automática
• Configurar como padrão

⚙️ Configurações Empresariais:
• Sincronização conta Google
• Extensões corporativas
• Políticas de grupo
• Certificados empresariais
• Configurações de proxy

🔧 Mozilla Firefox

🦊 Instalação Firefox:
• Acesse mozilla.org/firefox
• Download versão mais recente
• Execute Firefox Installer
• Importar dados de outros navegadores
• Configurar perfil usuário

🔒 Configurações Privacidade:
• Proteção aprimorada contra rastreamento
• Configurações cookies
• HTTPS-Only Mode
• Bloqueador pop-ups
• Senha master

🔧 Microsoft Edge

🌀 Edge (Chromium):
• Pré-instalado Windows 10/11
• Download: microsoft.com/edge
• Baseado no Chromium
• Integração Microsoft 365
• Enterprise features

💼 Recursos Empresariais:
• Azure AD integration
• Windows Hello
• SmartScreen protection
• Internet Explorer mode
• Group Policy management

🔧 Extensões Essenciais

🔐 Segurança:
• uBlock Origin (bloqueador ads)
• LastPass/Bitwarden (senhas)
• HTTPS Everywhere
• Privacy Badger
• Web of Trust (WOT)

💼 Produtividade:
• Grammarly (correção texto)
• Evernote Web Clipper
• OneTab (organizar abas)
• Momentum (nova aba)
• Google Translate

💡 Dicas Multi-navegador:
• Manter múltiplos navegadores
• Usar profiles separados
• Sincronizar configurações
• Testes compatibilidade
• Backup configurações importantes`
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
      'Office': '#2563eb',
      'Office Gratuito': '#059669', 
      'Nuvem': '#0891b2',
      'Navegadores': '#7c3aed',
      'Utilidades': '#d97706',
      'PDF': '#dc2626',
      'Comunicação': '#be185d',
      'Segurança': '#65a30d'
    };
    return colors[category] || '#6b7280';
  };

  return (
    <div className="tela-softwares">
      {/* Back Button */}
      <button className="back-button animate-slide-down" onClick={handleVoltar}>
        ← Voltar para Início
      </button>

      {/* Header Section */}
      <div className="softwares-header animate-slide-down animate-delay-1">
        <div className="header-title">
          <span className="title-icon">🌐</span>
          <h1 className="page-title">Softwares & Aplicações</h1>
        </div>
        <p className="page-description">
          Instalação e configuração de softwares essenciais para escritórios e empresas
        </p>
      </div>

      {/* Software Information Grid */}
      <div className="softwares-grid animate-slide-down animate-delay-2">
        {informacoesSoftwares.map((info, index) => (
          <div 
            key={index}
            className={`software-card ${expandedCard === index ? 'expanded' : ''} animate-slide-down animate-delay-${3 + index}`}
            onClick={() => handleToggleExpand(index)}
          >
            <div className="card-header">
              <div className="card-title-section">
                <h3 className="card-title">{info.title}</h3>
                <span 
                  className="card-category"
                  style={{ backgroundColor: getCategoryColor(info.category) }}
                >
                  {info.category}
                </span>
              </div>
              <div className="expand-icon">
                {expandedCard === index ? '−' : '+'}
              </div>
            </div>
            
            <p className="card-description">{info.description}</p>
            
            {expandedCard === index && (
              <div className="card-content">
                <pre>{info.content}</pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TelaSoftwares;