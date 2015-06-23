$(document).ready(function(){
    $(function () {
                        cityAreaData = cities.map(function(a) {return a.hours});
                        map = new jvm.Map({
                                container: $('#map'),
                                map: 'us_aea_en',
                                regionsSelectable: true,
                                markersSelectable: true,
                                markers: cities,
                                regionStyle: {
                                    initial: {
                                        fill: '#ececf8'
                                    },
                                    selected: {
                                        fill: '#357B89'
                                    }
                                },
                                markerStyle: {
                                    initial: {
//                                        fill: '#B93275',
                                        fill: '#990000',
//                                        stroke: '#B93275',
                                        stroke: '#fff',
                                        opacity: 0.5,
                                        "stroke-width": 1,
                                        "stroke-opacity":1
                                    },
                                    selected:{
                                        fill: '#790035'
                                    },
                                    hover:{
                                        stroke: '#000'
                                    }
                                },
                                series: {
                                    markers: [{
                                        attribute: 'r',
                                        scale: [4, 30],
                                        values: cityAreaData,
                                        normalizeFunction: 'polynomial'
                                            }],
                                    regions:[{
                                        values: bookscores,
                                        scale: ['#f0f9e8','#bae4bc', '#7bccc4', '#2b8cbe' ],
                                        normalizeFunction: 'polynomial'
                                    }]
                                },
                                onMarkerTipShow: function(event, label, index){
                                    label.html(
                                        '<b>'+cities[index].name+'</b><br>'+
                                        '<b>Hours of Harinam: </b>'+cityAreaData[index]
//                                        +((cities[index].img) ? '<img class="img-responsive" src="'+city[index].img+'">' : '')
                                    );
                                },
                                onRegionTipShow: function(e, el, code){
                                    if(bookscores[code]){
                                        el.html(el.html()+ ': '+bookscores[code] + ' book points');
                                    }
                                    else{
                                        el.html(el.html());
                                    }
                                },
                                onMarkerClick: function(event, code){
                                    console.log(code);
                                    $('#myModal').modal('show')
                                    
                                }
                            });
                        });
});


var bookscores =  {
  "US-CA":18839.4  ,
  "US-KS":10634.85 ,
  "US-IL":2930.35  ,
  "US-FL":2562.2  ,
  "US-MD":1889.65 ,
  "US-MS":1798.25 ,
  "US-DC":1750.75 ,
  "US-CO":1667.75 ,
  "US-TX":1589.25 ,
  "US-GA":1117.6  ,
  "US-NY":920.25  ,
  "US-AZ":705.5  ,
  "US-NC":414.8  ,
  "US-PA":352.25  ,
  "US-LA":317.75  ,
  "US-CT":278.75  
  };

var cities =[
    {latLng: [30.3,-97.90] , name: 'Austin', hours: 8},    
    {latLng: [40, -104],name: 'Denver', hours: 10, img: 'https://krishnatest.blob.core.windows.net/krishnatestcontainer1/24hourkirtan.jpg'},
    {latLng: [32.1, -110],name: 'Tucson', hours: 5},
    {latLng: [33.5, -118.2],name: 'Los Angeles', hours: 8},
    {latLng: [37.3, -122],name: 'San Francisco', hours: 12},
    {latLng: [40.8, -73.9],name: 'New York City', hours: 15},
    {latLng: [25.8, -80.2],name: 'Miami', hours: 14},
    {latLng: [41.90,-87.65], name: 'Chicago', hours: 8},
    {latLng: [33.54,-117.78], name: 'Laguna Beach', hours: 7},
    {latLng: [40.92,-74.34], name: 'New Jersey', hours: 4},
    {latLng: [35.87, -78.78], name: 'Hillsborough', hours: 11 },
    {latLng: [38.70,-121.60], name: 'Sacramento', hours: 8 },
    {latLng: [32.73, -117.17], name: 'San Diego', hours: 12},

];
        