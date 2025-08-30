import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    // Ensure we start in light mode
    useEffect(() => {
        document.body.classList.remove('dark-mode');
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // Toggle dark mode class on document body
        document.body.classList.toggle('dark-mode');
        
        // Toggle dark mode class on footer if it exists
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.classList.toggle('dark');
        }
    };

    return (
        <header className={isDarkMode ? 'dark' : ''}>
            <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <span>A</span>
                <span>t</span>
                <span>e</span>
                <span>n</span>
                <span>d</span>
                <span>e</span>
                <span>+</span>
            </h1>
            
            <div className="header-subtitle">
                Base de conhecimento e respostas para Suporte de TI
            </div>
            
            <div className="theme-toggle">
                <button 
                    onClick={toggleTheme}
                    className="theme-button"
                    title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
                >
                    <span className="theme-icon">
                        {isDarkMode ? '☀️' : '🌑'}
                    </span>
                    <span className="theme-text">
                        {isDarkMode ? 'Claro' : 'Escuro'}
                    </span>
                </button>
            </div>
        </header>
    );
}

export default Header;

