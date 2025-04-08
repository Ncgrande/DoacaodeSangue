
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="cadastro.css" />
    <title>Carteirinha Digital</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet"> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

</head>
<body>
      <header class="header">
      

        <div class="container header__container">
          <div class="header__logo">
            <a class="navbar-brand" href="#"
              ><img src="logo.png" alt="Logo"
            /></a>
          </div>
          <p class="text-white">Olá, 
            <?php 
            if (isset($rownome['nome_completo'])) {
                echo $rownome['nome_completo']; 
            } else {
                echo "Usuário não encontrado.";
            }
            ?>
          </p>
            <div class="btn-group dropend">
              <button type="button" class="btn btn-warning ms-3">
                Menu
              </button>
              <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropend</span>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="meudados.php">Meus Dados</a></li>
                <li><a class="dropdown-item" href="carteirinha.php">Solicitar Carteirinha Digital</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item logout-link" href="logout.php">Sair</a></li>
              </ul>
            </div>
            <nav class="menu">
    
                <ul>
                <li><a href="requisitos.html">Requisitos para Doação</a></li>
                <li><a href="quemsomos.html">Quem Somos </a></li>
                <li><a href="ondedoar.html">Onde Doar</a></li>
                <li><a href="contato.html">Contato</a></li>
                </ul>
    
            </nav>
        </div>         
      </div>
        
      </header>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      
  <div id="carteirinha">
    <div class="carteira">

    <div class="container text-center">
        <div class="row">

                
                <div class="h4 pb-2 mb-4 text-whitesmoke border-bottom border-whitesmoke" style="font-size: 40px;">
                    Carteira de Doador de Sangue
                  </div>
                
        
        
<div class="textod">    
<div>
    
<br>
<p>
    <br>
    <h4><b>Receba agora sua Carteirinha Digital</b></h4>
</p>
<div class="container">
    <h3>Receba sua carteira de doador(a) por e-mail e receba notificações periodicas de doações de sangue</h3>
    <form action="chamador1.php" method="POST">
    <div class="mb-3">
        <label for="email" class="form-label">Digite seu e-mail</label>
        <input type="email" class="form-control" id="email" name="email" required>
    </div>
    <button type="submit" class="btn btn-warning">Enviar</button>
</form>

</div>
<br>
<img src="Carteira.png" class="rounded float-start" alt="carteira">
<img src="Carteira0.png" class="rounded float-end mb-4" alt="carteira">
<br>
<br>
<div class="botvolod">
    <a class="btn btn-outline-light mb-0" href="../../index.php">Voltar</a>
 </div>
<br>
<br>
</div>
</div>
    </div>
    </div>
</div>

</div>
<footer>
    <p>hemouni@email.com</p>
    <br/>
</footer>
</body>
</html>