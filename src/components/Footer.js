import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 Active Style.</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#0056D2',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%'
};

export default Footer;