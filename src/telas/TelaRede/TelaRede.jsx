import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaRede.css';
import ipv4Image from '../../assets/images/ipv4.png';

function TelaRede() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);

  const informacoesRede = [
    {
      title: 'Configuração de IP Estático',
      category: 'Configuração',
      description: 'Como configurar endereço IP fixo no Windows e Linux',
      content: `Para configurar IP estático no Windows:

🌐 Configuração de IP Estático

🖥️ Windows

1️⃣ Pressione Windows + R → digite: ncpa.cpl
2️⃣ Clique com botão direito na conexão de rede → Propriedades  
3️⃣ Duplo clique em Protocolo IP Versão 4 (TCP/IPv4) 
4️⃣ Marque Usar o seguinte endereço IP  
5️⃣ Preencha os campos:
   - 📌 Endereço IP: 192.168.1.100
   - 🧩 Máscara de sub-rede: 255.255.255.0
   - 🚪 Gateway padrão: 192.168.1.1
6️⃣ Configure DNS:
   - 🌍 DNS preferencial: 8.8.8.8
   - 🌍 DNS alternativo: 8.8.4.4  
7️⃣ Clique em OK e depois em Fechar  
8️⃣ Teste:  
Windows + R → digite: cmd
digite o comando: ping 8.8.8.8

[IPv4_IMAGE_PLACEHOLDER]

=========================================================================

🐧 Linux

➕ Definir IP
sudo ip addr add 192.168.1.100/24 dev eth0

🚪 Configurar Gateway
sudo ip route add default via 192.168.1.1

🌍 Testar conexão
ping -c 4 8.8.8.8`
    },
    {
      title: 'Teste de Conectividade - Ping',
      category: 'Diagnóstico',
      description: 'Comandos para testar conectividade de rede',
      content: `Comandos básicos de ping:

🌐 Comandos Básicos de Ping

1️⃣ Teste conectividade local (loopback)
🖥️ Windows / 🐧 Linux:
ping 127.0.0.1

2️⃣ Teste gateway
ping 192.168.1.1

3️⃣ Teste DNS externo
ping 8.8.8.8
ping google.com

4️⃣ Ping contínuo
🖥️ Windows (Ctrl+C para parar):
ping -t google.com

🐧 Linux (Ctrl+C para parar):
ping google.com

5️⃣ Ping com tamanho específico
🖥️ Windows:
ping -l 1000 google.com

🐧 Linux:
ping -s 1000 google.com

6️⃣ Trace route
🖥️ Windows:
tracert google.com

🐧 Linux:
traceroute google.com
`
    },
    {
      title: 'Configuração de DNS',
      category: 'Configuração',
      description: 'Como alterar servidores DNS primário e secundário',
      content: `Configuração de DNS:

Servidores DNS recomendados:
• Google: 8.8.8.8 / 8.8.4.4
• Cloudflare: 1.1.1.1 / 1.0.0.1
• OpenDNS: 208.67.222.222 / 208.67.220.220

🖥️Windows:
1. Painel de Controle > Rede e Internet
2. Central de Rede e Compartilhamento
3. Alterar configurações do adaptador
4. Propriedades da conexão
5. TCP/IPv4 > Propriedades
6. "Usar os seguintes endereços DNS"
DNS Primário > 8.8.8.8
DNS Secundario > 8.8.4.4

🐧Linux (Ubuntu):
1. sudo nano /etc/systemd/resolved.conf
2. DNS Primário > 8.8.8.8 | DNS Secundario > 8.8.4.4
3. sudo systemctl restart systemd-resolved

Verificar DNS:
nslookup google.com`
    },
    {
      title: 'Problemas de Wi-Fi',
      category: 'Solução de Problemas',
      description: 'Diagnóstico e resolução de problemas de conexão Wi-Fi',
      content: `Soluções para problemas de Wi-Fi:

1. Verificar sinal:
   - Aproxime-se do roteador
   - Verifique obstáculos (paredes, metal)
   - Use aplicativo Wi-Fi Analyzer
   - Cabos frouxos
   - Tipo de cabo que está sendo utilizado

2. Reiniciar componentes:
   - Reinicie o roteador (30 segundos desligado)
   - Reinicie o adaptador Wi-Fi
   - Reinicie o computador

3. Atualizar drivers:
   - Atualize os drivers através do Driver booster, segue link abaixo:
   - https://www.iobit.com/pt/driver-booster.php
   - Após atualizar, reiniciar o equipamento

4. Esquecer e reconectar rede:
   - Settings > Network > Wi-Fi
   - Clique na rede > Forget
   - Reconecte com senha

5. Reset de rede (Windows):
   netsh winsock reset
   netsh int ip reset
   ipconfig /release
   ipconfig /renew
   ipconfig /flushdns`
    },
    {
      title: 'Configuração de Proxy',
      category: 'Configuração',
      description: 'Como configurar proxy corporativo no navegador e sistema',
      content: `Configuração de Proxy:

🖥️Windows (Sistema):
1. Settings > Network & Internet
2. Proxy > Manual proxy setup
3. Use a proxy server: ON
4. Digite endereço e porta
5. Adicione exceções se necessário

🌐Chrome:
1. Settings > Advanced > System
2. Open proxy settings
3. Configure conforme necessário

🦊Firefox:
1. Settings > Network Settings
2. Configure proxy access
3. Manual proxy configuration

Proxy via linha de comando:
export http_proxy=http://proxy:porta
export https_proxy=http://proxy:porta

Teste proxy:
curl -I http://google.com`
    },
    {
      title: 'VPN - Configuração e Uso',
      category: 'Segurança',
      description: 'Configuração de VPN corporativa e solução de problemas',
      content: `Configuração de VPN:

🖥️Windows (OpenVPN):
1. Baixe e instale OpenVPN Client
2. Importe arquivo .ovpn fornecido pela TI
3. Digite credenciais corporativas
4. Conecte e verifique IP externo

🖥️Windows (VPN nativa):
1. Settings > Network & Internet > VPN
2. Add a VPN connection
3. Configure servidor e tipo
4. Digite credenciais

Verificar conexão VPN:
- whatismyipaddress.com
- ipconfig (verificar adaptador VPN)

Problemas comuns:
- Firewall bloqueando: adicionar exceção
- DNS não resolvendo: configurar DNS manual
- Conexão lenta: alterar servidor VPN
- Erro de autenticação: verificar credenciais

Teste conectividade interna:
ping servidor-interno.empresa.com`
    },
    {
      title: 'Firewall - Configuração Básica',
      category: 'Segurança',
      description: 'Configuração de regras de firewall do Windows',
      content: `Configuração do Windows Firewall:

Abrir Firewall:
1. wf.msc (Windows + R)
2. Windows Defender Firewall

Criar regra de entrada:
1. Inbound Rules > New Rule
2. Selecionar tipo (Port/Program)
3. Definir protocolo e porta
4. Allow the connection
5. Aplicar a todos os perfis
6. Nome e descrição

Regras importantes:
- RDP: Porta 3389 TCP
- HTTP: Porta 80 TCP
- HTTPS: Porta 443 TCP
- SSH: Porta 22 TCP
- FTP: Porta 21 TCP

Comandos úteis:
netsh advfirewall show allprofiles
netsh advfirewall firewall add rule name="Aplicativo" dir=in action=allow program="caminho"

Verificar portas:
netstat -an | find "LISTENING"`
    },
    {
      title: 'Mapeamento de Rede',
      category: 'Diagnóstico',
      description: 'Comandos para mapear e descobrir dispositivos na rede',
      content: `Comandos de mapeamento de rede:

1. Ver configuração atual:
   ipconfig /all (Windows)
   ifconfig (Linux)

2. Tabela de roteamento:
   route print (Windows)
   route -n (Linux)

3. Descobrir dispositivos (ping sweep):
   for /l %i in (1,1,254) do @ping -n 1 -w 100 192.168.1.%i | find "TTL"

4. Nmap (se instalado):
   nmap -sn 192.168.1.0/24
   nmap -p 80,443 192.168.1.1

5. ARP table:
   arp -a

6. Netstat - conexões ativas:
   netstat -an
   netstat -b (com nomes de processo)

7. Verificar portas abertas:
   telnet ip porta
   Test-NetConnection ip -Port porta (PowerShell)`
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
      'Configuração': '#2563eb',
      'Diagnóstico': '#dc2626', 
      'Segurança': '#059669',
      'Solução de Problemas': '#d97706'
    };
    return colors[category] || '#6b7280';
  };

  return (
    <div className="tela-rede">
      {/* Back Button */}
      <button className="back-button animate-slide-down" onClick={handleVoltar}>
        ← Voltar para Início
      </button>

      {/* Header Section */}
      <div className="rede-header animate-slide-down animate-delay-1">
        <div className="header-title">
          <span className="title-icon">💻</span>
          <h1 className="page-title">Rede & Internet</h1>
        </div>
        <p className="page-description">
          Informações e soluções para problemas de conectividade, configuração de rede e diagnósticos
        </p>
      </div>

      {/* Network Information Grid */}
      <div className="rede-grid animate-slide-down animate-delay-2">
        {informacoesRede.map((info, index) => (
          <div key={index} className={`rede-card ${expandedCard === index ? 'expanded' : ''} animate-slide-down animate-delay-${3 + index}`}>
            <div className="rede-main">
              <div className="rede-content">
                <div className="rede-header-card">
                  <h3 className="rede-title">{info.title}</h3>
                  <span 
                    className="rede-category" 
                    style={{ backgroundColor: getCategoryColor(info.category) }}
                  >
                    {info.category}
                  </span>
                </div>
                <p className="rede-description">{info.description}</p>
              </div>
              <div className="rede-actions">
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
              <div className="rede-expanded">
                <div className="info-preview">
                  <h5>Informações detalhadas:</h5>
                  <div className="preview-content">
                    {info.content.includes('[IPv4_IMAGE_PLACEHOLDER]') ? (
                      <div>
                        <pre>{info.content.split('[IPv4_IMAGE_PLACEHOLDER]')[0]}</pre>
                        <div className="image-container">
                          <img 
                            src={ipv4Image} 
                            alt="Configuração IPv4" 
                            className="network-guide-image"
                          />
                        </div>
                        <pre>{info.content.split('[IPv4_IMAGE_PLACEHOLDER]')[1]}</pre>
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

export default TelaRede;