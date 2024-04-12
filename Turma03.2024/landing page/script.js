
// Inicializa o Swiper com configurações específicas para o efeito coverflow.
var swiper = new Swiper(".swiper", {
  effect: "coverflow", // Define o efeito de transição dos slides como coverflow.
  grabCursor: true, // Permite que o cursor se torne um "grabbing hand" quando sobre os slides.
  centeredSlides: true, // Mantém os slides centralizados na viewport.
  coverflowEffect: {
    rotate: 0, // Desativa a rotação dos slides no efeito coverflow.
    stretch: 0, // Desativa o estiramento dos slides no efeito coverflow.
    depth: 100, // Profundidade do efeito z-axis para os slides, aumentando a sensação de 3D.
    modifier: 3, // Multiplicador de efeitos para o coverflow, ampliando o efeito 3D.
    slideShadows: true // Ativa sombras nos slides, adicionando profundidade.
  },
  loop: true, // Ativa o loop infinito dos slides.
  pagination: {
    el: ".swiper-pagination", // Especifica o elemento de paginação.
    clickable: true // Torna os botões de paginação clicáveis.
  },
  breakpoints: {
    // Define configurações específicas para diferentes larguras de tela (breakpoints).
    640: {
      slidesPerView: 2 // Em telas acima de 640px, mostra 2 slides por vez.
    },
    768: {
      slidesPerView: 1 // Em telas acima de 768px, volta a mostrar 1 slide por vez.
    },
    1024: {
      slidesPerView: 3 // Em telas acima de 1024px, mostra 3 slides por vez.
    }
  }
});

/* Outras funcionalidades do script seriam documentadas aqui, seguindo o mesmo padrão. */
