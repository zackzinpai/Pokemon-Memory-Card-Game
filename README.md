README - Projeto "Pokémon Memorize"

Este projeto consiste no desenvolvimento de um jogo da memória com temática Pokémon, utilizando as tecnologias HTML, CSS e JavaScript. O objetivo principal do sistema é aplicar os conhecimentos adquiridos durante o curso de Análise e Desenvolvimento de Sistemas (ADS), envolvendo lógica de programação, manipulação de elementos DOM e controle de mídia com áudio.

Descrição do Projeto

O jogo da memória apresenta uma interface retrô inspirada em jogos clássicos. Ao iniciar, o usuário se depara com uma tela de boas-vindas contendo um botão para iniciar o jogo. Após iniciado, é exibido um tabuleiro com cartas viradas para baixo, onde o jogador deve encontrar os pares correspondentes.

Durante a interação, são executados efeitos sonoros para ações como virar carta, combinar pares e vencer o jogo. Também há uma trilha sonora de fundo com controle de volume e botão de ativação/desativação.

Estrutura de Arquivos

A estrutura de arquivos do projeto é a seguinte:

📦 pokemon-memorize/├── index.html # Estrutura principal da página ├── style.css # Estilo visual da interface (não incluído no envio) ├── script.js # Lógica e regras do jogo (não incluído no envio) ├── fundo.mp3 # Trilha sonora de fundo ├── flip.mp3 # Som ao virar uma carta ├── match.mp3 # Som ao encontrar um par (deve ser incluído) ├── win.mp3 # Som ao vencer o jogo (deve ser incluído)

Tecnologias Utilizadas

HTML5: Estruturação da interface.
CSS3: Estilização visual com temática retrô (Press Start 2P).
JavaScript: Implementação da lógica do jogo, controle de eventos e manipulação de áudio.
Áudio HTML5: Utilização da tag para reprodução de sons e música.

Recursos e Funcionalidades

Tela de introdução com boas-vindas e botão de início.
Tabuleiro com cartas interativas e lógica de verificação de pares.
Sistema de contagem de pares encontrados.
Botão de reinício do jogo.
Controle de volume e alternância de trilha sonora.
Sons distintos para cada evento relevante (virada, acerto, vitória).

Observações

Os arquivos match.mp3 e win.mp3 são referenciados no código HTML, mas não foram incluídos nesta versão.
Os arquivos style.css e script.js são essenciais para o funcionamento completo do sistema.
O jogo não requer conexão com servidor ou banco de dados, sendo executado inteiramente no lado cliente.
Objetivo Acadêmico
Este projeto foi desenvolvido como atividade prática para reforçar os conceitos trabalhados na disciplina de Desenvolvimento Front-End, incluindo organização de código, separação de responsabilidades (estrutura, estilo, comportamento) e aplicação de lógica condicional e interativa.
