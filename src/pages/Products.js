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
                description: "Spacious and stylish backpack, perfect for everyday use. It features multiple compartments and a modern design.",
                price: product.price * 4.95
            },
            2: {
                title: "Camiseta Slim Fit",
                description: "Men's premium cotton t-shirt, with a modern and comfortable fit. Ideal for all occasions.",
                price: product.price * 4.95
            },
            3: {
                title: "Jaqueta Casual",
                description: "Lightweight and versatile jacket, perfect for mid-season. Durable material and premium finish.",
                price: product.price * 4.95
            },
            4: {
                title: "Camisa Social",
                description: "Egyptian cotton dress shirt, slim fit. Perfect for formal occasions and work.",
                price: product.price * 4.95
            },
            5: {
                title: "Bracelete John Hardy",
                description: "Bracelete John Hardy,Legends Naga 5mm, Prata/18K.",
                price: product.price * 4.95
            },
            6: {
                title: "Piercing Argola Articulada",
                description: "Articulated Titanium Hoop Piercing with Zirconias for Ear, Conch, Helix, Daith, and Tragus - M2 Piercing.",
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
