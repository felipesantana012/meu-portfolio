$(document).ready(function(){
  

    
     // Mostrar o botão "voltar ao topo" quando o usuário rolar para baixo
     $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#btnVoltarTopo').fadeIn();
        } else {
            $('#btnVoltarTopo').fadeOut();
        }
    });


     // Rolagem suave para o topo da página quando o botão é clicado
     $('#btnVoltarTopo').click(function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
    



  //função para elementos aparecer apartir do topo da tela
    function revelarElementoTop(seletor) {
        ScrollReveal().reveal(seletor, {
            origin: 'top',
            duration: '2000',
            distance: '20%'
        });
    }

    //percorrer o array com as tags e depois chamar a função
    const seletores = ['#sobre-mim','#skills-hobbies','#formacao','.projetos__projeto', '#contato']
    for (const key in seletores) {
        revelarElementoTop(seletores[key]);
    }

});

