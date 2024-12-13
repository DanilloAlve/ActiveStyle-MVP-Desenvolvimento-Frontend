import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart }) => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        padding: '40px',
        maxWidth: '1200px',
        margin: '0 auto'
    };

    return (
        <div style={gridStyle}>
            {products.map(product => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
};

export default ProductGrid;