
function mostrarNoticia(idNoticia) {
  const main = document.querySelector('.main-content');
  if (main) main.style.display = 'none';

  document.getElementById(idNoticia).classList.remove('oculto');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volver() {
  const main = document.querySelector('.main-content');
  if (main) main.style.display = 'grid';

  document.querySelectorAll('.noticia').forEach(noticia => {
    noticia.classList.add('oculto');
  });
}

 




function mostrarNoticia(idNoticia) {
  const main = document.querySelector('.main-content');
  if (main) main.style.display = 'none';

  document.getElementById(idNoticia).classList.remove('oculto');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volver() {
  const main = document.querySelector('.main-content');
  if (main) main.style.display = 'grid';

  document.querySelectorAll('.noticia').forEach(noticia => {
    noticia.classList.add('oculto');
  });
}

 



