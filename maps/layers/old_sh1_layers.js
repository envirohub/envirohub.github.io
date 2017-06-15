var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_LeftlaneNorthbound0 = new ol.format.GeoJSON();
var features_LeftlaneNorthbound0 = format_LeftlaneNorthbound0.readFeatures(json_LeftlaneNorthbound0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeftlaneNorthbound0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LeftlaneNorthbound0.addFeatures(features_LeftlaneNorthbound0);var lyr_LeftlaneNorthbound0 = new ol.layer.Vector({
                source:jsonSource_LeftlaneNorthbound0, 
                style: style_LeftlaneNorthbound0,
                title: "Left lane - Northbound"
            });var format_LeftlaneSouthbound1 = new ol.format.GeoJSON();
var features_LeftlaneSouthbound1 = format_LeftlaneSouthbound1.readFeatures(json_LeftlaneSouthbound1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeftlaneSouthbound1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LeftlaneSouthbound1.addFeatures(features_LeftlaneSouthbound1);var lyr_LeftlaneSouthbound1 = new ol.layer.Vector({
                source:jsonSource_LeftlaneSouthbound1, 
                style: style_LeftlaneSouthbound1,
                title: "Left lane - Southbound"
            });

lyr_LeftlaneNorthbound0.setVisible(false);lyr_LeftlaneSouthbound1.setVisible(true);
var layersList = [baseLayer,lyr_LeftlaneNorthbound0,lyr_LeftlaneSouthbound1];
lyr_LeftlaneNorthbound0.set('fieldAliases', {'CPX level': 'CPX level', });
lyr_LeftlaneSouthbound1.set('fieldAliases', {'CPX level': 'CPX level', });
lyr_LeftlaneNorthbound0.set('fieldImages', {'CPX level': 'TextEdit', });
lyr_LeftlaneSouthbound1.set('fieldImages', {'CPX level': 'TextEdit', });
lyr_LeftlaneNorthbound0.set('fieldLabels', {'CPX level': 'header label', });
lyr_LeftlaneSouthbound1.set('fieldLabels', {'CPX level': 'header label', });
lyr_LeftlaneSouthbound1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});