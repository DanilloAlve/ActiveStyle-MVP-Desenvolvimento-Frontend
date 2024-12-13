import React, { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const formStyle = {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '16px'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', formData);
        // Login
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <Layout>
            <form style={formStyle} onSubmit={handleSubmit}>
                <h2 style={{textAlign: 'center', color: '#333'}}>Login</h2>
                
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />
                
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={formData.password}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />
                
                <Button onClick={handleSubmit}>
                    Entrar
                </Button>
            </form>
        </Layout>
    );
};

export default Login;