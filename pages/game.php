<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/reset.css">
  <link rel="stylesheet" href="../css/game.css">
  <script defer src="../js/game.js"></script>
  <link rel="shortcut icon" href="../images/brain.png" type="image/x-icon">
  <title>Jogo da Memoria</title>
</head>

<body>

  <main>
    <header>
      <span class="jogador"><?php echo isset($_GET['jogador']) ? htmlspecialchars($_GET['jogador']) : ''; ?></span>
      <span>Tempo: <span class="timer">00</span></span>
    </header>

    <div class="grid"></div>

    <footer>
      <p class="creditos">Desenvolvido por Cristyan das Neves Silva © 2025 linkedin.com/in/cristyandns/</p>
    </footer>
  </main>

</body>

</html>
