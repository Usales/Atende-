import { useNavigate } from 'react-router-dom';
import './TelaExtensoes.css';

function TelaExtensoes() {
  const navigate = useNavigate();

  const extensoes = [
    {
      icon: '🔰',
      title: 'Bloqueador AdGuard',
      description: 'Uma extensão de bloqueio incomparável contra anúncios e pop-ups.',
      link: 'https://chromewebstore.google.com/detail/bloqueador-adguard/bgnkhhnnamicmpeenaelnjfhikgbkllg'
    },
    {
      icon: '📋',
      title: 'Language Tool',
      description: 'Corretor gramatical e ortográfico — Português e Inglês. Corrija rapidamente erros de digitação e gramática. Além de sugerir correções de palavras e expressões.' ,
      link: 'https://chromewebstore.google.com/detail/corretor-gramatical-e-ort/oldceeleldhonbafppcapldpdifcinji'
    },
    {
      icon: '💠',
      title: 'Wappalyzer',
      description: 'O Wappalyzer é um utilitário multiplataforma que revela as tecnologias usadas em sites. Ele detecta sistemas de gerenciamento de conteúdo, plataformas de e-commerce, frameworks web, softwares de servidor, ferramentas de análise e muito mais.',
      link: 'https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg'
    },
    {
      icon: '📷',
      title: 'Lightshot',
      description: 'Captura de tela fácil e conveniente. Selecione uma área, edite sua captura e envie para qualquer lugar.',
      link: 'https://chrome.google.com/webstore/detail/lightshot-screenshot-tool/mbniclmhobmnbdlbpiphghaielnnpgdp'
    },
    {
      icon: '🔍',
      title: 'Grammarly',
      description: 'Sinceramente, não consigo nem imaginar escrever uma carta ou uma resposta a um cliente sem o Grammarly . Estou até usando para escrever este post!',
      link: 'https://chromewebstore.google.com/detail/grammarly-ai-writing-assi/kbfnbcaeplbcioakkpcpgfkobkghlhen'
    }
  ];

  const handleVoltar = () => {
    navigate('/');
  };

  const handleExtensaoClick = (extensao) => {
    if (extensao.link) {
      window.open(extensao.link, '_blank');
    }
  };

  return (
    <div className="tela-extensoes">
      {/* Back Button */}
      <button className="back-button" onClick={handleVoltar}>
        ← Voltar para Início
      </button>

      {/* Header Section */}
      <div className="extensoes-header">
        <div className="header-title">
          <span className="title-icon">✅</span>
          <h1 className="page-title">Extensões Úteis</h1>
        </div>
        <p className="page-description">
          Extensões de navegador que facilitam o atendimento e aumentam a produtividade
        </p>
      </div>

      {/* Extensions Grid */}
      <div className="extensoes-grid">
        {extensoes.map((extensao, index) => (
          <div 
            key={index}
            className="extensao-card"
            onClick={() => handleExtensaoClick(extensao)}
          >
            <div className="extensao-icon">{extensao.icon}</div>
            <div className="extensao-content">
              <h3 className="extensao-title">{extensao.title}</h3>
              <p className="extensao-description">{extensao.description}</p>
            </div>
            <div className="extensao-action">
              <span className="action-text">Abrir na Web Store</span>
              <span className="action-icon">🔗</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TelaExtensoes;