<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/login.css">
  <script defer src="./js/login.js"></script>
  <link rel="shortcut icon" href="./images/brain.png" type="image/x-icon">
  <title>Jogo da Memoria | Login</title>
</head>

<body>

  <form class="login-form" method="get" action="game.php">
    <div class="login__header">
      <img src="./images/logo.png" alt="logo">
      <img src="./images/11.png" alt="brain icon">
      <h1>Jogo da Memoria</h1>
    </div>

    <input type="text" name="jogador" placeholder="Nome" class="login__input" required>
    <button type="submit" class="c">Jogar</button>
  </form>

  <footer>
    <p class="creditos">Desenvolvido por Cristyan das Neves Silva © 2025 linkedin.com/in/cristyandns/</p>
  </footer>

</body>

</html>
