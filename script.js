const opcoes = ['Pedra', 'Papel', 'Tesoura'];

function jogar(escolhaUsuario) {
  // Sorteia a jogada do PC escolhendo um índice aleatório entre 0 e 2
  const escolhaPc = opcoes[Math.floor(Math.random() * 3)];
  const resultadoDiv = document.getElementById('resultado');
  const btnReiniciar = document.getElementById('reiniciar');

  // Checa empate
  if (escolhaUsuario === escolhaPc) {
    resultadoDiv.innerText = `Empate! Ambos escolheram ${escolhaUsuario}.`;
    resultadoDiv.style.color = '#e67e22';
  // Valida todas as 3 condições de vitória do jogador
  } else if (
    (escolhaUsuario === 'Pedra' && escolhaPc === 'Tesoura') ||
    (escolhaUsuario === 'Papel' && escolhaPc === 'Pedra') ||
    (escolhaUsuario === 'Tesoura' && escolhaPc === 'Papel')
  ) {
    resultadoDiv.innerText = `Ganhaste! ${escolhaUsuario} vence ${escolhaPc}.`;
    resultadoDiv.style.color = '#27ae60';
  // Se não empatou nem ganhou, o jogador perdeu
  } else {
    resultadoDiv.innerText = `Perdeste! ${escolhaPc} vence ${escolhaUsuario}.`;
    resultadoDiv.style.color = '#c0392b';
  }

  // Mostra o botão de reiniciar na tela
  btnReiniciar.style.display = 'inline-block';
}

function reiniciarJogo() {
  const resultadoDiv = document.getElementById('resultado');
  const btnReiniciar = document.getElementById('reiniciar');

  // Reseta o texto, a cor e esconde o botão de reiniciar novamente
  resultadoDiv.innerText = 'Faça sua jogada!';
  resultadoDiv.style.color = '#000';
  btnReiniciar.style.display = 'none';
}