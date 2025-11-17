# 🧪 Restful Booker API Testing com Cypress

Projeto de automação de testes da API **Restful Booker**, utilizando **Cypress**, com cenários funcionais (CRUD), testes negativos e testes de contrato com validação via **JSON Schema**.  
O projeto também adota abordagem **BDD (Behavior Driven Development)** com cenários descritos em formato **Gherkin**.

---

## 🎯 Objetivos do Projeto

- Garantir que os endpoints da API respondam corretamente a operações CRUD de reservas
- Validar comportamentos esperados e retornos de erro (testes negativos)
- Verificar o contrato das respostas via validação de JSON Schema
- Documentar cenários de teste em BDD para maior alinhamento entre negócio e QA
- Consolidar um projeto completo para portfólio QA

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| **Cypress** | Testes de API |
| **Node.js / NPM** | Ambiente de execução |
| **AJV** | Validação de contrato (JSON Schema) |
| **Allure Report** | Relatório de testes |
| **VS Code** | Desenvolvimento |
| **Git + GitHub** | Versionamento |

---

## 📁 Estrutura do Projeto

qa-restful-booker-cypress/
├─ cypress/
│ ├─ e2e/
│ │ ├─ api/ → Casos de teste CRUD, negativos e contrato
│ │ └─ schemas/ → JSON Schemas utilizados na validação
├─ allure-results/ → Resultados brutos do Allure
├─ planilha/ → Documentação de casos de teste
├─ package.json
└─ README.md


---

## 🚀 Como Executar os Testes

1 Instalar dependências
npm install

2 Executar os testes em modo headless
npm run test

3 Abrir o Cypress interativo
npx cypress open

4 Gerar relatório Allure
npm run allure:report

5 Abrir relatório Allure
npm run allure:open

🔍 Tipos de Testes Implementados
Tipo de Teste	Descrição
Funcionais (CRUD)	POST, GET, PUT, PATCH, DELETE
Testes Negativos	Dados inválidos, token incorreto, ID inexistente
Contrato (JSON Schema)	Validação estruturada das respostas

🧪 Exemplo de BDD (Gherkin)
Funcionalidade: Reservas - Criar nova reserva
  Cenário: Criar reserva com dados válidos
    Dado que envio uma requisição POST para "/booking" com dados completos
    Quando o sistema processar a criação da reserva
    Então deve retornar status 200 ou 201
    E o corpo da resposta deve conter o campo "bookingid"

📊 Casos de Teste (Matriz)

🌐 Google Sheets:
🔗 https://docs.google.com/spreadsheets/d/1VZqYTzJct-DDGsgjSvS8P_FULuiJ__sy/edit?gid=1202820172#gid=1202820172

 📈 Relatório Allure

O projeto utiliza Allure Report para visualização dos resultados de teste, permitindo:

Lista de testes executados

Status (PASS/FAIL)

Anexos e evidências

Métricas e indicadores

Exemplo de comandos:
npm run allure:report
npm run allure:open

🗂 Evidências

As evidências podem incluir:

📌 Capturas de tela link: https://drive.google.com/drive/folders/1sr4YGC0MRpHepaq_d-LUIKll9dKXuZHX?usp=drive_link
📌 HAR / cURL
📌 Execução em vídeo (opcional)
📌 Links do Allure Report

📌 Melhorias Futuras

 Integrar pipeline CI/CD (GitHub Actions)

 Publicar relatório Allure no GitHub Pages

 Importar massa de teste via arquivo JSON

 Adicionar testes para autenticação expirada

 Implementar testes de performance (k6 / JMeter)

👤 Autor

Rodrigo Garcia da Silva
🔗 LinkedIn: https://www.linkedin.com/in/rodrigo-garcia-da-silva/

🐙 GitHub: https://github.com/Rodrigo-Garcia17

🤝 Contribuições

Sugestões, melhorias e feedbacks são bem-vindos!


