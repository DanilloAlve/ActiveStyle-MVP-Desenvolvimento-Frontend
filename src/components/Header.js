import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Header = () => {
    const navigate = useNavigate();

    const headerStyle = {
        backgroundColor: '#0088ff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const logoButtonStyle = {
        backgroundColor: '#000',
        border: '2px solid #000',
        borderRadius: '8px',
        padding: '8px 12px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        minWidth: 'fit-content'
    };

    const logoTextStyle = {
        color: '#FFD700',
        fontWeight: 'bold',
        fontSize: '18px',
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        letterSpacing: '1px',
        textShadow: '0 0 1px rgba(255, 215, 0, 0.5)'
    };

    const menuContainerStyle = {
        display: 'flex',
        gap: '10px'
    };

    return (
        <header style={headerStyle}>
            <button 
                style={logoButtonStyle}
                onClick={() => navigate('/')}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#222';
                    e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#000';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                <span style={logoTextStyle}>AS</span>
            </button>

            <div style={menuContainerStyle}>
                <Button onClick={() => navigate('/products')}>Produtos</Button>
                <Button>Recursos</Button>
                <Button>Sobre</Button>
                <Button>Carrinho</Button>
                <Button>Entrar</Button>
                <Button 
                    variant="secondary"
                    onClick={() => navigate('/register')}
                >
                    Cadastrar
                </Button>
            </div>
        </header>
    );
};

export default Header;