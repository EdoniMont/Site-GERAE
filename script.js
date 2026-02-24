document.addEventListener("DOMContentLoaded", function() {
    // Seleciona a imagem da logo
    const logo = document.getElementById('gerae-inicial');
    
    // Adiciona o evento de clique
    logo.addEventListener('click', function() {
        // Redireciona para a página principal
        window.location.href = "index.html"; // Substitua pelo caminho correto se necessário
    });
});


let paginaAtual = 0;

function mostrarPagina() {
  const paginas = document.querySelectorAll('.pagina');

  paginas.forEach((p, i) => {
    p.classList.remove('ativa');
    p.classList.remove('anterior');

    if (i === paginaAtual) {
      p.classList.add('ativa');
    }

    if (i < paginaAtual) {
      p.classList.add('anterior');
    }
  });
}

function avancarPagina() {
  const total = document.querySelectorAll('.pagina').length;

  paginaAtual++;

  if (paginaAtual >= total) {
    paginaAtual = 0;
  }

  mostrarPagina();
}

function voltarPagina() {
  const total = document.querySelectorAll('.pagina').length;

  paginaAtual--;

  if (paginaAtual < 0) {
    paginaAtual = total - 1;
  }

  mostrarPagina();
}

window.onload = mostrarPagina;










document.addEventListener("DOMContentLoaded", function () {

  const btnTopo = document.getElementById("btnTopo");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });

  btnTopo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});

