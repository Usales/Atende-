import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaInicial.css';
import cieeImage from '../../assets/images/ciee.jpg';

// Safe import of framer-motion with fallback
let motion;
let isMotionAvailable = false;

try {
  const framerMotion = require('framer-motion');
  motion = framerMotion.motion;
  isMotionAvailable = true;
} catch (error) {
  console.warn('Framer Motion not available, using fallback');
  // Fallback components
  motion = {
    div: ({ children, className, onClick, ...props }) => (
      <div className={className} onClick={onClick}>{children}</div>
    ),
    section: ({ children, className, ...props }) => (
      <section className={className}>{children}</section>
    ),
    ul: ({ children, className, ...props }) => (
      <ul className={className}>{children}</ul>
    ),
    li: ({ children, className, onClick, ...props }) => (
      <li className={className} onClick={onClick}>{children}</li>
    )
  };
}

function TelaInicial() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Framer Motion animation variants - slide down from top
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const popularItemVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

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
      icon: cieeImage, 
      title: 'Bases CIEE',
      description: 'Foco em resolução de problemas do CIEE',
      isImage: true
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

  const handleAnswerClick = (answer) => {
    console.log('Answer clicked:', answer);
    // Navigate to TelaRespostas when clicking on popular answers
    navigate('/respostas');
  };

  // Conditional animation props - only apply if Framer Motion is available
  const getAnimationProps = (variants, additionalProps = {}) => {
    if (!isMotionAvailable) return {};
    return {
      initial: "hidden",
      animate: "visible",
      variants,
      ...additionalProps
    };
  };

  const getHoverProps = (hoverEffect) => {
    if (!isMotionAvailable) return {};
    return { whileHover: hoverEffect };
  };

  return (
    <motion.div 
      className="tela-inicial"
      {...getAnimationProps(containerVariants)}
    >
      {/* Search Section */}
      <motion.section 
        className="search-section" 
        {...getAnimationProps(itemVariants)}
      >
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
      </motion.section>

      {/* Categories Section */}
      <motion.section 
        className="categories-section" 
        {...getAnimationProps(itemVariants)}
      >
        <h2 className="section-title">
          📂 Categorias
        </h2>
        <motion.div 
          className="categories-grid"
          {...getAnimationProps(containerVariants)}
        >
          {categories.map((category, index) => {
            return (
              <motion.div 
                key={index}
                className="category-card"
                {...getAnimationProps(cardVariants)}
                {...getHoverProps("hover")}
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
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Popular Answers Section */}
      <motion.section 
        className="popular-section" 
        {...getAnimationProps(itemVariants)}
      >
        <h2 className="section-title">
          ✨ Respostas mais usadas
        </h2>
        <motion.ul 
          className="popular-list"
          {...getAnimationProps(containerVariants)}
        >
          {popularAnswers.map((answer, index) => (
            <motion.li 
              key={index}
              className="popular-item"
              {...getAnimationProps(popularItemVariants)}
              {...getHoverProps({ x: 15, transition: { duration: 0.2 } })}
              onClick={() => handleAnswerClick(answer)}
            >
              • {answer}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </motion.div>
  );
}

export default TelaInicial;