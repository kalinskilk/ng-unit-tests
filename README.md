# 🧪 Projeto de Testes Unitários em Angular

Este projeto tem como objetivo aplicar **conceitos básicos de testes unitários** em uma aplicação Angular.  
Foram realizados testes em **serviços (services)** que simulam operações matemáticas e requisições HTTP, demonstrando boas práticas no uso do **Jasmine** e **Karma**.

---

## 🚀 Tecnologias Utilizadas

- **Angular**
- **TypeScript**
- **Jasmine** (para criação dos testes)
- **Karma** (para execução dos testes)
- **HttpClientTestingModule** (para simulação de requisições HTTP)

---

## 🧩 Estrutura de Testes

### 🔢 CalculadoraService

Responsável por operações matemáticas básicas.

**Testes realizados:**

- Soma (`add`)
- Subtração (`subtracao`)
- Multiplicação (`multiplicacao`)
- Divisão (`divisao`)

✅ Os testes verificam se os resultados retornados estão corretos de acordo com os valores fornecidos.

---

### 📋 TodosService

Responsável por buscar dados de uma API externa de exemplo.

**Testes realizados:**

- Mock de requisições HTTP utilizando `HttpTestingController`
- Verificação de retorno dos dados simulados

> 💡 Os dados são mocados (simulados) para evitar chamadas reais à API durante os testes.

**API utilizada como referência:**  
👉 [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

---

## ⚙️ Como Executar o Projeto

```bash
# Instalar as dependências
npm install

# Executar os testes unitários
ng test
```

Os resultados dos testes serão exibidos no terminal e na interface do **Karma**.

---

## 🧠 Conceitos Abordados

- Criação de **testes unitários** para serviços Angular
- Uso de **spies (spyOn)** para simular comportamentos
- Testes com **HttpClientTestingModule** e **HttpTestingController**
- Boas práticas de isolamento de dependências em testes

---

## 👨‍💻 Autor

**Lucas Kalinski da Cunha**  
Desenvolvedor Full Stack
