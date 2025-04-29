# ✅ Cypress Demo Tests

[![GitHub last commit](https://img.shields.io/github/last-commit/alexpaulodejesus/cypress-demo-tests)](https://github.com/alexpaulodejesus/cypress-demo-tests)
[![GitHub repo size](https://img.shields.io/github/repo-size/alexpaulodejesus/cypress-demo-tests)](https://github.com/alexpaulodejesus/cypress-demo-tests)
[![Node version](https://img.shields.io/badge/node-%3E=18.x-brightgreen)](https://nodejs.org/)
[![Cypress version](https://img.shields.io/badge/cypress-12.17.4-blue)](https://docs.cypress.io/)

Projeto de **testes automatizados com Cypress**, voltado para aprendizado, demonstração de boas práticas e uso como portfólio pessoal.

---

## 🚀 Funcionalidades testadas

- Visita de páginas com `cy.visit()`
- Interações com campos de texto, checkboxes e botões
- Seleção de opções em dropdowns
- Validações com `cy.should()`
- Navegação por links e verificação de URLs
- Organização de testes com `describe` e `it`

---

## 📁 Estrutura do projeto

cypress-demo-tests/ ├── cypress/ │ ├── e2e/ │ │ └── example_site.cy.js │ └── support/ │ ├── commands.js │ └── e2e.js ├── cypress.config.js ├── package.json └── README.md


---

## ⚙️ Instalação

`bash
git clone https://github.com/alexpaulodejesus/cypress-demo-tests.git
cd cypress-demo-tests
npm install

---

🧪 Executando os testes
Via interface (modo interativo)

npx cypress open

Via terminal (modo headless)

npx cypress run

---

🌐 Site testado

Este projeto usa como base o site de demonstração oficial do Cypress:

🔗 https://example.cypress.io
📚 Aprendizado e objetivo

---

Esse projeto foi desenvolvido com foco em aprendizado de automação com Cypress, domínio dos principais comandos e estruturação de um repositório completo para portfólio.

---

✅ Vantagens do Cypress

    Execução visual no navegador

    Ótima documentação

    Suporte nativo a JavaScript/Node

    Esperas automáticas (waits inteligentes)

⚠️ Limitações

    Apenas testes web (não suporta mobile)

    Não lida bem com múltiplas abas

    Algumas restrições para interações fora do domínio (CORS)

✍️ Autor

Alex Paulo de Jesus
🔗 github.com/alexpaulodejesus
📌 Licença

Este projeto está sob a licença MIT.


---

Se quiser, posso adicionar esse README direto no `.zip` ou te ajudar a comitar direto no GitHub agor
