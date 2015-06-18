$(document).ready(function () {
    var map = $K.map('#map');
    map.loadMap("laea.svg", function () {
        // add layers.
        map.addLayer('background', {
            styles: {
                fill: '#e8f9fb',
                'stroke': 'none'
            }
        });
        map.addLayer('world', {
            styles: {
                fill: '#f5f3f2',
                'stroke': 'none'
            }
        });
        map.addLayer('states', {
            styles: {
                fill: '#FFF',
                'stroke': '#882222',
                'stroke-width': 0.5,
                'stroke-opacity': 0.4
            }
        });
        map.addLayer('urban', {
            styles: {
                fill: '#553344',
                'fill-opacity': 0.6,
                'stroke': 'none'
            }
        });
        cities = [
            {
                city_name: "New York",
                nb_visits: 1500,
                lon: -73.98,
                lat: 40.74,
}
];
        var scale = $K.scale.sqrt(cities, 'nb_visits').range([0, 40]);
        map.addSymbols({
            type: Kartograph.Bubble,
            data: cities,
            location: function (city) {
                return [city.lon, city.lat];
            },
            radius: function (city) {
                return scale(city.nb_visits);
            },
            sortBy: 'radius desc',
            style: 'fill:#800; stroke:#fff; fill-opacity:0.5'
        });
    });
});