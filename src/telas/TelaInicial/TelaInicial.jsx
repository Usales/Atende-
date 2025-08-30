import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaInicial.css';

function TelaInicial() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const categories = [
    { 
      icon: '💻', 
      title: 'Rede & Internet',
      description: 'Problemas de conexão, Wi-Fi, VPN'
    },
    { 
      icon: '🖥️', 
      title: 'Sistema Operacional',
      description: 'Windows, macOS, Linux'
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
    }
  ];

  const popularAnswers = [
    'Aguardando retorno do colaborador',
    'Mensagem de encerramento do atendimento',
    'Aviso de regularização de equipamento',
    'Como acessar recursos da VPN'
  ];

  const handleSearch = () => {
    console.log('Searching for:', search);
  };

  const handleCategoryClick = (category) => {
    console.log('Category clicked:', category.title);
    
    // Navigate to TelaRespostas for "Respostas Prontas" category
    if (category.title === 'Respostas Prontas') {
      navigate('/respostas');
    }
    // Navigate to TelaExtensoes for "Extensões Úteis" category
    else if (category.title === 'Extensões Úteis') {
      navigate('/extensoes');
    }
  };

  const handleAnswerClick = (answer) => {
    console.log('Answer clicked:', answer);
    // Navigate to TelaRespostas when clicking on popular answers
    navigate('/respostas');
  };

  return (
    <div className="tela-inicial">
      {/* Search Section */}
      <section className="search-section animate-slide-down">
        <div className="search-container">
          <input
            type="text"
            placeholder="Digite sua dúvida ou palavra-chave..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button 
            onClick={handleSearch}
            className="search-button"
          >
            Buscar
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section animate-slide-down animate-delay-1">
        <h2 className="section-title">
          📂 Categorias
        </h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`category-card animate-slide-down animate-delay-${2 + index}`}
              onClick={() => handleCategoryClick(category)}
            >
              <div className="category-icon">{category.icon}</div>
              <div className="category-content">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Answers Section */}
      <section className="popular-section animate-slide-down animate-delay-8">
        <h2 className="section-title">
          ✨ Respostas mais usadas
        </h2>
        <ul className="popular-list">
          {popularAnswers.map((answer, index) => (
            <li 
              key={index}
              className={`popular-item animate-slide-down animate-delay-${9 + index}`}
              onClick={() => handleAnswerClick(answer)}
            >
              • {answer}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TelaInicial;