$(function() {
  var words = [
    'Bienvenue sur mon site!',
    'N\'hesitez pas parcourir le site!',
    'Retrouvez-moi sur les réseaux!'
  ],
  i = 0;

  // On gère l'affichage du menu reponsive pour les écrans inférieurs ou égaux à medium (< 992px)
  $(".navbar-responsive").toggle();
  $('.navbar-responsive a').click(function(){
    $(".navbar-responsive").hide();
});

  $(".menu").click(function () {
    $(".navbar-responsive").toggle("slow");
  });

  // On gère l'affichage aléatoire des phrases d'accroche du header (toutes les 3.5 secondes)
  setInterval(function() {
    $("#word").fadeOut(function() {
      $(this).html(words[i = (i + 1) % words.length]).fadeIn();
    });
  }, 4000);

  // On gère le scroll vers les différentes sections du site
  $(".scroll").click(function() {
    var section = $("." + this.id);
    $("html,body").animate({scrollTop: section.offset().top}, 'slow');
  });

  // On gère l'affichage des progressbar pour les compétences
  window.sr = ScrollReveal();
  sr.reveal('.progress-bar', {
    origin: 'left',
    duration: 2000,
    distance: '100%'
  })
});
