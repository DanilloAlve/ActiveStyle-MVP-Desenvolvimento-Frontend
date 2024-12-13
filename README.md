# Loja Roupas React

Esta aplicação é um projeto de uma loja fictícia de roupas desenvolvido em React. O principal objetivo é demonstrar o uso de **componentização**, **gerenciamento de estado** e boas práticas de desenvolvimento front-end.

## 💡 Sobre a Aplicação
A aplicação simula uma loja virtual com funcionalidades básicas como:

- **Página Inicial**: Um layout simples com destaque para o nome da loja.
- **Página de Produtos**: Lista de produtos carregados dinamicamente de uma API fictícia, com tradução e conversão de valores.
- **Cadastro e Login**: Formulários reutilizáveis para autenticação de usuários.
- **Gerenciamento de Carrinho**: Implementado via Context API para adicionar produtos ao carrinho.

Este projeto é um exemplo de como criar uma interface reutilizável, modular e responsiva.

## 📂 Estrutura de Diretórios
A estrutura de diretórios do projeto foi organizada da seguinte forma:

```
├── public/           # Arquivos públicos
├── src/              # Código-fonte principal
│   ├── components/   # Componentes reutilizáveis (Button, Layout, etc.)
│   ├── context/      # Contextos para gerenciamento de estado (CartContext)
│   ├── pages/        # Páginas principais da aplicação (Home, Products, Register, Login)
│   ├── styles/       # Arquivos de estilo
│   ├── App.js        # Componente raiz
│   ├── index.js      # Ponto de entrada da aplicação
├── package.json      # Configurações do projeto e dependências
```

## 🛠️ Funcionalidades

### **Componentização**
- Componentes reutilizáveis como `Button`, `Layout`, `ProductCard` e `ProductGrid` garantem a consistência visual e a economia de código.

### **Consumo de API**
- A página de produtos consome dados da [Fake Store API](https://fakestoreapi.com/) para listar itens fictícios e aplica traduções e conversões de preço.

### **Gerenciamento de Estado com Context API**
- O `CartContext` gerencia o estado do carrinho de compras, permitindo adicionar e manipular produtos de qualquer parte da aplicação.

### **Validação de Formulários**
- Os formulários de Login e Cadastro validam dados do usuário e exibem mensagens de erro, como verificação de senhas que não coincidem.

### **Estilização Customizada**
- Estilos aplicados diretamente nos componentes com `CSS-in-JS` e arquivos CSS dedicados.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **React Router DOM**: Gerenciamento de rotas para navegação entre páginas.
- **Context API**: Para o gerenciamento de estado global.
- **Fake Store API**: Provedor de dados fictícios para produtos.
- **Webpack**: Empacotador de módulos para desenvolvimento.
- **Babel**: Transpiler para compatibilidade de código.

## ⚙️ Como Executar o Projeto

### Pré-requisitos
- **Node.js** (>= 16.0.0)
- **npm** (>= 7.0.0) ou **yarn**

### Passos para execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/loja-roupas-react.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd loja-roupas-react
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

5. Acesse a aplicação no navegador:
   ```
   http://localhost:8080
   ```

## 📸 Capturas de Tela

### Página Inicial
![Página Inicial](https://via.placeholder.com/800x400?text=Página+Inicial)

### Produtos
![Produtos](https://via.placeholder.com/800x400?text=Produtos)

### Cadastro
![Cadastro](https://via.placeholder.com/800x400?text=Cadastro)


