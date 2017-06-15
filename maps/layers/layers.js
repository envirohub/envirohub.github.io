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
var format_RightlaneSouthbound0 = new ol.format.GeoJSON();
var features_RightlaneSouthbound0 = format_RightlaneSouthbound0.readFeatures(json_RightlaneSouthbound0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RightlaneSouthbound0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RightlaneSouthbound0.addFeatures(features_RightlaneSouthbound0);var lyr_RightlaneSouthbound0 = new ol.layer.Vector({
                source:jsonSource_RightlaneSouthbound0, 
                style: style_RightlaneSouthbound0,
                title: "Right lane - Southbound"
            });var format_RightlaneNorthbound1 = new ol.format.GeoJSON();
var features_RightlaneNorthbound1 = format_RightlaneNorthbound1.readFeatures(json_RightlaneNorthbound1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RightlaneNorthbound1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RightlaneNorthbound1.addFeatures(features_RightlaneNorthbound1);var lyr_RightlaneNorthbound1 = new ol.layer.Vector({
                source:jsonSource_RightlaneNorthbound1, 
                style: style_RightlaneNorthbound1,
                title: "Right lane - Northbound"
            });var format_LeftlaneSouthbound2 = new ol.format.GeoJSON();
var features_LeftlaneSouthbound2 = format_LeftlaneSouthbound2.readFeatures(json_LeftlaneSouthbound2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeftlaneSouthbound2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LeftlaneSouthbound2.addFeatures(features_LeftlaneSouthbound2);var lyr_LeftlaneSouthbound2 = new ol.layer.Vector({
                source:jsonSource_LeftlaneSouthbound2, 
                style: style_LeftlaneSouthbound2,
                title: "Left lane - Southbound"
            });var format_LeftlaneNorthbound3 = new ol.format.GeoJSON();
var features_LeftlaneNorthbound3 = format_LeftlaneNorthbound3.readFeatures(json_LeftlaneNorthbound3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeftlaneNorthbound3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LeftlaneNorthbound3.addFeatures(features_LeftlaneNorthbound3);var lyr_LeftlaneNorthbound3 = new ol.layer.Vector({
                source:jsonSource_LeftlaneNorthbound3, 
                style: style_LeftlaneNorthbound3,
                title: "Left lane - Northbound"
            });

lyr_RightlaneSouthbound0.setVisible(false);lyr_RightlaneNorthbound1.setVisible(false);lyr_LeftlaneSouthbound2.setVisible(false);lyr_LeftlaneNorthbound3.setVisible(true);
var layersList = [baseLayer,lyr_RightlaneSouthbound0,lyr_RightlaneNorthbound1,lyr_LeftlaneSouthbound2,lyr_LeftlaneNorthbound3];
lyr_RightlaneSouthbound0.set('fieldAliases', {'CPX level': 'CPX level', });
lyr_RightlaneNorthbound1.set('fieldAliases', {'CPX level': 'CPX level', });
lyr_LeftlaneSouthbound2.set('fieldAliases', {'CPX level': 'CPX level', });
lyr_LeftlaneNorthbound3.set('fieldAliases', {'CPX level': 'CPX level', });
lyr_RightlaneSouthbound0.set('fieldImages', {'CPX level': 'TextEdit', });
lyr_RightlaneNorthbound1.set('fieldImages', {'CPX level': 'TextEdit', });
lyr_LeftlaneSouthbound2.set('fieldImages', {'CPX level': 'TextEdit', });
lyr_LeftlaneNorthbound3.set('fieldImages', {'CPX level': 'TextEdit', });
lyr_RightlaneSouthbound0.set('fieldLabels', {'CPX level': 'header label', });
lyr_RightlaneNorthbound1.set('fieldLabels', {'CPX level': 'header label', });
lyr_LeftlaneSouthbound2.set('fieldLabels', {'CPX level': 'header label', });
lyr_LeftlaneNorthbound3.set('fieldLabels', {'CPX level': 'header label', });
lyr_LeftlaneNorthbound3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});