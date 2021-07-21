//mensaje explicativo enviar por correo, añadir a favoritos
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

//desplegar alerta de correo enviado
$('#enviarCorreo').click(function() {
    alert("El correo fue enviado correctamente...");
});

//cambiar color del texto titulo-lista
$("h3").on("dblclick", function() {
    $(this).toggleClass('change-color');
})

//toggle tarjetas seccion recetas relacionadas
$("#card1").hide();
$("#card2").hide();
$("#card3").hide();

$("h5").on('click', function() {
    var cardId = $(this).attr('data-card');
    $('#' + cardId).toggle(300);
});