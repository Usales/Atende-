import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    // Load dark mode preference from localStorage on component mount
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        const isDarkModeEnabled = savedDarkMode === 'true';
        
        setIsDarkMode(isDarkModeEnabled);
        
        // Apply dark mode class based on saved preference
        if (isDarkModeEnabled) {
            document.body.classList.add('dark-mode');
            const footer = document.querySelector('.footer');
            if (footer) {
                footer.classList.add('dark');
            }
        } else {
            document.body.classList.remove('dark-mode');
            const footer = document.querySelector('.footer');
            if (footer) {
                footer.classList.remove('dark');
            }
        }
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        
        // Save preference to localStorage
        localStorage.setItem('darkMode', newDarkMode.toString());
        
        // Toggle dark mode class on document body
        if (newDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        
        // Toggle dark mode class on footer if it exists
        const footer = document.querySelector('.footer');
        if (footer) {
            if (newDarkMode) {
                footer.classList.add('dark');
            } else {
                footer.classList.remove('dark');
            }
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

