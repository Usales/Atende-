import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaInicial.css';
import cieeImage from '../../assets/images/ciee.jpg';

function TelaInicial() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Consolidated knowledge base from all categories
  const allKnowledgeBase = [
    // Rede & Internet
    {
      title: 'Configuração de IP Estático',
      category: 'Rede & Internet',
      categoryRoute: '/rede',
      subCategory: 'Configuração',
      description: 'Como configurar endereço IP fixo no Windows e Linux',
      content: 'Para configurar IP estático no Windows: 1️⃣ Pressione Windows + R → digite: ncpa.cpl 2️⃣ Clique com botão direito na conexão de rede → Propriedades...'
    },
    {
      title: 'Teste de Conectividade - Ping',
      category: 'Rede & Internet',
      categoryRoute: '/rede',
      subCategory: 'Diagnóstico',
      description: 'Comandos para testar conectividade de rede',
      content: 'Comandos básicos de ping: 1️⃣ Teste conectividade local (loopback) ping 127.0.0.1 2️⃣ Teste gateway ping 192.168.1.1...'
    },
    {
      title: 'Configuração de DNS',
      category: 'Rede & Internet',
      categoryRoute: '/rede',
      subCategory: 'Configuração',
      description: 'Como alterar servidores DNS primário e secundário',
      content: 'Configuração de DNS: Servidores DNS recomendados: Google: 8.8.8.8 / 8.8.4.4 Cloudflare: 1.1.1.1 / 1.0.0.1...'
    },
    {
      title: 'Problemas de Wi-Fi',
      category: 'Rede & Internet',
      categoryRoute: '/rede',
      subCategory: 'Solução de Problemas',
      description: 'Diagnóstico e resolução de problemas de conexão Wi-Fi',
      content: 'Soluções para problemas de Wi-Fi: 1. Verificar sinal: Aproxime-se do roteador, Verifique obstáculos...'
    },
    {
      title: 'Configuração de Proxy',
      category: 'Rede & Internet',
      categoryRoute: '/rede',
      subCategory: 'Configuração',
      description: 'Como configurar proxy corporativo no navegador e sistema',
      content: 'Configuração de Proxy: Windows (Sistema): Settings > Network & Internet Proxy > Manual proxy setup...'
    },
    {
      title: 'VPN - Configuração e Uso',
      category: 'Rede & Internet',
      categoryRoute: '/rede',
      subCategory: 'Segurança',
      description: 'Configuração de VPN corporativa e solução de problemas',
      content: 'Configuração de VPN: Windows (OpenVPN): Baixe e instale OpenVPN Client Importe arquivo .ovpn...'
    },
    {
      title: 'Internet Lenta - Otimização',
      category: 'Rede & Internet',
      categoryRoute: '/rede',
      subCategory: 'Configuração',
      description: 'Configurações para melhorar velocidade de internet e otimizar conexão',
      content: 'Internet Lenta - Otimização: Configuração de IP Estático para melhor performance: 1️⃣ Pressione Windows + R → digite: ncpa.cpl 2️⃣ Clique com botão direito na conexão de rede → Propriedades 3️⃣ Duplo clique em Protocolo IP Versão 4 (TCP/IPv4)...'
    },
    
    // Softwares & Aplicações
    {
      title: 'Microsoft Office (Pacote Office)',
      category: 'Softwares & Aplicações',
      categoryRoute: '/softwares',
      subCategory: 'Office',
      description: 'Instalação e configuração do Microsoft Office 365 e versões locais',
      content: 'Microsoft Office (Pacote Office): Versões Disponíveis Microsoft 365 (Assinatura): Office 365 Business Basic...'
    },
    {
      title: 'LibreOffice (Alternativa Gratuita)',
      category: 'Softwares & Aplicações',
      categoryRoute: '/softwares',
      subCategory: 'Office Gratuito',
      description: 'Instalação do LibreOffice como alternativa gratuita ao Microsoft Office',
      content: 'LibreOffice (Alternativa Gratuita): Sobre o LibreOffice Vantagens: 100% gratuito e código aberto...'
    },
    {
      title: 'Google Drive Desktop',
      category: 'Softwares & Aplicações',
      categoryRoute: '/softwares',
      subCategory: 'Nuvem',
      description: 'Instalação e configuração do Google Drive para sincronização de arquivos',
      content: 'Google Drive Desktop: Sobre Google Drive Desktop Recursos Principais: Sincronização automática na nuvem...'
    },
    {
      title: 'Navegadores Web Essenciais',
      category: 'Softwares & Aplicações',
      categoryRoute: '/softwares',
      subCategory: 'Navegadores',
      description: 'Instalação e configuração de Chrome, Firefox, Edge e outros navegadores',
      content: 'Navegadores Web Essenciais: Chrome, Firefox, Edge configuração e otimização...'
    },
    
    // Hardware & Equipamentos
    {
      title: 'Impressoras e Problemas de Impressão',
      category: 'Hardware & Equipamentos',
      categoryRoute: '/hardware',
      subCategory: 'Impressoras',
      description: 'Solução de problemas comuns com impressoras e configuração',
      content: 'Impressoras e Problemas de Impressão: Problemas Mais Comuns Impressora Não Imprime: Verificar se está ligada...'
    },
    {
      title: 'Monitores e Problemas de Vídeo',
      category: 'Hardware & Equipamentos',
      categoryRoute: '/hardware',
      subCategory: 'Monitores',
      description: 'Configuração e solução de problemas de monitores e placas de vídeo',
      content: 'Monitores e Problemas de Vídeo: Diagnóstico de Problemas Monitor Não Liga: Verificar cabo de força...'
    },
    {
      title: 'Problemas com Teclado e Mouse',
      category: 'Hardware & Equipamentos',
      categoryRoute: '/hardware',
      subCategory: 'Periféricos',
      description: 'Diagnóstico e solução de problemas com dispositivos de entrada',
      content: 'Problemas com Teclado e Mouse: Diagnóstico de Teclado Teclas Não Funcionam: Verificar conexão USB/PS2...'
    },
    {
      title: 'Problemas de Audio',
      category: 'Hardware & Equipamentos',
      categoryRoute: '/hardware',
      subCategory: 'Audio',
      description: 'Solução de problemas com placas de som e audio, fones e alto-falantes',
      content: 'Problemas de Audio e Som: Diagnóstico de Audio Sem Som Algum: Verificar se não está mudo, Verificar volume do sistema, Testar em diferentes aplicações, Verificar cabos e conexões caso estejam sendo usados, Reiniciar serviços de audio e o notebook'
    },
    
    // E-mails & Acessos
    {
      title: 'Criação de Assinaturas Profissionais',
      category: 'E-mails & Acessos',
      categoryRoute: '/emails',
      subCategory: 'Assinaturas',
      description: 'Como criar assinaturas de email profissionais e atraentes',
      content: 'Criação de Assinaturas Profissionais: Elementos Essenciais Nome completo, Cargo/função, Nome da empresa...'
    },
    {
      title: 'Configuração de Contas de Email',
      category: 'E-mails & Acessos',
      categoryRoute: '/emails',
      subCategory: 'Configuração',
      description: 'Setup de contas IMAP, POP3 e Exchange no Gmail e outros clientes',
      content: 'Configuração de Contas de Email: Tipos de Configuração IMAP (Recomendado): Sincronização entre dispositivos...'
    },
    {
      title: 'Regras e Filtros de Email',
      category: 'E-mails & Acessos',
      categoryRoute: '/emails',
      subCategory: 'Organização',
      description: 'Como criar regras automáticas para organizar emails',
      content: 'Regras e Filtros de Email: Benefícios das Regras Organização automática, Redução de spam...'
    },
    
    // Segurança
    {
      title: 'Antivírus Gratuitos Eficazes',
      category: 'Segurança',
      categoryRoute: '/seguranca',
      subCategory: 'Antivírus',
      description: 'Melhores antivírus gratuitos para proteção completa do sistema',
      content: 'Antivírus Gratuitos Eficazes: Top Antivírus Gratuitos Malwarebytes Anti-Malware: Especialista em malware...'
    },
    {
      title: 'VPNs e Proteção de Navegação',
      category: 'Segurança',
      categoryRoute: '/seguranca',
      subCategory: 'VPN',
      description: 'Como usar VPNs para proteção e privacidade online',
      content: 'VPNs e Proteção de Navegação: O que é uma VPN? Virtual Private Network: Criptografa sua conexão...'
    },
    {
      title: 'Proteção de Senhas e 2FA',
      category: 'Segurança',
      categoryRoute: '/seguranca',
      subCategory: 'Autenticação',
      description: 'Gerenciamento seguro de senhas e autenticação de dois fatores',
      content: 'Proteção de Senhas e 2FA: Gerenciadores de Senha Bitwarden (Gratuito): Ilimitadas senhas...'
    },
    
    // Sistema Operacional
    {
      title: 'Hyper-V - Criação de Máquinas Virtuais',
      category: 'Sistema Operacional',
      categoryRoute: '/operacional',
      subCategory: 'Virtualização',
      description: 'Como habilitar e usar o Hyper-V para criar VMs no Windows',
      content: 'Configuração do Hyper-V: Habilitando o Hyper-V Verificar compatibilidade: Windows 10/11 Pro, Enterprise...'
    },
    {
      title: 'Instalação do Windows 10/11',
      category: 'Sistema Operacional',
      categoryRoute: '/operacional',
      subCategory: 'Instalação',
      description: 'Guia completo para instalação limpa do Windows',
      content: 'Instalação do Windows 10/11: Pré-requisitos ISO do Windows (site oficial Microsoft), Pendrive 8GB+...'
    },
    {
      title: 'Instalação do Ubuntu Linux',
      category: 'Sistema Operacional',
      categoryRoute: '/operacional',
      subCategory: 'Instalação',
      description: 'Como instalar Ubuntu Desktop passo a passo',
      content: 'Instalação do Ubuntu Linux: Preparação Download Ubuntu ISO (ubuntu.com), Pendrive 4GB+...'
    },
    {
      title: 'Criação de Pendrive Bootável',
      category: 'Sistema Operacional',
      categoryRoute: '/operacional',
      subCategory: 'Ferramentas',
      description: 'Como criar pendrives de boot para diferentes sistemas',
      content: 'Criação de Pendrive Bootável: Ferramentas Recomendadas Rufus (Windows) - Recomendado Download: rufus.ie...'
    }
  ];

  const categories = [
    { 
      icon: '💻', 
      title: 'Rede & Internet',
      description: 'Problemas de conexão, Wi-Fi, VPN'
    },
    { 
      icon: '🖥️', 
      title: 'Sistema Operacional',
      description: 'Windows e Linux'
    },
    { 
      icon: '📧', 
      title: 'E-mails & Acessos',
      description: 'Contas, senhas, autenticação'
    },
    { 
      icon: '🔒', 
      title: 'Segurança',
      description: 'Antivírus, firewall, proteção'
    },
    { 
      icon: '🛠️', 
      title: 'Hardware & Equipamentos',
      description: 'Impressoras, monitores, periféricos'
    },
    { 
      icon: '🌐', 
      title: 'Softwares & Aplicações',
      description: 'Instalação, configuração, uso'
    },
        { 
      icon: '💬', 
      title: 'Respostas Prontas',
      description: 'Crie respostas ou use prontas'
    },
        { 
      icon: '✅', 
      title: 'Extensões Úteis',
      description: 'Extensões para otimizar o Atendimento'
    },
    { 
      icon: '🟦', 
      title: 'Bases CIEE',
      description: 'Foco em resolução de problemas do CIEE',
    }
  ];

  const handleSearch = () => {
    console.log('Searching for:', search);
  };

  const handleClearSearch = () => {
    setSearch('');
  };

  // Search within all knowledge base content
  const searchResults = search.trim() ? allKnowledgeBase.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase()) ||
    item.content.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase()) ||
    item.subCategory.toLowerCase().includes(search.toLowerCase())
  ) : [];

  // Only show categories when not searching
  const showCategories = !search.trim();
  const showSearchResults = search.trim() && searchResults.length > 0;
  const showNoResults = search.trim() && searchResults.length === 0;

  const handleCategoryClick = (category) => {
    console.log('Category clicked:', category.title);
    
    // Navigate to TelaRede for "Rede & Internet" category
    if (category.title === 'Rede & Internet') {
      navigate('/rede');
    }
    // Navigate to TelaOperacional for "Sistema Operacional" category
    else if (category.title === 'Sistema Operacional') {
      navigate('/operacional');
    }
    // Navigate to TelaEmails for "E-mails & Acessos" category
    else if (category.title === 'E-mails & Acessos') {
      navigate('/emails');
    }
    // Navigate to TelaSeguranca for "Segurança" category
    else if (category.title === 'Segurança') {
      navigate('/seguranca');
    }
    // Navigate to TelaHardware for "Hardware & Equipamentos" category
    else if (category.title === 'Hardware & Equipamentos') {
      navigate('/hardware');
    }
    // Navigate to TelaSoftwares for "Softwares & Aplicações" category
    else if (category.title === 'Softwares & Aplicações') {
      navigate('/softwares');
    }
    // Navigate to TelaRespostas for "Respostas Prontas" category
    else if (category.title === 'Respostas Prontas') {
      navigate('/respostas');
    }
    // Navigate to TelaExtensoes for "Extensões Úteis" category
    else if (category.title === 'Extensões Úteis') {
      navigate('/extensoes');
    }
  };

  const handleSearchResultClick = (result) => {
    console.log('Search result clicked:', result.title);
    // Navigate to the specific category page where this knowledge item belongs
    navigate(result.categoryRoute);
  };

  return (
    <div className="tela-inicial">
      {/* Search Section */}
      <section className="search-section animate-slide-down">
        <div className="search-container">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Digite sua dúvida ou palavra-chave..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            {search && (
              <button 
                onClick={handleClearSearch}
                className="clear-button"
                title="Limpar busca"
              >
                ✕
              </button>
            )}
          </div>
          <button 
            onClick={handleSearch}
            className="search-button"
          >
            Buscar
          </button>
        </div>
      </section>

      {/* Search Results Section - Show when searching */}
      {showSearchResults && (
        <section className="search-results-section animate-slide-down animate-delay-1">
          <h2 className="section-title">
            🔍 Resultados da busca ({searchResults.length})
          </h2>
          <div className="search-results-grid animate-slide-down animate-delay-2">
            {searchResults.map((result, index) => (
              <div 
                key={index}
                className={`search-result-card animate-slide-down animate-delay-${3 + index}`}
                onClick={() => handleSearchResultClick(result)}
              >
                <div className="result-header">
                  <h3 className="result-title">{result.title}</h3>
                  <span className="result-category">{result.category} • {result.subCategory}</span>
                </div>
                <p className="result-description">{result.description}</p>
                <div className="result-footer">
                  <span className="result-action">Clique para acessar →</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* No Search Results */}
      {showNoResults && (
        <section className="no-search-results-section animate-slide-down animate-delay-1">
          <div className="no-results animate-slide-down animate-delay-2">
            <div className="no-results-icon">🔍</div>
            <h3 className="no-results-title">Nenhum resultado encontrado</h3>
            <p className="no-results-text">
              Tente buscar por palavras-chave diferentes ou navegue pelas categorias abaixo.
            </p>
          </div>
        </section>
      )}

      {/* Categories Section - Show when not searching */}
      {showCategories && (
        <section className="categories-section animate-slide-down animate-delay-1">
          <h2 className="section-title">
            📂 Categorias
          </h2>
          <div className="categories-grid animate-slide-down animate-delay-2">
            {categories.map((category, index) => {
              return (
                <div 
                  key={index}
                  className={`category-card animate-slide-down animate-delay-${3 + index}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="category-icon">
                    {category.isImage ? (
                      <img 
                        src={category.icon} 
                        alt={category.title} 
                        className="category-image"
                      />
                    ) : (
                      category.icon
                    )}
                  </div>
                  <div className="category-content">
                    <h3 className="category-title">{category.title}</h3>
                    <p className="category-description">{category.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

    </div>
  );
}

export default TelaInicial;