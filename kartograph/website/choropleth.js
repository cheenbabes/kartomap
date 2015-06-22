$(document).ready(function () {

    $.fn.qtip.defaults.style.classes = 'qtip-bootstrap';
    $.fn.qtip.defaults.style.def = false;


    var map = $K.map('#map');
    
    map.loadMap("final.svg", function () {

       var bookscores = {
            "California": {"Score": 18839.4},
            "Kansas": {"Score": 10634.85},
            "Illinois": {"Score": 2930.35},
            "Florida": {
                "Score": 2562.2
            },
            "Maryland": {
                "Score": 1889.65
            },
            "Mississippi": {
                "Score": 1798.25
            },
            "District of Columbia": {
                "Score": 1750.75
            },
            "Colorado": {
                "Score": 1667.75
            },
            "Texas": {
                "Score": 1589.25
            },
            "Georgia": {
                "Score": 1117.6
            },
            "New York": {
                "Score": 920.25
            },
            "Arizona": {
                "Score": 705.5
            },
            "Ontario": {
                "Score": 985.95
            },
            "British Columbia": {
                "Score": 611
            },
            "North Carolina": {
                "Score": 414.8
            },
            "Pennsylvania": {
                "Score": 352.25
            },
            "Louisiana": {
                "Score": 317.75
            },
            "Connecticut": {
                "Score": 278.75
            }
        }
        
        color = chroma.scale('Greens').domain(bookscores, 5, 'quantiles', 'Score');




        // add layers
        map.addLayer('background', {
            styles: {
                fill: '#d1f3f7',
                'stroke': 'none'
            }
        });
        map.addLayer('world', {
            styles: {
                fill: '#ebe7e5',
                'stroke': 'none'
            }
        });
        map.addLayer('states', {
            title: function (data) {
                return data.name;
            },
            styles: {
                fill: function (d) {
                    return color(bookscores[d.name]?
                                 bookscores[d.name].Score:
                                0);
                },
                'stroke': function (d) {
                    return color(bookscores.[d.name]?
                                 bookscores.[d.name].Score:
                                0);
                },
                'stroke-width': 0.5,
                'stroke-opacity': 0.4
            },
        });

        //    map.choropleth({
        //        layer: 'states',
        //        data: bookscores,
        //        key: 0,
        //        colors: function(d){
        //            return colscale.getColor(d);
        //        }
        //    });


    });

});