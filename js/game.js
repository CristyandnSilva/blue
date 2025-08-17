const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.jogador');
const timer = document.querySelector('.timer');

const characters = ['1','2','3','4','5','6','7','8','9','10'];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

// Ajusta tamanho das cartas para caber na tela
const ajustarCards = () => {
  const cards = document.querySelectorAll('.card');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  
  const totalCards = cards.length;
  const screenWidth = window.innerWidth - 10; // padding do main
  const screenHeight = window.innerHeight - header.offsetHeight - footer.offsetHeight - 10;

  const columns = screenWidth < 920 ? 5 : 7;
  const rows = Math.ceil(totalCards / columns);

  const gap = 4; // gap do CSS
  const maxCardWidth = (screenWidth - (columns - 1) * gap) / columns;
  const maxCardHeight = (screenHeight - (rows - 1) * gap) / rows;

  // altura final mantendo proporção 3/4
  const cardHeight = Math.min(maxCardHeight, maxCardWidth / 0.75);

  cards.forEach(card => {
    card.style.height = `${cardHeight}px`;
  });

  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

// Verifica se o jogo terminou
const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');
  if (disabledCards.length === 20) {
    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`);
  }
}

// Verifica cartas selecionadas
const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');
    firstCard = '';
    secondCard = '';
    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');
      firstCard = '';
      secondCard = '';
    }, 500);
  }
}

// Revela carta
const revealCard = ({ target }) => {
  if (target.parentNode.className.includes('reveal-card')) return;
  if (!firstCard) {
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;
  } else if (!secondCard) {
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;
    checkCards();
  }
}

// Cria carta
const createCard = (character) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');
  front.style.backgroundImage = `url('../images/${character}.png')`;
  card.appendChild(front);
  card.appendChild(back);
  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character);
  return card;
}

// Carrega o jogo
const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];
  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);
  shuffledArray.forEach(character => {
    const card = createCard(character);
    grid.appendChild(card);
  });
  ajustarCards(); // ajusta tamanho das cartas após criar
}

// Timer
const startTimer = () => {
  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);
}

// Inicialização
window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('jogador');
  startTimer();
  loadGame();
}

// Ajusta cards ao redimensionar tela
window.addEventListener('resize', ajustarCards);
