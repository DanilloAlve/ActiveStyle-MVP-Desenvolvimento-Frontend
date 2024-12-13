import React from 'react';
import Header from './Header';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Layout = ({ children }) => {
    const footerStyle = {
        backgroundColor: '#f5f5f5',
        padding: '40px 20px',
        width: '100%',
        bottom: 0
    };

    const footerContentStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px'
    };

    const columnStyle = {
        display: 'flex',
        flexDirection: 'column'
    };

    const linkStyle = {
        color: '#333',
        textDecoration: 'none',
        marginBottom: '10px',
        transition: 'color 0.3s'
    };

    const socialLinksStyle = {
        display: 'flex',
        gap: '15px',
        marginTop: '10px'
    };

    const socialIconStyle = {
        fontSize: '24px',
        color: '#333',
        transition: 'color 0.3s'
    };

    const copyrightStyle = {
        textAlign: 'center',
        marginTop: '30px',
        borderTop: '1px solid #ddd',
        paddingTop: '20px',
        color: '#666'
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1, marginBottom: '40px' }}>
                {children}
            </main>
            <footer style={footerStyle}>
                <div style={footerContentStyle}>
                    <div style={columnStyle}>
                        <h3>Categorias</h3>
                        <a href="#" style={linkStyle}>Elegante</a>
                        <a href="#" style={linkStyle}>Clássico</a>
                        <a href="#" style={linkStyle}>Esportivo</a>
                        <a href="#" style={linkStyle}>Infantil</a>
                    </div>

                    <div style={columnStyle}>
                        <h3>Recursos</h3>
                        <a href="#" style={linkStyle}>Suporte</a>
                        <a href="#" style={linkStyle}>FAQ</a>
                        <a href="#" style={linkStyle}>Política de Privacidade</a>
                        <a href="#" style={linkStyle}>Termos de Uso</a>
                    </div>

                    <div style={columnStyle}>
                        <h3>Redes Sociais</h3>
                        <p>Siga-nos nas redes sociais</p>
                        <div style={socialLinksStyle}>
                            <a 
                                href="#" 
                                style={socialIconStyle}
                                onMouseOver={(e) => e.target.style.color = '#0088ff'}
                                onMouseOut={(e) => e.target.style.color = '#333'}
                            >
                                <FaTwitter />
                            </a>
                            <a 
                                href="#" 
                                style={socialIconStyle}
                                onMouseOver={(e) => e.target.style.color = '#0088ff'}
                                onMouseOut={(e) => e.target.style.color = '#333'}
                            >
                                <FaInstagram />
                            </a>
                            <a 
                                href="#" 
                                style={socialIconStyle}
                                onMouseOver={(e) => e.target.style.color = '#0088ff'}
                                onMouseOut={(e) => e.target.style.color = '#333'}
                            >
                                <FaYoutube />
                            </a>
                            <a 
                                href="#" 
                                style={socialIconStyle}
                                onMouseOver={(e) => e.target.style.color = '#0088ff'}
                                onMouseOut={(e) => e.target.style.color = '#333'}
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
                <div style={copyrightStyle}>
                    © 2024 Active Style.
                </div>
            </footer>
        </div>
    );
};

export default Layout;