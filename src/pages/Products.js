import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import { useCart } from '../context/CartContext';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    const translateProduct = (product) => {
        const translations = {
            1: {
                title: "Mochila Elegante",
                description: "Mochila espaçosa e elegante, perfeita para o dia a dia. Possui compartimentos múltiplos e design moderno.",
                price: product.price * 4.95
            },
            2: {
                title: "Camiseta Slim Fit",
                description: "Camiseta masculina de algodão premium, corte moderno e confortável. Ideal para todas as ocasiões.",
                price: product.price * 4.95
            },
            3: {
                title: "Jaqueta Casual",
                description: "Jaqueta leve e versátil, perfeita para meia estação. Material durável e acabamento premium.",
                price: product.price * 4.95
            },
            4: {
                title: "Camisa Social",
                description: "Camisa social de algodão egípcio, corte slim. Excelente para ocasiões formais e trabalho.",
                price: product.price * 4.95
            },
            5: {
                title: "Bracelete John Hardy",
                description: "Bracelete John Hardy,Legends Naga 5mm, Prata/18K.",
                price: product.price * 4.95
            },
            6: {
                title: "Piercing Argola Articulada",
                description: "Piercing Argola Articulada em Titânio com Zircônias para Orelha, Conch, Hélix, Daith e Tragus - M2 Piercing.",
                price: product.price * 4.95
            }
        };

        return {
            ...product,
            title: translations[product.id]?.title || product.title,
            description: translations[product.id]?.description || product.description,
            price: translations[product.id]?.price || product.price * 4.95
        };
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=6');
                const data = await response.json();
                const translatedProducts = data.map(translateProduct);
                setProducts(translatedProducts);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <Layout>
                <div style={{textAlign: 'center', padding: '50px'}}>
                    Carregando produtos...
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <ProductGrid products={products} onAddToCart={addToCart} />
        </Layout>
    );
};

export default Products;
