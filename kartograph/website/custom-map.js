$(document).ready(function() {

var map = $K.map('#map');

map.loadMap("mapfinal.svg", function() {
    // add layers
    map.addLayer('background', { 
        styles:{
            fill: '#e8f9fb',
            'stroke': 'none'
        }
    });
    map.addLayer('world',{
        styles:{
            fill: '#f5f3f2',
            'stroke':'none'
        }
    });  
    map.addLayer('states',{
        styles:{
            fill: '#FFF',
            'stroke': '#882222',
            'stroke-width': 0.5,
            'stroke-opacity': 0.4
        }
    });
    map.addLayer('urban',{
        styles:{
            fill:'#553344',
            'fill-opacity':0.6,
            'stroke':'none'
        }
    });
    
    

    map.addSymbols({
        type: kartograph.Bubble,
        data: [{ lon: -104, lat: 40.5, name: 'Denver' }],
        radius: 100,
        location: function(d) { return [d.lon, d.lat] },
        style: 'fill:#800000; stroke: #fff; opacity: 0.5',
    });
    
});
    
});

