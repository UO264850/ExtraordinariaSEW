class Jugadores {
    constructor(){
        this.url = "https://steamcharts.com/";
    }
    cargarDatos(){
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function(datos){

                    var csgo = $('juegos',datos).text("Counter-Strike: Global Offensive");
                    var dota2 = $('juegos',datos).text("Dota 2");
                    var fallout = $('juegos',datos).text("Fallout 4");
                    var gtav = $('juegos',datos).text("Grand Theft Auto V");
                    var monsterhunter = $('juegos',datos).text("MONSTER HUNTER: WORLD");
                    var terraria = $('juegos',datos).text("Terraria");
                    var jug_csgo = $('juegos',datos).text("1,305,714");
                    var jug_dota2  = $('juegos',datos).text("1,291,328");
                    var jug_fallout = $('juegos',datos).text("471,955");
                    var jug_gtav = $('juegos',datos).text("360,761");
                    var jug_monsterhunter = $('juegos',datos).text("329,333");
                    var jug_terraria = $('juegos',datos).text("486,918");
                    
                    var stringDatos =  "<ul><li>" + csgo +": " + jug_csgo + "</li>";
                        stringDatos += "<li>" + dota2 +": " + jug_dota2 + "</li>";
                        stringDatos += "<li>" + fallout +": " + jug_fallout + "</li>";
                        stringDatos += "<li>" + gtav +": " + jug_gtav + "</li>";
                        stringDatos += "<li>" + monsterhunter +": " + jug_monsterhunter + "</li>";
                        stringDatos += "<li>" + terraria +": " + jug_terraria + "</li>";
                    $("p").html(stringDatos);                  
                },
        });
    }
}
var jugadores = new Jugadores();