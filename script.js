document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    const loginButton = document.querySelector('.dropdown-menu .btn-primary');
  
    if (loginButton) {
      loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // impede o submit do botão
        
        console.log('Cliquei no botão Entrar!');
  
        let welcomeDiv = document.getElementById('welcome-message');
  
        if (!welcomeDiv) {
          welcomeDiv = document.createElement('div');
          welcomeDiv.id = 'welcome-message';
          welcomeDiv.className = 'alert alert-success mt-2';
          
          loginButton.parentNode.appendChild(welcomeDiv);
        }
  
        welcomeDiv.textContent = 'Bem-vindo!';
      });
    }
  
    // FORMATAÇÃO DO CPF
    const cpfInput = document.getElementById('cpf');
  
    if (cpfInput) {
      cpfInput.addEventListener('input', function(e) {
        let value = cpfInput.value.replace(/\D/g, ''); // remove tudo que não é número
  
        if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos
  
        let formattedCPF = '';
  
        if (value.length > 0) {
          formattedCPF = value.substring(0, 3);
        }
        if (value.length >= 4) {
          formattedCPF += '.' + value.substring(3, 6);
        }
        if (value.length >= 7) {
          formattedCPF += '.' + value.substring(6, 9);
        }
        if (value.length >= 10) {
          formattedCPF += '-' + value.substring(9, 11);
        }
  
        cpfInput.value = formattedCPF;
      });
    }
  });


  const adviceButton = document.getElementById('get-advice');
  const adviceDisplay = document.getElementById('advice-text');
  
  // Simulando uma API de dicas de saúde (poderia ser um fetch real também!)
  const healthTips = [
    "Beba pelo menos 2 litros de água por dia.",
    "Durma entre 7 a 9 horas por noite.",
    "Pratique atividade física regularmente.",
    "Evite o consumo excessivo de açúcar.",
    "Faça pausas durante o trabalho para alongar o corpo.",
    "Mantenha uma alimentação rica em frutas e verduras.",
    "Use protetor solar diariamente, mesmo em dias nublados.",
    "Controle o estresse com técnicas de respiração.",
    "Mantenha suas vacinas em dia.",
    "Faça exames médicos regularmente."
  ];
  
  if (adviceButton) {
    adviceButton.addEventListener('click', function() {
      // Escolhe uma dica aleatória da lista
      const randomIndex = Math.floor(Math.random() * healthTips.length);
      const randomTip = healthTips[randomIndex];
      
      adviceDisplay.textContent = randomTip;
    });
  }


// Seleciona todas as imagens que devem tremer
const imagens = document.querySelectorAll('.imagem-treme');

// Para cada imagem adiciona os eventos de mouseover e mouseout
imagens.forEach(imagem => {
  imagem.addEventListener('mouseover', () => {
    imagem.classList.add('shake');
  });

  imagem.addEventListener('mouseout', () => {
    imagem.classList.remove('shake');
  });
});



const carteirinha = document.getElementById('carteirinha');

const imagemOriginal = 'carteirinha.jpg';
const imagemHover = 'carteirinha2.jpg';

carteirinha.addEventListener('mouseover', () => {
  carteirinha.src = imagemHover;
});

carteirinha.addEventListener('mouseout', () => {
  carteirinha.src = imagemOriginal;
});


// Mostrar o botão quando rolar a página
window.onscroll = function() {
  const btn = document.getElementById("btnTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
};

// Função para voltar ao topo
document.getElementById("btnTop").addEventListener("click", function(){
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});