# Nome do Projeto

Uma breve descrição do que este projeto faz e qual problema ele resolve.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TestCafe](https://devexpress.github.io/testcafe/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

## Aprendizado

npx testcafe "chrome:emulation:device=iPhone 12 Pro" tests/teste.js //executa simulando um iphone 12
npx testcafe -b //ve os browser disponiveis
npx testcafe chrome tests/teste.js // exceuta a feature direta e com navegador que se quer
npx testcafe chrome testcafe.config.js // isso não funcionou - era tipo arquivo de config
