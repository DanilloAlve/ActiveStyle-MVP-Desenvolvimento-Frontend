import React from 'react';
import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {
    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    };

    const imageStyle = {
        width: '200px',
        height: '200px',
        objectFit: 'contain',
        marginBottom: '15px'
    };

    const titleStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '10px',
        height: '48px',
        overflow: 'hidden'
    };

    const descriptionStyle = {
        fontSize: '14px',
        color: '#666',
        textAlign: 'center',
        marginBottom: '15px',
        height: '60px',
        overflow: 'hidden'
    };

    const priceStyle = {
        fontSize: '18px',
        color: '#0088ff',
        fontWeight: 'bold',
        marginBottom: '15px'
    };

    return (
        <div style={cardStyle}>
            <img 
                src={product.image} 
                alt={product.title} 
                style={imageStyle}
            />
            <h3 style={titleStyle}>{product.title}</h3>
            <p style={descriptionStyle}>{product.description}</p>
            <p style={priceStyle}>R$ {product.price.toFixed(2)}</p>
            <Button onClick={() => onAddToCart(product)}>
                Adicionar ao Carrinho
            </Button>
        </div>
    );
};

export default ProductCard;