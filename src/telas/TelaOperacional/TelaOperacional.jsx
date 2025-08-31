import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaOperacional.css';
import linuxImage from '../../assets/images/linux.png';

function TelaOperacional() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);

  const informacoesOperacional = [
    {
      title: 'Hyper-V - Criação de Máquinas Virtuais',
      category: 'Virtualização',
      description: 'Como habilitar e usar o Hyper-V para criar VMs no Windows',
      content: `🖥️ Configuração do Hyper-V

✅ Habilitando o Hyper-V

1️⃣ Verificar compatibilidade:
   - Windows 10/11 Pro, Enterprise ou Education
   - Processador com suporte à virtualização
   - Mínimo 4GB RAM (recomendado 8GB+)

2️⃣ Habilitar via PowerShell (Admin):
   Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All

3️⃣ Ou via Painel de Controle:
   - Programas > Recursos do Windows
   - Marcar "Hyper-V"
   - Reiniciar o sistema

🎯 Criando uma Máquina Virtual

1️⃣ Abrir Gerenciador do Hyper-V
2️⃣ Botão direito em cima do seu DESKTOP ou Notebook > Novo > Máquina Virtual
3️⃣ Assistente de configuração:
   - Dê um Nome da VM
   Selecione[✔] Armazenar a máquina virtual em outro local e logo abaixo o diretório que vai mantela(Opcional).
   - Geração (Geração 2 para sistemas UEFI, praticamente todos usam 2 Geração)
   - Memória: mínimo 2024MB
   - Conexão: Default Switch
   - Tamanho: 40-60GB recomendado
   
[LINUX_IMAGE_PLACEHOLDER]

   - Selecione: Instalar um Sistema Operacional a partir de um arquivo de imagem.
   - Selecione o arquivo por meio do diretório, o arquivo deve ser uma ISO.

4️⃣ Configurações importantes:
   - Botão direito em cima da VM criada > Configurações > Segurança
   - Desabilite a opção (habilitar inicilização segura)
   - Em Configurações > Processadores
   - Defina os rocessadores entre: 2-4 cores`
   
    },
    {
      title: 'Instalação do Windows 10/11',
      category: 'Instalação',
      description: 'Guia completo para instalação limpa do Windows',
      content: `💿 Instalação do Windows 10/11

📋 Pré-requisitos
• ISO do Windows (site oficial Microsoft)
• Pendrive 8GB+ ou DVD
• Chave de produto válida
• Backup dos dados importantes

🔧 Preparação da Mídia
1️⃣ Download da ferramenta Media Creation Tool
2️⃣ Executar como administrador
3️⃣ Criar mídia de instalação
4️⃣ Selecionar idioma, edição e arquitetura

⚙️ Processo de Instalação

1️⃣ Boot pelo pendrive/DVD:
   - Acessar BIOS/UEFI (F2, F12, DEL)
   - Alterar ordem de boot
   - Secure Boot: desabilitar se necessário

2️⃣ Instalação:
   - Selecionar idioma e teclado
   - "Instalar agora"
   - Inserir chave do produto
   - Aceitar termos de licença

3️⃣ Tipo de instalação:
   - Personalizada (instalação limpa)
   - Selecionar/formatar partição
   - Aguardar cópia dos arquivos

4️⃣ Configuração inicial:
   - Região e idioma
   - Conta Microsoft ou local
   - Configurações de privacidade
   - Windows Update automático

🎯 Pós-instalação:
• Ativar Windows
• Instalar drivers
• Windows Update
• Programas essenciais
• Configurar antivírus`
    },
    {
      title: 'Instalação do Ubuntu Linux',
      category: 'Instalação',
      description: 'Como instalar Ubuntu Desktop passo a passo',
      content: `🐧 Instalação do Ubuntu Linux

📋 Preparação
• Download Ubuntu ISO (ubuntu.com)
• Pendrive 4GB+ (recomendado 8GB)
• Rufus ou balenaEtcher para gravar ISO
• Backup dos dados importantes

🔧 Criando Mídia Bootável
1️⃣ Baixar Rufus (gratuito)
2️⃣ Inserir pendrive
3️⃣ Selecionar ISO do Ubuntu
4️⃣ Esquema de partição: GPT (UEFI)
5️⃣ Sistema de arquivos: FAT32
6️⃣ Iniciar gravação

⚙️ Processo de Instalação

1️⃣ Boot pelo pendrive:
   - Acessar BIOS/UEFI
   - Alterar boot priority
   - Secure Boot: pode deixar habilitado

2️⃣ Ubuntu Live:
   - Testar Ubuntu (modo live)
   - Ou "Instalar Ubuntu"

3️⃣ Configurações iniciais:
   - Idioma: Português
   - Layout do teclado
   - Conexão Wi-Fi (opcional)

4️⃣ Tipo de instalação:
   - Instalação normal ou mínima
   - Download de atualizações
   - Software de terceiros

5️⃣ Particionamento:
   - Apagar disco (instalação limpa)
   - Ou "Algo mais" (particionamento manual)
   - Swap: 2x RAM ou 8GB máximo

6️⃣ Configuração do usuário:
   - Nome, usuário e senha
   - Criptografia da pasta pessoal

🎯 Pós-instalação:
sudo apt update && sudo apt upgrade
sudo ubuntu-drivers autoinstall
snap install code discord telegram-desktop`
    },
    {
      title: 'Criação de Pendrive Bootável',
      category: 'Ferramentas',
      description: 'Como criar pendrives de boot para diferentes sistemas',
      content: `💾 Criação de Pendrive Bootável

🔧 Ferramentas Recomendadas

🥇 Rufus (Windows) - Recomendado
• Download: rufus.ie
• Suporta: Windows, Linux, DOS
• Rápido e confiável
• Interface simples

🥈 balenaEtcher (Multiplataforma)
• Download: balena.io/etcher
• Windows, Mac, Linux
• Interface amigável
• Verificação automática

🥉 Ventoy (Avançado)
• Download: ventoy.net
• Múltiplas ISOs em um pendrive
• Boot direto sem regravação

📋 Processo com Rufus

1️⃣ Preparação:
   - Pendrive 8GB+ (formatado)
   - Arquivo ISO do sistema
   - Backup do pendrive (será apagado)

2️⃣ Configuração Rufus:
   - Dispositivo: selecionar pendrive
   - Seleção de boot: arquivo ISO
   - Esquema de partição: GPT (UEFI) ou MBR (Legacy)
   - Sistema de arquivos: FAT32

3️⃣ Opções avançadas:
   - Verificar dispositivo para bad blocks
   - Criar etiqueta estendida
   - Adicionar correções para PCs antigos

4️⃣ Executar:
   - Clicar "INICIAR"
   - Aguardar conclusão
   - Ejetar com segurança

⚡ Ventoy - Múltiplas ISOs
1️⃣ Instalar Ventoy no pendrive
2️⃣ Copiar arquivos ISO para o pendrive
3️⃣ Boot automático com menu de seleção

🎯 Dicas importantes:
• UEFI: GPT + FAT32
• Legacy: MBR + NTFS/FAT32
• Secure Boot: compatível com assinatura digital`
    },
    {
      title: 'Gerenciamento de Drivers',
      category: 'Manutenção',
      description: 'Como instalar, atualizar e gerenciar drivers do sistema',
      content: `🔧 Gerenciamento de Drivers

🎯 Identificação de Drivers

1️⃣ Gerenciador de Dispositivos:
   - Windows + X > Gerenciador de Dispositivos
   - Ícones amarelos = drivers faltando
   - Clique direito > Propriedades > Detalhes

2️⃣ Comandos úteis:
   driverquery /v > drivers.txt
   pnputil /enum-drivers
   Get-WindowsDriver -Online (PowerShell)

📥 Métodos de Instalação

🥇 Windows Update (Recomendado):
   - Configurações > Windows Update
   - Atualizações opcionais
   - Drivers automaticamente

🥈 Site do fabricante:
   - Intel: intel.com/drivers
   - NVIDIA: nvidia.com/drivers
   - AMD: amd.com/support

🥉 Driver Booster:
   - Download: iobit.com/driver-booster
   - Scan automático
   - Download seguro

⚙️ Instalação Manual

1️⃣ Baixar driver correto:
   - Modelo exato do hardware
   - Versão do Windows
   - Arquitetura (x64/x86)

2️⃣ Instalação:
   - Executar como administrador
   - Seguir assistente
   - Reiniciar se solicitado

3️⃣ Via Gerenciador:
   - Clique direito no dispositivo
   - Atualizar driver
   - Procurar no computador

🔄 Rollback de Drivers
1️⃣ Gerenciador de Dispositivos
2️⃣ Propriedades do dispositivo
3️⃣ Aba Driver > Reverter Driver

🛠️ Ferramentas Úteis:
• DDU (Display Driver Uninstaller)
• Snappy Driver Installer Origin
• DriverPack Solution
• Device Doctor

⚠️ Dicas importantes:
• Sempre backup antes de atualizar
• Evitar drivers beta em produção
• Verificar compatibilidade`
    },
    {
      title: 'Diagnóstico de Problemas do Windows',
      category: 'Diagnóstico',
      description: 'Ferramentas e comandos para diagnosticar problemas do sistema',
      content: `🔍 Diagnóstico de Problemas do Windows

🩺 Ferramentas Nativas

1️⃣ System File Checker (SFC):
   sfc /scannow
   sfc /verifyonly
   sfc /scanfile=<file>

2️⃣ DISM (Deployment Image Service):
   DISM /Online /Cleanup-Image /CheckHealth
   DISM /Online /Cleanup-Image /ScanHealth
   DISM /Online /Cleanup-Image /RestoreHealth

3️⃣ Check Disk (CHKDSK):
   chkdsk C: /f /r
   chkdsk C: /x /f

4️⃣ Memory Diagnostic:
   mdsched.exe
   Windows + R > mdsched

⚡ Event Viewer
1️⃣ Acessar: eventvwr.msc
2️⃣ Logs importantes:
   - Sistema
   - Aplicativo
   - Segurança
   - Logs de aplicativos e serviços

🔧 PowerShell Diagnostics

1️⃣ Get-EventLog:
   Get-EventLog -LogName System -Newest 50
   Get-EventLog -LogName Application -EntryType Error

2️⃣ Get-WinEvent:
   Get-WinEvent -LogName System | Where-Object {$_.LevelDisplayName -eq "Error"}

3️⃣ System Health:
   Get-ComputerInfo
   Get-HotFix
   Get-Service | Where-Object {$_.Status -eq "Stopped"}

🛠️ Performance Monitor
1️⃣ Acessar: perfmon.msc
2️⃣ Monitorar:
   - CPU, RAM, Disco
   - Rede, Processos
   - Contadores customizados

🎯 Solução de Problemas Automática:
   - msdt.exe -id DeviceDiagnostic
   - msdt.exe -id NetworkDiagnosticsDA
   - msdt.exe -id AudioPlaybackDiagnostic

🔄 Reset e Restore
1️⃣ System Restore:
   rstrui.exe
   
2️⃣ Reset do Windows:
   systemreset.exe
   
3️⃣ Refresh (manter arquivos):
   Configurações > Atualização e Segurança > Recuperação`
    },
    {
      title: 'Otimização de Performance',
      category: 'Otimização',
      description: 'Técnicas para melhorar o desempenho do sistema operacional',
      content: `⚡ Otimização de Performance

🚀 Limpeza do Sistema

1️⃣ Disk Cleanup (cleanmgr.exe):
   - Arquivos temporários
   - Lixeira
   - Downloads antigos
   - Cache do navegador

2️⃣ Storage Sense:
   - Configurações > Sistema > Armazenamento
   - Limpeza automática
   - Arquivos temporários

3️⃣ Comandos de limpeza:
   cleanmgr /sagerun:1
   del /q/f/s %TEMP%\\*
   del /q/f/s C:\\Windows\\Temp\\*

🔧 Otimização de Startup

1️⃣ Task Manager:
   - Ctrl + Shift + Esc
   - Aba Inicialização
   - Desabilitar desnecessários

2️⃣ msconfig.exe:
   - Boot > Advanced options
   - Number of processors
   - Maximum memory

3️⃣ Serviços desnecessários:
   services.msc
   - Windows Search (se não usar)
   - Fax, Print Spooler (se não usar)

🏃‍♂️ Performance Tweaks

1️⃣ Visual Effects:
   sysdm.cpl > Advanced > Performance
   - Adjust for best performance
   - Ou customizado

2️⃣ Virtual Memory:
   - Control Panel > System > Advanced
   - Performance Settings > Advanced
   - Virtual memory: 1.5x RAM

3️⃣ Power Options:
   powercfg.cpl
   - High Performance
   - Ultimate Performance (via PowerShell)

🎯 Registry Tweaks (Cuidado!):
   # Desabilitar telemetria
   reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection" /v AllowTelemetry /t REG_DWORD /d 0 /f
   
   # Acelerar menu iniciar
   reg add "HKCU\\Control Panel\\Desktop" /v MenuShowDelay /t REG_SZ /d 0 /f

🔄 Manutenção Automática:
   - Control Panel > Security and Maintenance
   - Automatic Maintenance
   - Agendamento diário

📊 Monitoramento:
• Task Manager: CPU, RAM, Disco
• Resource Monitor: resmon.exe
• Performance Monitor: perfmon.exe`
    },
    {
      title: 'Backup e Recuperação',
      category: 'Backup',
      description: 'Estratégias de backup e recuperação de dados e sistema',
      content: `💾 Backup e Recuperação

📋 Estratégia 3-2-1
• 3 cópias dos dados
• 2 mídias diferentes
• 1 cópia offsite/nuvem

🔧 Ferramentas Nativas Windows

1️⃣ File History:
   - Configurações > Atualização e Segurança
   - Backup > Adicionar uma unidade
   - Backup automático de pastas de usuário

2️⃣ System Image Backup:
   - Control Panel > Backup and Restore
   - Create a system image
   - Backup completo do sistema

3️⃣ System Restore Points:
   sysdm.cpl > System Protection
   - Criar pontos manualmente
   - Configurar espaço em disco

⚡ Backup via PowerShell

1️⃣ Wbadmin:
   wbadmin start backup -backupTarget:E: -include:C: -allCritical -quiet
   
2️⃣ Robocopy:
   robocopy C:\\Users\\Documents E:\\Backup\\Documents /MIR /R:3 /W:10
   
3️⃣ xcopy:
   xcopy C:\\Important\\* E:\\Backup\\ /E /H /C /I

🌥️ Soluções Cloud
• OneDrive (15GB gratuito)
• Google Drive (15GB gratuito)
• Dropbox (2GB gratuito)
• pCloud, MEGA, etc.

🛠️ Softwares Terceiros

🥇 Gratuitos:
• AOMEI Backupper
• EaseUS Todo Backup Free
• Cobian Backup
• SyncBack Free

🥈 Pagos:
• Acronis True Image
• Macrium Reflect
• Paragon Backup & Recovery

🔄 Plano de Recuperação

1️⃣ Documentar:
   - Localização dos backups
   - Frequência das cópias
   - Procedimentos de restore

2️⃣ Testar regularmente:
   - Verificar integridade
   - Simular restauração
   - Atualizar procedimentos

3️⃣ Recovery Options:
   - Boot do Windows PE
   - Linux Live USB
   - System Recovery Environment

💡 Dicas importantes:
• Automatizar backups
• Criptografar dados sensíveis
• Múltiplas versões (versionamento)
• Verificar logs de backup`
    },
    {
      title: 'Comandos CMD e PowerShell Essenciais',
      category: 'Linha de Comando',
      description: 'Comandos fundamentais para administração via terminal',
      content: `⌨️ Comandos CMD e PowerShell Essenciais

🖥️ CMD - Comandos Básicos

📁 Navegação e Arquivos:
   dir                    # Listar diretório
   cd path                # Mudar diretório
   md folder              # Criar pasta
   rd folder              # Remover pasta
   copy file dest         # Copiar arquivo
   move file dest         # Mover arquivo
   del file               # Deletar arquivo
   attrib +h file         # Definir atributos

🌐 Rede:
   ipconfig /all          # Configuração IP
   ipconfig /release      # Liberar IP
   ipconfig /renew        # Renovar IP
   ipconfig /flushdns     # Limpar cache DNS
   ping host              # Testar conectividade
   nslookup domain        # Consultar DNS
   netstat -an            # Conexões ativas

🔧 Sistema:
   systeminfo             # Informações do sistema
   tasklist               # Processos ativos
   taskkill /im name      # Matar processo
   sfc /scannow          # Verificar arquivos
   chkdsk C: /f          # Verificar disco

⚡ PowerShell - Comandos Avançados

📊 Informações do Sistema:
   Get-ComputerInfo       # Info detalhada
   Get-Process            # Processos
   Get-Service            # Serviços
   Get-HotFix            # Updates instalados
   Get-EventLog System    # Logs do sistema

📁 Gerenciamento de Arquivos:
   Get-ChildItem         # Listar (ls no Linux)
   Copy-Item             # Copiar
   Move-Item             # Mover
   Remove-Item           # Remover
   New-Item -ItemType Directory  # Criar pasta

🌐 Rede Avançada:
   Test-NetConnection host -Port 80
   Get-NetAdapter        # Adaptadores de rede
   Get-NetIPConfiguration # Config IP detalhada
   Resolve-DnsName domain # Resolver DNS

🔒 Segurança e Usuários:
   Get-LocalUser         # Usuários locais
   Get-LocalGroup        # Grupos locais
   Add-LocalUser         # Adicionar usuário
   Set-ExecutionPolicy   # Política de execução

📦 Gestão de Software:
   Get-Package           # Pacotes instalados
   Install-Package       # Instalar pacote
   Get-Module            # Módulos disponíveis
   Import-Module         # Importar módulo

🎯 Scripts Úteis:

# Limpeza de temp
Get-ChildItem -Path $env:TEMP -Recurse | Remove-Item -Force -Recurse

# Backup de pasta
Copy-Item "C:\\Important" "E:\\Backup" -Recurse -Force

# Verificar serviços parados
Get-Service | Where-Object {$_.Status -eq "Stopped"}`
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
      'Virtualização': '#8b5cf6',
      'Instalação': '#2563eb', 
      'Ferramentas': '#059669',
      'Manutenção': '#d97706',
      'Diagnóstico': '#dc2626',
      'Otimização': '#7c3aed',
      'Backup': '#0891b2',
      'Linha de Comando': '#374151'
    };
    return colors[category] || '#6b7280';
  };

  return (
    <div className="tela-operacional">
      {/* Back Button */}
      <button className="back-button animate-slide-down" onClick={handleVoltar}>
        ← Voltar para Início
      </button>

      {/* Header Section */}
      <div className="operacional-header animate-slide-down animate-delay-1">
        <div className="header-title">
          <span className="title-icon">🖥️</span>
          <h1 className="page-title">Sistema Operacional</h1>
        </div>
        <p className="page-description">
          Guias e soluções para Windows, Linux, virtualização e administração de sistemas
        </p>
      </div>

      {/* Operating System Information Grid */}
      <div className="operacional-grid animate-slide-down animate-delay-2">
        {informacoesOperacional.map((info, index) => (
          <div key={index} className={`operacional-card ${expandedCard === index ? 'expanded' : ''} animate-slide-down animate-delay-${3 + index}`}>
            <div className="operacional-main">
              <div className="operacional-content">
                <div className="operacional-header-card">
                  <h3 className="operacional-title">{info.title}</h3>
                  <span 
                    className="operacional-category" 
                    style={{ backgroundColor: getCategoryColor(info.category) }}
                  >
                    {info.category}
                  </span>
                </div>
                <p className="operacional-description">{info.description}</p>
              </div>
              <div className="operacional-actions">
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
              <div className="operacional-expanded">
                <div className="info-preview">
                  <h5>Informações detalhadas:</h5>
                  <div className="preview-content">
                    {info.content.includes('[LINUX_IMAGE_PLACEHOLDER]') ? (
                      <div>
                        <pre>{info.content.split('[LINUX_IMAGE_PLACEHOLDER]')[0]}</pre>
                        <div className="image-container">
                          <img 
                            src={linuxImage} 
                            alt="Linux VM Configuration" 
                            className="network-guide-image"
                          />
                        </div>
                        <pre>{info.content.split('[LINUX_IMAGE_PLACEHOLDER]')[1]}</pre>
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

export default TelaOperacional;