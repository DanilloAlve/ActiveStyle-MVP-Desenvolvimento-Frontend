import React, { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Estilos
    const formContainerStyle = {
        maxWidth: '400px',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    };

    const formGroupStyle = {
        marginBottom: '20px'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        color: '#333',
        fontSize: '16px'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box'
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#0088ff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    };

    const titleStyle = {
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px'
    };

    // Handlers
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }
        console.log('Dados do formulário:', formData);
        alert('Cadastro realizado com sucesso!');
    };

    return (
        <Layout>
            <div style={formContainerStyle}>
                <h2 style={titleStyle}>Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    <div style={formGroupStyle}>
                        <label style={labelStyle}>Nome</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                            placeholder="Digite seu nome completo"
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                            placeholder="Digite seu e-mail"
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>Senha</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>Confirmar Senha</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                            placeholder="Confirme sua senha"
                        />
                    </div>

                    <button 
                        type="submit" 
                        style={buttonStyle}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#0066cc'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#0088ff'}
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Register;