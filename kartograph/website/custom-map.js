$(document).ready(function() {

var map = $K.map('#map');

map.loadMap("final.svg", function() {
    // add layers
    map.addLayer('background', { 
        styles:{
            fill: '#d1f3f7',
            'stroke': 'none'
        }
    });
    map.addLayer('world',{
        styles:{
            fill: '#ebe7e5',
            'stroke':'none'
        }
    });  
    map.addLayer('states',{
        title: function(data) {
            return data.name;
        },
        styles:{
            fill: '#ececf8',
            'stroke': '#882222',
            'stroke-width': 0.5,
            'stroke-opacity': 0.4
        },
        //make this whatever to change anything about the path for mouse events
//        mouseenter: function(d, path){
//            path.attr('fill', Math.random() < 0.5 ? '#c04' : '#04c');
//        },
//        mouseleave: function(d, path){
//            path.animate({fill: '#ececf8'}, 1000);
//        }
    });
//    map.addLayer('urban',{
//        styles:{
//            fill:'#553344',
//            'fill-opacity':0.6,
//            'stroke':'none'
//        }
//    });  
    
 map.getLayer('states').style('fill', function(data){
        return data.admin == "Canada" ? '#ebe7e5' : '#ececf8';
    });
    
var cities = [
        { lon: -97.70, lat: 30.3 , name: 'Austin', hours: 5 },
        { lon: -79.38, lat: 43.65 , name: 'Toronto', hours: 5 },
        { lon: -87.65, lat: 41.90 , name: 'Chicago', hours: 5 },
        { lon: -104.9, lat: 39.7 , name: 'Denver', hours: 5 },
        { lon: -117.78, lat: 33.54 , name: 'Laguna Beach', hours: 5 },
        { lon: -118.2, lat: 33.5 , name: 'Los Angeles', hours: 20},
        { lon: -80.43, lat: 25.65 , name: 'Miami', hours: 5 },
        { lon: -74.34, lat: 40.92 , name: 'New Jersey', hours: 5 },
        { lon: -78.78, lat: 35.87 , name: 'Durham', hours: 5 },
        { lon: -121.60, lat: 38.70 , name: 'Sacramento', hours: 5 },
        { lon: -117.17, lat: 32.73 , name: 'San Diego', hours: 4},
        { lon: -122.0, lat: 37.3 , name: 'San Francisco', hours: 18},
        { lon: -73.9, lat: 40.8 , name: 'New York', hours: 35},
        
    ];
        
var scale = kartograph.scale.sqrt(cities, 'hours').range([8, 30]);
    
map.addSymbols({
        type: kartograph.Bubble,
        data: cities,
        radius: function(city){return scale(city.hours);},
        location: function(city) { return [city.lon, city.lat];},
        style: 'fill:#800000; stroke: #fff; opacity: 0.5',
        tooltip: function(city) {
            return '<h3>'+city.name+'</h3>'+city.hours+' hours';
        }
    });
    
map.addSymbols({
        type: kartograph.LabeledBubble,
        data: cities,
        location: function(d){ return [d.lon, d.lat]; },
        title: function(d) { return d.name; },
        radius: 3,
        center: false,
        attrs: {fill: 'black'},
        labelattrs: { 'font-size' : 10 },
        buffer: true
    });
    


    
});
    
});

