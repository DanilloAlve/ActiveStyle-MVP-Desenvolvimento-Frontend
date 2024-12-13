import React from 'react';

const Button = ({ onClick, children, variant = 'primary', style = {} }) => {
    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '20px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: variant === 'primary' ? '#0088ff' : '#333',
        color: '#fff',
        transition: 'background-color 0.3s',
        ...style
    };

    return (
        <button 
            style={buttonStyle}
            onClick={onClick}
            type={onClick ? "button" : "submit"}
        >
            {children}
        </button>
    );
};

export default Button;