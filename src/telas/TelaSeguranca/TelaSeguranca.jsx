import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaSeguranca.css';

function TelaSeguranca() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);

  const informacoesSeguranca = [
    {
      title: 'Antivírus Gratuitos Eficazes',
      category: 'Antivírus',
      description: 'Melhores antivírus gratuitos para proteção completa do sistema',
      content: `🛡️ Antivírus Gratuitos Eficazes

🥇 Top Antivírus Gratuitos

🔹 Malwarebytes Anti-Malware:
• Especialista em malware e ransomware
• Scan rápido e completo
• Proteção em tempo real (versão premium)
• Remoção de adware e spyware
• Interface simples e intuitiva

🔹 Avast Free Antivirus:
• Proteção em tempo real
• Wi-Fi Security Scanner
• Browser Cleanup
• Game Mode para jogos
• Password Manager básico

🔹 AVG AntiVirus Free:
• Proteção contra vírus e malware
• Email Shield
• Link Scanner
• File Shield em tempo real
• Performance Scanner

🔹 Windows Defender (Nativo):
• Integrado ao Windows 10/11
• Proteção em tempo real
• Firewall integrado
• SmartScreen Filter
• Atualizações automáticas

🔧 Como Instalar Malwarebytes

1️⃣ Download:
   - Acesse malwarebytes.com
   - Clique em "Download Gratuito"
   - Aguarde o download

2️⃣ Instalação:
   - Execute o arquivo baixado
   - Aceite os termos de uso
   - Escolha instalação completa
   - Aguarde a conclusão

3️⃣ Primeiro Scan:
   - Abra o Malwarebytes
   - Clique em "Verificar Agora"
   - Aguarde o scan completo
   - Remova ameaças encontradas

⚠️ Dicas Importantes:
• Mantenha sempre atualizado
• Execute scans semanais
• Não use múltiplos antivírus simultaneamente
• Configure exclusões se necessário`
    },
    {
      title: 'VPNs e Proteção de Navegação',
      category: 'VPN',
      description: 'Como usar VPNs para proteção e privacidade online',
      content: `🌐 VPNs e Proteção de Navegação

🔐 O que é uma VPN?

🛡️ Virtual Private Network:
• Criptografa sua conexão
• Oculta seu endereço IP real
• Protege dados em redes públicas
• Permite acesso a conteúdo bloqueado
• Aumenta privacidade online

🥇 ProtonVPN - Recomendado

✅ Vantagens:
• Versão gratuita disponível
• Sem logs de atividade
• Servidores em vários países
• Criptografia militar (AES-256)
• Kill Switch automático
• Interface amigável

📊 Planos ProtonVPN:
• Free: 3 países, 1 dispositivo
• Plus: Todos os países, 10 dispositivos
• Streaming e P2P liberados

🔧 Como Configurar ProtonVPN

1️⃣ Cadastro:
   - Acesse protonvpn.com
   - Crie conta gratuita
   - Confirme email

2️⃣ Download:
   - Baixe app para seu sistema
   - Windows, Mac, iOS, Android
   - Extensões para navegadores

3️⃣ Configuração:
   - Faça login no app
   - Escolha servidor
   - Clique em "Conectar"
   - Verifique IP em whatismyip.com

🌍 Outras VPNs Recomendadas:

🔹 Windscribe:
• 10GB grátis por mês
• Servidores em 10 países
• Ad Blocker integrado

🔹 TunnelBear:
• 500MB grátis por mês
• Interface amigável
• Servidores em 23 países

⚡ Quando Usar VPN:
• Wi-Fi público (cafés, aeroportos)
• Home office
• Streaming geo-bloqueado
• Torrents e P2P
• Países com censura`
    },
    {
      title: 'Proteção de Senhas e 2FA',
      category: 'Autenticação',
      description: 'Gerenciamento seguro de senhas e autenticação de dois fatores',
      content: `🔑 Proteção de Senhas e 2FA

🛡️ Gerenciadores de Senha

🥇 Bitwarden (Gratuito):
• Ilimitadas senhas
• Sincronização entre dispositivos
• Gerador de senhas seguras
• Autofill automático
• Código aberto

🥈 LastPass (Limitado):
• Um tipo de dispositivo grátis
• Senha master
• Compartilhamento seguro
• Auditoria de senhas

🔧 Como Configurar Bitwarden

1️⃣ Criação de Conta:
   - Acesse bitwarden.com
   - Crie conta com email
   - Defina senha master forte
   - Confirme email

2️⃣ Instalação:
   - Baixe extensão do navegador
   - Instale app mobile
   - Faça login em todos dispositivos

3️⃣ Importação de Senhas:
   - Exportar do navegador atual
   - Importar para Bitwarden
   - Deletar senhas do navegador

🔐 Autenticação de Dois Fatores (2FA)

📱 Apps Recomendados:
• Google Authenticator
• Microsoft Authenticator
• Authy (backup em nuvem)

🔧 Como Ativar 2FA:

1️⃣ Na Conta:
   - Acesse configurações de segurança
   - Procure "Autenticação de dois fatores"
   - Escaneie QR Code com app
   - Insira código de verificação

2️⃣ Backup Codes:
   - Salve códigos de backup
   - Guarde em local seguro
   - Use se perder o celular

💡 Dicas de Senhas Seguras:
• Mínimo 12 caracteres
• Misture maiúsculas, minúsculas, números
• Use símbolos especiais
• Não reutilize senhas
• Evite informações pessoais`
    },
    {
      title: 'Firewall e Proteção de Rede',
      category: 'Rede',
      description: 'Configuração de firewall e proteção da rede doméstica',
      content: `🔥 Firewall e Proteção de Rede

🛡️ Windows Defender Firewall

🔧 Configuração Básica:

1️⃣ Acessar Firewall:
   - Painel de Controle > Sistema e Segurança
   - Windows Defender Firewall
   - Configurações avançadas

2️⃣ Regras de Entrada:
   - Nova Regra > Programa
   - Selecionar executável
   - Permitir ou Bloquear conexão
   - Aplicar a todos perfis

3️⃣ Regras de Saída:
   - Controlar tráfego de saída
   - Bloquear apps suspeitos
   - Permitir apenas necessários

🌐 Proteção do Roteador

🔧 Configurações Essenciais:

1️⃣ Senha Admin:
   - Alterar senha padrão
   - Usar senha forte
   - Desabilitar WPS se não usar

2️⃣ Rede Wi-Fi:
   - WPA3 ou WPA2 apenas
   - Senha Wi-Fi forte
   - Ocultar SSID (opcional)
   - Guest Network separada

3️⃣ Firmware:
   - Manter sempre atualizado
   - Verificar updates mensalmente
   - Ativar auto-update se disponível

🔍 DNS Seguros

🛡️ Opções Recomendadas:
• Cloudflare: 1.1.1.1 / 1.0.0.1
• Google: 8.8.8.8 / 8.8.4.4
• Quad9: 9.9.9.9 / 149.112.112.112

🔧 Como Alterar DNS:

1️⃣ Windows:
   - Configurações > Rede e Internet
   - Alterar opções do adaptador
   - Propriedades da conexão
   - Protocolo IPv4 > Propriedades
   - Usar os servidores DNS

2️⃣ Roteador:
   - Acessar painel admin (192.168.1.1)
   - Configurações de rede
   - DNS primário e secundário
   - Salvar configurações

⚠️ Sinais de Rede Comprometida:
• Internet lenta inexplicável
• Dispositivos desconhecidos conectados
• Redirecionamentos estranhos
• Pop-ups excessivos`
    },
    {
      title: 'Backup e Recuperação de Dados',
      category: 'Backup',
      description: 'Estratégias de backup e proteção contra perda de dados',
      content: `💾 Backup e Recuperação de Dados

🎯 Regra 3-2-1 de Backup

📊 Estratégia Ideal:
• 3 cópias dos dados importantes
• 2 mídias diferentes (HD + Nuvem)
• 1 cópia offsite (fora de casa)

☁️ Backup em Nuvem (Gratuito)

🔹 Google Drive:
• 15GB grátis
• Sincronização automática
• Acesso multiplataforma
• Compartilhamento fácil

🔹 OneDrive:
• 5GB grátis (Microsoft)
• Integração com Office
• Histórico de versões
• Backup de fotos automático

🔹 Dropbox:
• 2GB grátis
• Sincronização rápida
• Compartilhamento avançado
• Recuperação de arquivos deletados

💽 Backup Local

🔧 Backup do Windows:

1️⃣ Histórico de Arquivos:
   - Configurações > Atualização e Segurança
   - Backup > Histórico de Arquivos
   - Adicionar unidade externa
   - Ativar backup automático

2️⃣ Imagem do Sistema:
   - Painel de Controle > Sistema
   - Backup e Restauração
   - Criar imagem do sistema
   - Escolher destino (HD externo)

🛠️ Softwares de Backup

🔹 AOMEI Backupper (Gratuito):
• Backup completo do sistema
• Backup incremental/diferencial
• Clone de disco
• Backup agendado

🔹 Macrium Reflect Free:
• Imagem do disco
• Backup incremental
• Boot rescue media
• Verificação de backup

🔧 Como Restaurar Backup:

1️⃣ Arquivos Individuais:
   - Histórico de Arquivos
   - Procurar arquivo desejado
   - Restaurar versão anterior

2️⃣ Sistema Completo:
   - Boot com mídia de recuperação
   - Selecionar imagem de backup
   - Restaurar para disco original

⚡ Cronograma de Backup:
• Documentos: Diário (automático)
• Fotos/Vídeos: Semanal
• Sistema completo: Mensal
• Verificação: Trimestral`
    },
    {
      title: 'Phishing e Engenharia Social',
      category: 'Prevenção',
      description: 'Como identificar e se proteger contra golpes online',
      content: `🎣 Phishing e Engenharia Social

⚠️ O que é Phishing?

🚨 Técnicas Comuns:
• Emails falsos de bancos
• Links maliciosos
• Páginas falsas de login
• Anexos infectados
• SMS e chamadas fraudulentas

🔍 Como Identificar Phishing

📧 Sinais de Email Suspeito:
• Urgência excessiva ("Ação imediata")
• Erros de gramática/ortografia
• Remetente suspeito ou genérico
• Links encurtados ou estranhos
• Solicitação de dados pessoais
• Anexos inesperados

🔗 Verificação de Links:
• Passe o mouse sobre o link
• Verifique URL real no canto inferior
• Use verificadores como VirusTotal
• Digite URLs manualmente

🛡️ Proteção Contra Golpes

✅ Melhores Práticas:
• Nunca clique em links suspeitos
• Verifique remetente por telefone
• Use sites oficiais sempre
• Mantenha softwares atualizados
• Desconfie de ofertas impossíveis

🏦 Golpes Bancários Comuns:
• "Conta será bloqueada"
• "Cartão clonado"
• "Atualização de dados"
• "PIX não autorizado"
• "Cashback suspeito"

📱 Proteção no WhatsApp:
• Verificação em duas etapas
• Não clique em links desconhecidos
• Confirme identidade por ligação
• Cuidado com QR Codes estranhos

🛠️ Ferramentas de Verificação

🔍 Sites Úteis:
• VirusTotal.com - Verificar links
• HaveIBeenPwned.com - Vazamentos
• ScamAdviser.com - Sites confiáveis
• URLVoid.com - Reputação de URLs

🔧 Extensões de Segurança:
• uBlock Origin (Ad Blocker)
• Web of Trust (WOT)
• Bitdefender TrafficLight
• Norton Safe Web

🚨 Se Foi Vítima:
1. Mude senhas imediatamente
2. Entre em contato com banco
3. Monitore extratos
4. Registre boletim de ocorrência
5. Informe outros sobre o golpe`
    },
    {
      title: 'Navegação Segura e Privacidade',
      category: 'Privacidade',
      description: 'Configurações de navegador para máxima segurança e privacidade',
      content: `🌐 Navegação Segura e Privacidade

🔒 Configurações do Navegador

🔧 Google Chrome:

1️⃣ Privacidade e Segurança:
   - Configurações > Privacidade e segurança
   - Cookies: Bloquear terceiros
   - Navegação segura: Proteção avançada
   - Sem rastreamento: Ativado

2️⃣ Configurações Avançadas:
   - Limpar dados ao fechar
   - Desativar preenchimento automático
   - Gerenciar senhas: Desativar se usar externo
   - Safe Browsing: Sempre ativo

🦊 Mozilla Firefox:

1️⃣ Privacidade Aprimorada:
   - Configurações > Privacidade e Segurança
   - Proteção aprimorada: Rigorosa
   - Não rastrear: Sempre
   - HTTPS-Only Mode: Ativado

2️⃣ DNS over HTTPS:
   - Ativar DNS seguro
   - Usar Cloudflare ou NextDNS
   - Proteção contra malware

🛡️ Extensões de Segurança

🥇 Essenciais:
• uBlock Origin (Bloqueador)
• Privacy Badger (Anti-rastreamento)
• HTTPS Everywhere (Forçar HTTPS)
• Decentraleyes (Proteção CDN)

🥈 Adicionais:
• ClearURLs (Limpa parâmetros)
• Cookie AutoDelete (Limpa cookies)
• NoScript (Controle JavaScript)

🔍 Mecanismos de Busca Privados

🔹 DuckDuckGo:
• Não armazena dados pessoais
• Sem bolha de filtro
• Sem rastreamento
• Interface limpa

🔹 Startpage:
• Resultados do Google anonimizados
• Proxy de páginas
• Sem logs ou cookies
• Baseado na Holanda

🔹 Searx:
• Código aberto
• Múltiplas instâncias
• Sem rastreamento
• Personalizável

🕵️ Modo Incógnito/Privado

✅ O que Protege:
• Histórico local
• Cookies da sessão
• Dados de formulários
• Senhas temporárias

❌ O que NÃO Protege:
• ISP ainda vê tráfego
• Sites podem rastrear
• Empregador pode monitorar
• Governo pode interceptar

🛠️ Configurações Avançadas:
• Desativar WebRTC
• Spoofing de User-Agent
• Bloquear fingerprinting
• VPN sempre ativo`
    },
    {
      title: 'Segurança em Dispositivos Móveis',
      category: 'Mobile',
      description: 'Proteção de smartphones e tablets contra ameaças',
      content: `📱 Segurança em Dispositivos Móveis

🛡️ Configurações Básicas de Segurança

🔒 Android:

1️⃣ Bloqueio de Tela:
   - PIN forte (6+ dígitos)
   - Biometria + PIN/senha
   - Bloqueio automático: 1-2 min
   - Desativar notificações na tela bloqueada

2️⃣ Configurações de Segurança:
   - Play Protect ativado
   - Fontes desconhecidas: Desabilitado
   - Verificar apps: Sempre
   - Localizar dispositivo: Ativado

🍎 iOS (iPhone):

1️⃣ Face ID/Touch ID:
   - Configurar biometria
   - Requer código para acesso
   - Apagar dados após 10 tentativas
   - Tempo de bloqueio mínimo

2️⃣ Privacidade:
   - Rastreamento de apps: Perguntar
   - Localização: Apenas quando necessário
   - Análise: Não compartilhar
   - Siri: Desabilitar na tela bloqueada

📦 Apps de Segurança Mobile

🔹 Malwarebytes Mobile:
• Scan de malware
• Proteção web
• Análise de privacidade
• Bloqueio de chamadas

🔹 Bitdefender Mobile Security:
• Antivírus em tempo real
• Proteção web
• Anti-theft
• VPN integrada

🔹 Lookout Personal (Gratuito):
• Proteção contra malware
• Backup de contatos
• Localização do dispositivo
• Alerta de dados vazados

📱 Boas Práticas Mobile

✅ Downloads Seguros:
• Apenas lojas oficiais (Play Store/App Store)
• Verificar avaliações e downloads
• Ler permissões solicitadas
• Evitar apps muito novos sem histórico

🔐 Gestão de Permissões:
• Revisar permissões regularmente
• Localização: Apenas quando necessário
• Câmera/Microfone: Apps confiáveis
• Contatos: Apenas apps relevantes

📶 Wi-Fi Público:
• Evitar quando possível
• Sempre usar VPN
• Desativar conexão automática
• Não acessar bancos/compras

🚨 Sinais de Comprometimento:
• Bateria esgotando rapidamente
• Dados móveis alto sem explicação
• Apps desconhecidos instalados
• Comportamento estranho do sistema

🛠️ Ferramentas de Emergência:
• Find My Device (Android)
• Find My iPhone (iOS)
• Remote wipe ativado
• Backup automático configurado`
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
      'Antivírus': '#dc2626',
      'VPN': '#059669', 
      'Autenticação': '#7c3aed',
      'Rede': '#2563eb',
      'Backup': '#0891b2',
      'Prevenção': '#d97706',
      'Privacidade': '#be185d',
      'Mobile': '#65a30d'
    };
    return colors[category] || '#6b7280';
  };

  return (
    <div className="tela-seguranca">
      {/* Back Button */}
      <button className="back-button animate-slide-down" onClick={handleVoltar}>
        ← Voltar para Início
      </button>

      {/* Header Section */}
      <div className="seguranca-header animate-slide-down animate-delay-1">
        <div className="header-title">
          <span className="title-icon">🔒</span>
          <h1 className="page-title">Segurança</h1>
        </div>
        <p className="page-description">
          Proteção completa para sistemas, dados e navegação online
        </p>
      </div>

      {/* Security Information Grid */}
      <div className="seguranca-grid animate-slide-down animate-delay-2">
        {informacoesSeguranca.map((info, index) => (
          <div 
            key={index}
            className={`seguranca-card ${expandedCard === index ? 'expanded' : ''} animate-slide-down animate-delay-${3 + index}`}
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

export default TelaSeguranca;