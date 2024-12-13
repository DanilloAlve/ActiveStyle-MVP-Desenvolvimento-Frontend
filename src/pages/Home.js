import React from 'react';
import Layout from '../components/Layout';
import '../styles/Home.css';

const Home = () => {
    const mainContentStyle = {
        textAlign: 'center',
        padding: '50px 20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const titleContainerStyle = {
        display: 'inline-block',
        backgroundColor: '#fff',
        padding: '20px 40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        margin: '20px auto'
    };

    const titleStyle = {
        color: '#ff0000',
        fontSize: '48px',
        fontWeight: 'bold',
        margin: 0,
        padding: 0,
        textTransform: 'uppercase',
        letterSpacing: '2px'
    };

    return (
        <Layout>
            <main style={mainContentStyle}>
                <div style={titleContainerStyle}>
                    <h1 style={titleStyle}>Active Style</h1>
                </div>
            </main>
        </Layout>
    );
};

export default Home;