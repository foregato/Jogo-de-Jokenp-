# Jogo de Jokenpô

Jogo clássico de **Pedra, Papel e Tesoura** desenvolvido para a web utilizando **HTML5**, **CSS3** e **JavaScript** puro[cite: 4]. O jogador escolhe uma das três opções e enfrenta o computador em tempo real, com feedback visual dinâmico e botão para reiniciar a partida[cite: 4, 16].

## Objetivo Acadêmico

Este projeto foi desenvolvido para suprir a atividade prática da disciplina de **Desenvolvimento em JavaScript** (Unidade 3, Aula 4 — Eventos em Nível de Página) do curso de **Análise e Desenvolvimento de Sistemas** da **Faculdade Anhanguera**[cite: 1, 2, 23].

## Funcionalidades

* **Escolha interativa:** Botões para selecionar Pedra, Papel ou Tesoura via eventos `onclick`[cite: 11].
* **Jogada aleatória:** O computador sorteia sua opção utilizando `Math.random()`[cite: 4].
* **Validação automática:** Verifica empate, vitória ou derrota e altera a mensagem e a cor do resultado na tela[cite: 16].
* **Reinício rápido:** Botão **Jogar Novamente** que restaura o estado inicial sem recarregar a página[cite: 12].

## Estrutura do Projeto

* `index.html` — Estrutura da página, botões de ação e área de resultado[cite: 5].
* `style.css` — Estilização do painel central, cores de feedback e animações simples de hover[cite: 8, 14].
* `script.js` — Lógica do sorteio, regras condicionais do jogo e manipulação do DOM[cite: 15, 16].

## Como Executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` diretamente no navegador (ou utilize a extensão **Live Server** no VS Code)[cite: 9].

## Autor

**Arthur Foregato Cavalcante Araujo** — Análise e Desenvolvimento de Sistemas (Faculdade Anhanguera - Campinas/SP)[cite: 1, 2].