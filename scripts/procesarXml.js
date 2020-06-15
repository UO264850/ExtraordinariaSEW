var juegos;
$.get("../xml/juegos.xml", function (xml) {
    $(xml).find("juego").each(function () {
        var juego;
        juego.titulo = $(this).attr('titulo');
        juego.desarrolladores = $(this).find("desarrollador").each(function () {
            var desarrollador;
            desarrollador.nombre = $(this).attr('nombre');
            desarrollador.fecha_fundacion = $(this).find("fecha_fundacion").text();
            desarrollador.ceo = $(this).find("ceo").text();
            desarrolladores.push(desarrollador);
        })
        juego.pais= $(this).find("pais").text();
        juego.fecha_lanz_japon= $(this).find("japon").text();
        juego.fecha_lanz_europa= $(this).find("europa").text();
        juego.fecha_lanz_america= $(this).find("america").text();
        juego.plataformas = $(this).find("plataforma").each(function () {
            var plataforma = $(this).find("plataforma").text();
            plataformas.push(plataforma);
        })
        juego.genero= $(this).find("genero").text();
        juego.jugadores= $(this).find("jugadores").text();
        juego.fotos = $(this).find("foto").each(function () {
            var foto = $(this).find("foto").text();
            fotos.push(foto);
        })
        
        juegos.push(juego);
    });
});