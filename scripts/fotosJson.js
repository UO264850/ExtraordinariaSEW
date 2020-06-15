var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; 
$.getJSON( flickrAPI, { 
    tags: "terraria", 
    tagmode: "any", 
    format: "json" 
}).done(function( data ) { 
    $.each( data.items, function( i, item ) { 
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" ); 
        if ( i === 4 ) { 
            return false; 
        } 
    }); 
}); 
