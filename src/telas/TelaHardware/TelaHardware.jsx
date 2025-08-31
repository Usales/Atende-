import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaHardware.css';

function TelaHardware() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);

  const informacoesHardware = [
    {
      title: 'Impressoras e Problemas de Impressão',
      category: 'Impressoras',
      description: 'Solução de problemas comuns com impressoras e configuração',
      content: `🖨️ Impressoras e Problemas de Impressão

⚠️ Problemas Mais Comuns

🔹 Impressora Não Imprime:
• Verificar se está ligada e conectada
• Conferir cabo USB ou conexão Wi-Fi
• Verificar se há papel na bandeja
• Checar nível de tinta/toner
• Verificar fila de impressão

🔹 Qualidade de Impressão Ruim:
• Limpeza dos cabeçotes (jato de tinta)
• Alinhamento de cabeçotes
• Verificar qualidade do papel
• Substituir cartuchos vazios
• Calibrar cores da impressora

🔧 Solucionando Problemas

1️⃣ Impressora Offline:
   - Painel de Controle > Impressoras
   - Clicar com botão direito na impressora
   - Desmarcar "Usar impressora offline"
   - Reiniciar spooler de impressão

2️⃣ Driver da Impressora:
   - Baixar driver atualizado do site fabricante
   - Desinstalar driver antigo
   - Instalar novo driver
   - Reiniciar computador

3️⃣ Limpeza e Manutenção:
   - Utilitário de limpeza do fabricante
   - Limpeza manual com álcool isopropílico
   - Verificar roletes de papel
   - Remover poeira interna

🔧 Configuração de Rede

📶 Impressora Wi-Fi:
• Conectar à rede pelo painel da impressora
• Anotar endereço IP da impressora
• Adicionar impressora no Windows
• Testar página de teste

🖥️ Compartilhamento Local:
• Configurações > Impressoras
• Propriedades > Compartilhamento
• Habilitar compartilhamento
• Definir nome de compartilhamento

💡 Dicas de Economia:
• Usar modo rascunho para documentos internos
• Impressão frente e verso
• Configurar margens adequadas
• Usar fontes que gastam menos tinta
• Manutenção preventiva regular`
    },
    {
      title: 'Monitores e Problemas de Vídeo',
      category: 'Monitores',
      description: 'Configuração e solução de problemas de monitores e placas de vídeo',
      content: `🖥️ Monitores e Problemas de Vídeo

🔍 Diagnóstico de Problemas

🔹 Monitor Não Liga:
• Verificar cabo de força
• Testar em outra tomada
• Verificar botão power
• Conferir fonte externa (se houver)
• Testar cabo de vídeo

🔹 Sem Imagem (Monitor Liga):
• Verificar cabo VGA/HDMI/DisplayPort
• Testar em outra porta de vídeo
• Verificar se placa de vídeo está bem encaixada
• Testar com outro cabo
• Verificar entrada correta no monitor

🔧 Configurações de Vídeo

🖥️ Resolução e Qualidade:
• Botão direito na área de trabalho
• Configurações de vídeo
• Ajustar resolução recomendada
• Configurar taxa de atualização
• Ajustar escalonamento

👥 Múltiplos Monitores:
• Windows + P (projetar)
• Duplicar, estender ou segundo monitor
• Configurar monitor principal
• Ajustar posicionamento
• Configurar diferentes resoluções

🔧 Problemas Específicos

🌈 Cores Incorretas:
• Calibração de cores do monitor
• Verificar cabo de vídeo
• Resetar configurações do monitor
• Atualizar driver da placa de vídeo
• Verificar configurações ICC

📺 Problemas de Frequência:
• Verificar taxa de atualização suportada
• Configurar no driver da placa
• Usar DisplayPort para altas taxas
• Verificar limitações do cabo

🔧 Tipos de Conexão

🔌 HDMI:
• Áudio e vídeo digital
• Máximo 4K 60Hz (versão 2.0)
• Plug and Play
• Ideal para TVs e monitores

🔌 DisplayPort:
• Maior largura de banda
• Suporte 4K 144Hz
• Daisy chain (múltiplos monitores)
• Melhor para gaming

🔌 VGA (Legado):
• Apenas vídeo analógico
• Máximo 1080p
• Ainda usado em projetores
• Qualidade inferior

💡 Manutenção Preventiva:
• Limpeza regular da tela
• Verificar ventilação adequada
• Evitar luz solar direta
• Usar protetor de tela quando necessário
• Ajustar brilho adequadamente`
    },
    {
      title: 'Problemas com Teclado e Mouse',
      category: 'Periféricos',
      description: 'Diagnóstico e solução de problemas com dispositivos de entrada',
      content: `⌨️ Problemas com Teclado e Mouse

🔧 Diagnóstico de Teclado

🔹 Teclas Não Funcionam:
• Verificar conexão USB/PS2
• Testar em outro computador
• Verificar se há sujeira/líquidos
• Reiniciar computador
• Atualizar drivers

🔹 Teclas Colando/Repetindo:
• Limpeza com ar comprimido
• Remover teclas para limpeza profunda
• Verificar configurações de repetição
• Desabilitar teclas especiais
• Verificar por vírus/malware

🖱️ Diagnóstico de Mouse

🔹 Mouse Não Funciona:
• Verificar conexão USB
• Trocar porta USB
• Verificar se sensor está limpo
• Testar mousepad diferente
• Verificar bateria (wireless)

🔹 Cursor Pulando/Lento:
• Limpar sensor ótico/laser
• Ajustar sensibilidade DPI
• Verificar superfície do mousepad
• Atualizar drivers
• Verificar interferência wireless

🔧 Configurações e Otimização

⌨️ Configurações de Teclado:
• Painel de Controle > Teclado
• Ajustar velocidade de repetição
• Configurar idioma e layout
• Teclas especiais multimídia
• Atalhos personalizados

🖱️ Configurações de Mouse:
• Velocidade do ponteiro
• Precisão do ponteiro (desabilitar)
• Botões principais (canhoto)
• Velocidade do clique duplo
• Rastro do mouse (desabilitar)

🔧 Limpeza e Manutenção

🧽 Limpeza de Teclado:
• Desligar computador
• Virar teclado e balançar
• Ar comprimido entre teclas
• Álcool isopropílico em pano
• Remoção de teclas se necessário

🧽 Limpeza de Mouse:
• Limpar sensor com cotonete
• Alcohol isopropílico no sensor
• Limpar mousepad regularmente
• Verificar patins do mouse
• Trocar bateria wireless

🔧 Problemas Específicos

📶 Dispositivos Wireless:
• Verificar distância do receptor
• Interferência de outros dispositivos
• Bateria fraca
• Re-sincronizar dispositivos
• Verificar canal wireless

🎮 Gaming/Precisão:
• Desabilitar aceleração do mouse
• Usar mousepad adequado
• Configurar DPI correto
• Polling rate adequado
• Desabilitar energia USB

💡 Dicas de Ergonomia:
• Altura adequada do teclado
• Apoio para punhos
• Mouse na altura do cotovelo
• Pausas regulares
• Postura correta das mãos`
    },
    {
      title: 'Problemas de Audio',
      category: 'Audio',
      description: 'Solução de problemas com placas de som e audio, fones e alto-falantes',
      content: `🔊 Problemas de Audio e Som

🔍 Diagnóstico de Audio

🔹 Sem Som Algum:
• Verificar se não está mudo
• Verificar volume do sistema
• Testar em diferentes aplicações
• Verificar cabos e conexões caso estejam sendo usados
• Reiniciar serviços de audio e o notebook

🔹 Som Cortando/Falhando:
• Verificar drivers de audio
• Testar diferentes formatos
• Verificar latência alta
• Conflito de aplicações
• Problemas de hardware

🔧 Solucionando problemas

💿 Drivers de Audio:

1️⃣ Acesse o site oficial: https://www.iobit.com/pt/driver-booster.php  
2️⃣ Clique em "Download Grátis" e aguarde o instalador baixar.
3️⃣ Localize o arquivo baixado → clique com botão direito no arquivo enquanto segura SHIFT.
4️⃣ Clique na opção, executar como usuário diferente → Avançar.
5️⃣ Aceite os termos de uso e escolha o diretório de instalação . 
6️⃣ Clique em Instalar e aguarde a conclusão.
7️⃣ Ao abrir o programa, clique em "Verificar" para analisar os drivers.
8️⃣ Clique em "Atualizar" ao lado do driver de som recomendado.
9️⃣ Aguarde o download e a instalação automáticos do driver . 
🔟 Reinicie o computador para aplicar as mudanças assim que for concluído.
1️⃣1️⃣ Teste:
   - Pressione Windows + R → digite: mmsys.cpl  
   - Vá até a aba Reprodução → selecione sua saída de som padrão e verifique se o volume está ajustado.
   - Clique em Testar 🔊  
   - Por fim, clique em "Comunicações" e selecione "não fazer nada".
`
    },
    {
      title: 'Componentes Internos do PC',
      category: 'Hardware Interno',
      description: 'Diagnóstico de problemas com RAM, HD, placa-mãe e fonte',
      content: `💻 Componentes Internos do PC

🔍 Diagnóstico de Memória RAM

🔹 Problemas de RAM:
• Travamentos frequentes
• Tela azul (BSOD)
• Programas fechando
• Lentidão geral do sistema
• Beeps na inicialização

🧪 Teste de Memória:
• Windows Memory Diagnostic
• MemTest86 (boot)
• Retirar módulos individualmente
• Testar slots diferentes
• Verificar compatibilidade

🔧 Problemas de Armazenamento

💽 HD/SSD Tradicional:
• Ruídos estranhos
• Lentidão para abrir arquivos
• Erros de leitura/escrita
• Espaço insuficiente
• Temperatura alta

🔍 Diagnóstico de HD:
• Check Disk (chkdsk)
• Crystal Disk Info
• HD Tune
• Verificar SMART
• Teste de superfície

🔧 Placa-Mãe e Fonte

⚡ Problemas de Fonte:
• PC não liga
• Desligamentos repentinos
• Instabilidade geral
• Ruído excessivo
• Cabos mal conectados

🔌 Teste de Fonte:
• Teste do clipe (24 pinos)
• Multímetro nas tensões
• Verificar conexões
• Teste com outra fonte
• Verificar potência adequada

🌡️ Temperatura e Coolers

🔥 Superaquecimento:
• Travamentos por calor
• Throttling de performance
• Ruído excessivo dos coolers
• Desligamentos de proteção
• Lentidão progressiva

🌡️ Monitoramento:
• HWMonitor
• Core Temp
• MSI Afterburner
• Temperatura da CPU/GPU
• Velocidade dos coolers

🔧 Manutenção Preventiva

🧹 Limpeza Física:
• Ar comprimido nos coolers
• Remover poeira dos filtros
• Limpeza da pasta térmica
• Verificar conexões
• Organizar cabos

🔄 Manutenção de Software:
• Limpeza de arquivos temporários
• Desfragmentação (HDD)
• Otimização SSD (TRIM)
• Atualização de drivers
• Verificação de vírus

🔧 Ferramentas de Diagnóstico

💿 Software Útil:
• CPU-Z (informações hardware)
• GPU-Z (placa de vídeo)
• HD Sentinel (armazenamento)
• Prime95 (teste de stress CPU)
• FurMark (teste de stress GPU)

🛠️ Ferramentas Físicas:
• Multímetro
• Chaves de fenda/phillips
• Pulseira antiestática
• Pasta térmica
• Cabos SATA extras

⚠️ Sinais de Falha:
• Beeps durante boot
• Telas azuis frequentes
• Artefatos na imagem
• Ruídos anormais
• Cheiro de queimado

💡 Dicas de Upgrade:
• Verificar compatibilidade
• Calcular potência necessária
• Considerar bottlenecks
• Backup antes de mudanças
• Pesquisar reviews do hardware`
    },
    {
      title: 'Rede e Conectividade',
      category: 'Conectividade',
      description: 'Problemas de conectividade, cabos de rede e configurações',
      content: `🌐 Rede e Conectividade

🔍 Diagnóstico de Conexão

🔹 Sem Internet:
• Verificar cabo de rede
• Testar Wi-Fi em outros dispositivos
• Verificar luzes do modem/roteador
• Reiniciar equipamentos de rede
• Testar com cabo direto no modem

🔹 Internet Lenta:
• Teste de velocidade (speedtest.net)
• Verificar dispositivos conectados
• Checar interferência Wi-Fi
• Atualizar drivers de rede
• Verificar plano contratado

🔧 Configuração de Rede

📶 Wi-Fi:
• Conectar à rede correta
• Verificar senha da rede
• Atualizar driver Wi-Fi
• Verificar proximidade do roteador
• Configurar canal menos congestionado

🔌 Cabo de Rede:
• Verificar conectores RJ45
• Testar cabo em outros dispositivos
• Verificar luzes da placa de rede
• Configurar IP automático
• Verificar cabo não danificado

🔧 Solução de Problemas

🌐 Comandos Úteis:
• ipconfig /all (informações de rede)
• ping google.com (teste conectividade)
• nslookup (teste DNS)
• ipconfig /flushdns (limpar cache DNS)
• netsh winsock reset (reset winsock)

🔄 Reset de Rede:
• Configurações > Rede > Reset de rede
• Desinstalar e reinstalar adaptadores
• Executar solucionador de problemas
• Restaurar configurações padrão
• Reiniciar serviços de rede

🔧 Configurações Avançadas

🏠 Rede Doméstica:
• Configurar grupo de trabalho
• Compartilhamento de arquivos
• Descoberta de rede ativa
• Configurar impressora de rede
• Acesso a pastas compartilhadas

🔐 Segurança de Rede:
• WPA3 ou WPA2 apenas
• Senha forte da rede
• Ocultar SSID (opcional)
• Filtro MAC (avançado)
• Guest network separada

🔧 Hardware de Rede

📡 Roteador/Modem:
• Verificar todas as luzes
• Reset para configurações de fábrica
• Atualizar firmware
• Posicionamento adequado
• Verificar ventilação

🔌 Cabos e Conectores:
• Cat5e mínimo para gigabit
• Cat6 para melhor qualidade
• Verificar conectores RJ45
• Comprimento máximo 100m
• Evitar interferência elétrica

🔧 Otimização de Performance

📊 Qualidade de Sinal:
• Verificar potência do Wi-Fi
• Mudar canal do roteador
• Usar banda 5GHz quando possível
• Evitar obstáculos físicos
• Considerar repetidores/mesh

⚡ Configurações DNS:
• Google: 8.8.8.8 / 8.8.4.4
• Cloudflare: 1.1.1.1 / 1.0.0.1
• OpenDNS: 208.67.222.222
• Configurar no adaptador
• Testar velocidade de resolução

💡 Dicas de Troubleshooting:
• Sempre testar com cabo primeiro
• Reiniciar do modem até o PC
• Verificar um dispositivo por vez
• Anotar configurações antes de mudar
• Manter drivers atualizados`
    },
    {
      title: 'Dispositivos USB e Externos',
      category: 'USB/Externos',
      description: 'Problemas com pen drives, HDs externos e dispositivos USB',
      content: `🔌 Dispositivos USB e Externos

🔍 Diagnóstico USB

🔹 Dispositivo Não Reconhecido:
• Testar em outra porta USB
• Verificar se dispositivo está funcionando
• Testar em outro computador
• Verificar drivers USB
• Reiniciar computador

🔹 Dispositivo Funciona Mal:
• Verificar energia suficiente
• Usar hub USB com energia
• Atualizar drivers específicos
• Verificar compatibilidade USB
• Testar cabo USB diferente

🔧 Pen Drives e Cartões

💾 Pen Drive Não Abre:
• Gerenciador de Disco
• Atribuir letra de unidade
• Verificar sistema de arquivos
• Executar chkdsk
• Formatar (último recurso)

💳 Cartão SD/microSD:
• Verificar trava de proteção
• Testar em leitor diferente
• Verificar formato suportado
• Classe de velocidade adequada
• Teste de integridade

🔧 HDs Externos

💽 HD Externo Não Funciona:
• Verificar fonte de alimentação
• Testar cabo USB/eSATA
• Verificar no Gerenciador de Disco
• Executar diagnóstico fabricante
• Verificar temperatura

🔄 Backup e Sincronização:
• Configurar backup automático
• Usar software do fabricante
• Verificar espaço disponível
• Teste de restauração
• Múltiplas cópias importantes

🔧 Dispositivos Específicos

🖨️ Impressoras USB:
• Verificar cabo USB 2.0
• Instalar driver específico
• Verificar spooler impressão
• Testar porta USB diferente
• Configurar como padrão

📷 Câmeras/Celulares:
• Modo de transferência correto
• Drivers MTP/PTP
• Verificar cabo original
• Autorizar no dispositivo
• Modo depuração USB (Android)

🔧 Portas e Hubs USB

🔌 Tipos de USB:
• USB 2.0: 480 Mbps
• USB 3.0/3.1: 5 Gbps
• USB 3.2: 10 Gbps
• USB-C: Versatile, reversível
• Thunderbolt: Ultra rápido

🔄 Hub USB:
• Usar hub com energia própria
• Verificar limitação de energia
• Máximo dispositivos suportados
• Qualidade do hub
• Compatibilidade USB

🔧 Solução de Problemas

⚡ Problemas de Energia:
• Verificar energia da porta USB
• Usar hub com fonte
• Conectar direto na placa-mãe
• Verificar configurações energia
• Desabilitar economia USB

🔧 Gerenciador de Dispositivos:
• Verificar dispositivos com erro
• Atualizar drivers automaticamente
• Desinstalar e reinstalar
• Verificar conflitos hardware
• Restaurar sistema se necessário

🔧 Ferramentas Úteis

💿 Software de Diagnóstico:
• USBDeview (info dispositivos)
• USB Device Tree Viewer
• ChkFlash (teste pen drives)
• H2testw (teste integridade)
• Crystal Disk Info (HDs)

🛠️ Manutenção:
• Remover com segurança sempre
• Não remover durante transferência
• Verificar erros regularmente
• Desfragmentar se necessário
• Backup regular dos dados

💡 Dicas de Performance:
• Usar USB 3.0+ quando possível
• Evitar hubs desnecessários
• Cabos curtos e de qualidade
• Formatação adequada (NTFS/exFAT)
• Verificar integridade periodicamente`
    },
    {
      title: 'Laptops e Notebooks',
      category: 'Laptops',
      description: 'Problemas específicos de laptops: bateria, teclado, tela e aquecimento',
      content: `💻 Laptops e Notebooks

🔋 Problemas de Bateria

🔹 Bateria Não Carrega:
• Verificar cabo carregador
• Testar carregador em outro laptop
• Verificar porta de energia
• Calibrar bateria
• Verificar ciclos de bateria

🔹 Duração Baixa:
• Verificar programas em background
• Ajustar brilho da tela
• Configurar plano de energia
• Desabilitar Wi-Fi/Bluetooth
• Verificar idade da bateria

🔧 Otimização de Energia

⚡ Configurações de Energia:
• Modo economia de energia
• Suspensão automática
• Hibernação configurada
• Brilho adaptável
• Processador em economia

🌡️ Controle de Temperatura:
• Verificar coolers funcionando
• Limpeza de poeira interna
• Base refrigerada
• Não bloquear ventilação
• Undervolt (avançado)

🔧 Problemas de Tela

📱 Tela do Laptop:
• Verificar cabos internos
• Testar monitor externo
• Verificar inverter (LCD)
• Problemas de backlight
• Pixels mortos/manchas

🔆 Brilho e Cores:
• Teclas Fn + F funcionalidade
• Drivers da placa de vídeo
• Configurações ICC
• Calibração de cores
• Modo noturno

🔧 Teclado e Touchpad

⌨️ Teclado Laptop:
• Teclas não funcionando
• Tecla Fn travada
• Layout incorreto
• Retroiluminação
• Limpeza específica

🖱️ Touchpad:
• Habilitar/desabilitar
• Configurar gestos
• Ajustar sensibilidade
• Driver específico
• Configurações avançadas

🔧 Conectividade

📶 Wi-Fi em Laptops:
• Antenas internas
• Botão físico Wi-Fi
• Teclas Fn + F Wi-Fi
• Driver específico
• Interferência interna

🔌 Portas e Conectores:
• USB limitados
• HDMI/VGA/DisplayPort
• Leitor de cartão
• Ethernet (se houver)
• Entrada fone/microfone

🔧 Aquecimento e Performance

🌡️ Superaquecimento:
• Throttling térmico
• Base elevada
• Limpeza interna regular
• Pasta térmica
• Undervolting

⚡ Performance:
• Modo performance vs economia
• RAM soldada (limitação)
• Armazenamento SSD
• Limitações térmicas
• Perfis de energia customizados

🔧 Manutenção Específica

🧹 Limpeza Laptop:
• Teclado: ar comprimido
• Tela: pano microfibra
• Coolers: desmontagem
• Portas: cotonetes
• Cuidado com líquidos

🔄 Upgrades Possíveis:
• RAM (se não soldada)
• Armazenamento (SSD)
• Bateria (após anos uso)
• Wi-Fi card (em alguns)
• Limitações físicas

🔧 Backup e Portabilidade

💾 Backup Móvel:
• Sincronização nuvem
• Backup incremental
• Arquivos críticos offline
• Múltiplas localizações
• Teste de restauração

🎒 Cuidados no Transporte:
• Case protetor adequado
• Não pressionar tela
• Remover dispositivos USB
• Hibernar antes transporte
• Evitar temperaturas extremas

💡 Dicas de Longevidade:
• Não deixar sempre na tomada
• Calibrar bateria periodicamente
• Limpeza regular coolers
• Não bloquear ventilação
• Updates de BIOS quando necessário`
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
      'Impressoras': '#059669',
      'Monitores': '#2563eb', 
      'Periféricos': '#7c3aed',
      'Audio': '#dc2626',
      'Hardware Interno': '#d97706',
      'Conectividade': '#0891b2',
      'USB/Externos': '#be185d',
      'Laptops': '#65a30d'
    };
    return colors[category] || '#6b7280';
  };

  return (
    <div className="tela-hardware">
      {/* Back Button */}
      <button className="back-button animate-slide-down" onClick={handleVoltar}>
        ← Voltar para Início
      </button>

      {/* Header Section */}
      <div className="hardware-header animate-slide-down animate-delay-1">
        <div className="header-title">
          <span className="title-icon">🛠️</span>
          <h1 className="page-title">Hardware & Equipamentos</h1>
        </div>
        <p className="page-description">
          Diagnóstico e solução de problemas com hardware, impressoras, monitores e periféricos
        </p>
      </div>

      {/* Hardware Information Grid */}
      <div className="hardware-grid animate-slide-down animate-delay-2">
        {informacoesHardware.map((info, index) => (
          <div 
            key={index}
            className={`hardware-card ${expandedCard === index ? 'expanded' : ''} animate-slide-down animate-delay-${3 + index}`}
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

export default TelaHardware;