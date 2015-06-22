$(document).ready(function() {
       
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

$.fn.qtip.defaults.style.classes = 'qtip-bootstrap';
$.fn.qtip.defaults.style.def = false;


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
        { lon: -97.70, lat: 30.3 , name: 'Austin', hours: 8 },
        { lon: -79.38, lat: 43.65 , name: 'Toronto', hours: 10 },
        { lon: -87.65, lat: 41.90 , name: 'Chicago', hours: 5 },
        { lon: -104.9, lat: 39.7 , name: 'Denver', hours: 8, img: 'https://krishnatest.blob.core.windows.net/krishnatestcontainer1/24hourkirtan.jpg' },
        { lon: -117.78, lat: 33.54 , name: 'Laguna Beach', hours: 12 },
        { lon: -118.2, lat: 33.5 , name: 'Los Angeles', hours: 20},
        { lon: -80.43, lat: 25.65 , name: 'Miami', hours: 20 },
        { lon: -74.34, lat: 40.92 , name: 'New Jersey', hours: 6},
        { lon: -78.78, lat: 35.87 , name: 'Hillsborough', hours: 10 },
        { lon: -121.60, lat: 38.70 , name: 'Sacramento', hours: 7 },
        { lon: -117.17, lat: 32.73 , name: 'San Diego', hours: 9},
        { lon: -122.0, lat: 37.3 , name: 'Silicon Valley', hours: 12},
        { lon: -73.9, lat: 40.8 , name: 'New York', hours: 19},
//        { lon: -104.9, lat: 40.2 , name: 'Ft. Collins', hours: randomIntFromInterval(3,20)},

        
    ];
        
var scaleHours = kartograph.scale.sqrt(cities, 'hours').range([2, 30]);
var scaleBooks = kartograph.scale.sqrt(cities, 'books').range([0, 30]);
    
map.addSymbols({
        type: kartograph.Bubble,
        data: cities,
        radius: function(city){return scaleHours(city.hours);},
        location: function(city) { return [city.lon, city.lat];},
        style: 'fill:#04c; stroke: #fff; fill-opacity: 0.5',
        tooltip: function(city) {
            return '<h4>'+city.name+'</h4><b>Harinam hours: </b>'+city.hours+'</br>'+((city.img) ? '<img class="img-responsive" src="'+city.img+'">' : '');
        },
        sortBy: 'radius desc'
    });
    
    
//Adding books symbols to map    
//    map.addSymbols({
//        type: kartograph.Bubble,
//        data: cities,
//        radius: function(city){return scaleBooks(city.books);},
//        location: function(city) { return [city.lon, city.lat];},
//        style: 'fill:#ffd500; stroke: #fff; fill-opacity: 0.65',
//        sortBy: 'radius desc'
//    });
    
//Adding city labels to map    
//map.addSymbols({
//        type: kartograph.LabeledBubble,
//        data: cities,
//        location: function(d){ return [d.lon, d.lat]; },
//        title: function(d) { return d.name; },
//        radius: 3,
//        center: false,
//        attrs: {fill: 'black'},
//        labelattrs: { 'font-size' : 10 },
//        buffer: true
//    });
    


    
},
            {padding: -5});
    
});

