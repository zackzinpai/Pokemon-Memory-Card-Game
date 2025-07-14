let cardsData = [
    { name: 'c1', img: 'images/c1.png' },
    { name: 'c2', img: 'images/c2.png' },
    { name: 'c3', img: 'images/c3.png' },
    { name: 'c4', img: 'images/c4.png' },
    { name: 'c5', img: 'images/c5.png' },
    { name: 'c6', img: 'images/c6.png' },
    { name: 'c7', img: 'images/c7.png' },
    { name: 'c8', img: 'images/c8.png' },
    { name: 'c9', img: 'images/c9.png' },
    { name: 'c1', img: 'images/c1.png' },
    { name: 'c2', img: 'images/c2.png' },
    { name: 'c3', img: 'images/c3.png' },
    { name: 'c4', img: 'images/c4.png' },
    { name: 'c5', img: 'images/c5.png' },
    { name: 'c6', img: 'images/c6.png' },
    { name: 'c7', img: 'images/c7.png' },
    { name: 'c8', img: 'images/c8.png' },
    { name: 'c9', img: 'images/c9.png' },
   ];
  
   let cards = [];
   let cardsChosen = [];
   let cardsChosenId = [];
   let cardsWon = [];
   let board;
   let resultView;
  
   const fundoAudio = document.getElementById("fundoAudio");
   const flipSound = document.getElementById("flipSound");
   const matchSound = document.getElementById("matchSound");
   const winSound = document.getElementById("winSound");
  
   const toggleMusicButton = document.getElementById('toggleMusic');
   const volumeSlider = document.getElementById('volumeSlider');
   let isMusicPlaying = false;
  
   if (fundoAudio && volumeSlider) {
    fundoAudio.volume = parseFloat(volumeSlider.value);
   }
  
   function toggleMusic() {
    if (fundoAudio) {
    if (isMusicPlaying) {
     fundoAudio.pause();
     toggleMusicButton.textContent = 'Música OFF';
    } else {
     fundoAudio.play()
      .then(() => {
       toggleMusicButton.textContent = 'Música ON';
      })
      .catch(error => {
       console.error("Erro ao iniciar a música de fundo:", error);
       alert("O navegador pode ter bloqueado o início automático da música. Por favor, interaja com a página.");
       isMusicPlaying = false;
      });
    }
    isMusicPlaying = !isMusicPlaying;
    }
   }
  
   function setVolume() {
    if (fundoAudio && volumeSlider) {
    fundoAudio.volume = parseFloat(volumeSlider.value);
    }
   }
  
   document.getElementById("start").addEventListener("click", function() {
    const bvSection = document.getElementById("bv");
    const gameSection = document.getElementById("game");
  
    bvSection.style.opacity = "0";
    bvSection.style.transition = "opacity 0.5s ease";
  
    setTimeout(() => {
    bvSection.style.display = "none";
  
    gameSection.classList.remove("hidden");
    gameSection.style.display = "flex";
  
    gameSection.style.opacity = "0";
    gameSection.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
     gameSection.style.opacity = "1";
    }, 10);
  
    if (!isMusicPlaying) {
     fundoAudio.play()
      .then(() => {
       isMusicPlaying = true;
       toggleMusicButton.textContent = 'Música ON';
      })
      .catch(error => {
       console.warn("Música não iniciada automaticamente, aguardando interação do usuário.", error);
      });
    }
  
    }, 500);
   });
  
   document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
   });
  
   function recarregarPagina() {
    location.reload();
   }
  
   function initializeGame() {
    cardsData.sort(() => 0.5 - Math.random());
    cardsChosen = [];
    cardsChosenId = [];
    cardsWon = [];
    board = document.querySelector('.board');
    resultView = document.querySelector('#result');
    board.innerHTML = '';
    resultView.textContent = 'Pares Encontrados: 0';
    createBoard();
   }
  
   function createBoard() {
    cards = [];
    for (let i = 0; i < cardsData.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-id', i);
  
    const frontFace = document.createElement('div');
    frontFace.classList.add('card-face', 'card-front');
    frontFace.style.backgroundImage = `url(${cardsData[i].img})`;
    frontFace.style.backgroundSize = 'cover';
    frontFace.style.backgroundPosition = 'center';
  
    const backFace = document.createElement('div');
    backFace.classList.add('card-face', 'card-back');
    backFace.style.backgroundImage = `url(images/fd.png)`;
    backFace.style.backgroundSize = 'cover';
    backFace.style.backgroundPosition = 'center';
  
    card.appendChild(frontFace);
    card.appendChild(backFace);
    card.addEventListener('click', flipCard);
    board.appendChild(card);
    cards.push(card);
    }
   }
  
   function checkForMatch() {
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
  
    if (optionOneId === optionTwoId) {
    cards[optionOneId].classList.remove('flipped');
    cards[optionTwoId].classList.remove('flipped');
    } else if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  
    if (matchSound) {
     matchSound.currentTime = 0;
     matchSound.play();
    }
  
    } else {
    cards[optionOneId].classList.remove('flipped');
    cards[optionTwoId].classList.remove('flipped');
    }
  
    cardsChosen = [];
    cardsChosenId = [];
    resultView.textContent = 'Pares Encontrados: ' + cardsWon.length;
    if (cardsWon.length === cardsData.length / 2) {
    resultView.textContent = 'Parabéns! Você conseguiu encontrar todas as cartas';
  
    if (winSound) {
     fundoAudio.pause();
     isMusicPlaying = false;
     toggleMusicButton.textContent = 'Música OFF';
     winSound.volume = 0.1;  
     winSound.currentTime = 0;
     winSound.play();
    }
    }
   }
  
   function flipCard() {
    let cardId = this.getAttribute('data-id');
    if (cardsChosenId.includes(cardId)) return;
    if (cardsChosen.length < 2) {
    cardsChosen.push(cardsData[cardId].name);
    cardsChosenId.push(cardId);
    this.classList.add('flipped');
  
    if (flipSound) {
     flipSound.currentTime = 0;
     flipSound.play();
    }
  
    if (cardsChosen.length === 2) {
     setTimeout(checkForMatch, 500);
    }
    }
   }
  
   function resetGame() {
    cards = [];
    cardsChosen = [];
    cardsChosenId = [];
    cardsWon = [];
    initializeGame();
    winSound.pause();  
    winSound.currentTime = 0; 
    fundoAudio.play().catch(e => console.warn("Erro ao retomar música após reset:", e));
   }
  
   toggleMusicButton.addEventListener('click', toggleMusic);
   volumeSlider.addEventListener('input', setVolume);