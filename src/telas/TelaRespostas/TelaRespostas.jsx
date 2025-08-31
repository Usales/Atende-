import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaRespostas.css';

function TelaRespostas() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    gmail: false,
    googlechat: false,
    whatsapp: false,
    telefone: false
  });
  const [selectedGender, setSelectedGender] = useState('masculino');
  
  const respostasProntas = [
    {
      title: 'Aguardando retorno do colaborador',
      type: 'aguardando'
    },
    {
      title: 'Mensagem de encerramento do atendimento',
      type: 'encerramento'
    },
    {
      title: 'Aviso de regularização de equipamento',
      type: 'regularizacao'
    },
    {
      title: 'Como acessar recursos da VPN',
      type: 'static',
      content: 'Guia completo para acesso aos recursos da VPN corporativa...'
    }
  ];

  const getTimeBasedGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return 'Bom dia';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Boa tarde';
    } else {
      return 'Boa noite';
    }
  };

  const generateAguardandoMessage = () => {
    const greeting = getTimeBasedGreeting();
    const platforms = [];
    
    if (selectedPlatforms.gmail) platforms.push('Gmail');
    if (selectedPlatforms.googlechat) platforms.push('Google Chat');
    if (selectedPlatforms.whatsapp) platforms.push('WhatsApp');
    if (selectedPlatforms.telefone) platforms.push('Telefone');
    
    const platformsText = platforms.length > 0 
      ? platforms.join(', ')
      : '[Selecione as plataformas]';
    
    // Gender-specific text
    const genderText = selectedGender === 'masculino' 
      ? {
          colaborador: 'o colaborador',
          pronome: 'do mesmo',
          retorno: 'do mesmo'
        }
      : {
          colaborador: 'a colaboradora',
          pronome: 'da mesma',
          retorno: 'da mesma'
        };
    
    return `${greeting}, prezados. 
    
Tentei contato com ${genderText.colaborador} através dos seguintes métodos: ${platformsText}, entretanto não obtive retorno ${genderText.pronome} até o presente momento, aguardando retorno ${genderText.retorno} para proceder com as tratativas referentes ao caso. 

Atenciosamente.`;
  };

  const generateEncerramentoMessage = () => {
    const greeting = getTimeBasedGreeting();
    
    // Gender-specific text
    const genderText = selectedGender === 'masculino' 
      ? {
          colaborador: 'o colaborador',
          pronome: 'do mesmo'
        }
      : {
          colaborador: 'a colaboradora',
          pronome: 'da mesma'
        };
    
    return `${greeting}, prezados. 
    
Tentei contato com ${genderText.colaborador} diversas vezes, porém não tive retorno ${genderText.pronome}, diante disso estou encerrando este ticket, quaisquer dúvidas me coloco a disposição para a resolução das mesmas.

Atenciosamente.`;
  };

  const generateRegularizacaoMessage = () => {
    const greeting = getTimeBasedGreeting();
    
    // Gender-specific text - For regularization, the equipment is the same regardless of gender
    return `${greeting}, prezados. Tudo bem?

Estou entrando em contato devido a uma solicitação da equipe de suporte de TI em conjunto com a equipe de Segurança da Informação, constatamos que seu equipamento está desatualizado e isso é uma grave ameaça para a segurança da empresa e para outros colaboradores, caso necessário informe ao seu gestor. Assim que estiver disponível, nos informe por gentileza para que possamos sanar esse problema.
Desde já agradecemos a atenção!

Atenciosamente.`;
  };

  const handleVoltar = () => {
    navigate('/');
  };

  const handleCriarNovaResposta = () => {
    navigate('/criar-respostas');
  };

  const handleCopyResposta = (resposta) => {
    let contentToCopy;
    
    if (resposta.type === 'aguardando') {
      contentToCopy = generateAguardandoMessage();
    } else if (resposta.type === 'encerramento') {
      contentToCopy = generateEncerramentoMessage();
    } else if (resposta.type === 'regularizacao') {
      contentToCopy = generateRegularizacaoMessage();
    } else {
      contentToCopy = resposta.content || resposta.title;
    }
    
    navigator.clipboard.writeText(contentToCopy).then(() => {
      console.log('Resposta copiada:', contentToCopy);
      // Future implementation: show toast notification
    });
  };

  const handleToggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handlePlatformToggle = (platform) => {
    setSelectedPlatforms(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }));
  };

  const handleGenderToggle = (gender) => {
    setSelectedGender(gender);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const filteredRespostas = respostasProntas.filter(resposta =>
    resposta.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (resposta.content && resposta.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="tela-respostas">
      {/* Back Button */}
      <button className="back-button animate-slide-down" onClick={handleVoltar}>
        ← Voltar para Início
      </button>

      {/* Header Section */}
      <div className="respostas-header animate-slide-down animate-delay-1">
        <div className="header-title">
          <span className="title-icon">💬</span>
          <h1 className="page-title">Respostas Prontas</h1>
        </div>
      </div>

      {/* Search Section */}
      <section className="search-section animate-slide-down animate-delay-2">
        <div className="search-container">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Buscar resposta pronta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
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
            🔍 Buscar
          </button>
        </div>
      </section>

      {/* Create New Answer Card */}
      <div className="criar-resposta-card animate-slide-down animate-delay-3" onClick={handleCriarNovaResposta}>
        <div className="criar-icon">✚</div>
        <span className="criar-text">Criar nova resposta</span>
      </div>

      {/* Answers Grid */}
      <div className="respostas-grid animate-slide-down animate-delay-4">
        {filteredRespostas.length > 0 ? (
          filteredRespostas.map((resposta, index) => (
            <div key={index} className={`resposta-card ${expandedCard === index ? 'expanded' : ''} animate-slide-down animate-delay-${5 + index}`}>
            <div className="resposta-main">
              <div className="resposta-content">
                <h3 className="resposta-title">{resposta.title}</h3>
              </div>
              <div className="resposta-actions">
                <button 
                  className="eye-button"
                  onClick={() => handleToggleExpand(index)}
                  title="Visualizar conteúdo"
                >
                  <span className="eye-icon">👁️</span>
                </button>
                <button 
                  className="copy-button"
                  onClick={() => handleCopyResposta(resposta)}
                  title="Copiar resposta"
                >
                  <span className="copy-icon">📋</span>
                </button>
              </div>
            </div>
            
            {/* Expanded Content */}
            {expandedCard === index && (
              <div className="resposta-expanded">
                {resposta.type === 'aguardando' ? (
                  <div className="aguardando-config">
                    <h4>Configuração da Mensagem:</h4>
                    
                    {/* Gender Selection */}
                    <div className="gender-selection">
                      <p>Selecione o gênero:</p>
                      <div className="gender-buttons">
                        <button
                          type="button"
                          onClick={() => handleGenderToggle('masculino')}
                          className={`gender-button ${selectedGender === 'masculino' ? 'selected' : ''}`}
                        >
                          👨
                        </button>
                        <button
                          type="button"
                          onClick={() => handleGenderToggle('feminino')}
                          className={`gender-button ${selectedGender === 'feminino' ? 'selected' : ''}`}
                        >
                          👩
                        </button>
                      </div>
                    </div>
                    
                    <div className="platform-selection">
                      <p>Selecione as plataformas utilizadas:</p>
                      <div className="platform-checkboxes">
                        <label className="platform-checkbox">
                          <input
                            type="checkbox"
                            checked={selectedPlatforms.gmail}
                            onChange={() => handlePlatformToggle('gmail')}
                          />
                          📧 Gmail
                        </label>
                        <label className="platform-checkbox">
                          <input
                            type="checkbox"
                            checked={selectedPlatforms.googlechat}
                            onChange={() => handlePlatformToggle('googlechat')}
                          />
                          💬 Google Chat
                        </label>
                        <label className="platform-checkbox">
                          <input
                            type="checkbox"
                            checked={selectedPlatforms.whatsapp}
                            onChange={() => handlePlatformToggle('whatsapp')}
                          />
                          📱 WhatsApp
                        </label>
                        <label className="platform-checkbox">
                          <input
                            type="checkbox"
                            checked={selectedPlatforms.telefone}
                            onChange={() => handlePlatformToggle('telefone')}
                          />
                          📞 Telefone
                        </label>
                      </div>
                    </div>
                    <div className="message-preview">
                      <h5>Pré-visualização:</h5>
                      <div className="preview-content">
                        {generateAguardandoMessage()}
                      </div>
                    </div>
                  </div>
                ) : resposta.type === 'encerramento' ? (
                  <div className="encerramento-config">
                    <h4>Configuração da Mensagem:</h4>
                    
                    {/* Gender Selection */}
                    <div className="gender-selection">
                      <p>Selecione o gênero:</p>
                      <div className="gender-buttons">
                        <button
                          type="button"
                          onClick={() => handleGenderToggle('masculino')}
                          className={`gender-button ${selectedGender === 'masculino' ? 'selected' : ''}`}
                        >
                          👨 Masculino
                        </button>
                        <button
                          type="button"
                          onClick={() => handleGenderToggle('feminino')}
                          className={`gender-button ${selectedGender === 'feminino' ? 'selected' : ''}`}
                        >
                          👩 Feminino
                        </button>
                      </div>
                    </div>
                    
                    <div className="message-preview">
                      <h5>Pré-visualização:</h5>
                      <div className="preview-content">
                        {generateEncerramentoMessage()}
                      </div>
                    </div>
                  </div>
                ) : resposta.type === 'regularizacao' ? (
                  <div className="regularizacao-config">
                    <h4>Configuração da Mensagem:</h4>
                    
                    <div className="message-preview">
                      <h5>Pré-visualização:</h5>
                      <div className="preview-content">
                        {generateRegularizacaoMessage()}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="static-preview">
                    <h5>Conteúdo:</h5>
                    <div className="preview-content">
                      {resposta.content}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))
        ) : (
          <div className="no-results animate-slide-down animate-delay-5">
            <div className="no-results-icon">🔍</div>
            <h3 className="no-results-title">Nenhuma resposta encontrada</h3>
            <p className="no-results-text">
              Tente buscar por palavras-chave diferentes ou crie uma nova resposta.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TelaRespostas;