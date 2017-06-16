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
var format_SouthboundSurfaces0 = new ol.format.GeoJSON();
var features_SouthboundSurfaces0 = format_SouthboundSurfaces0.readFeatures(json_SouthboundSurfaces0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthboundSurfaces0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthboundSurfaces0.addFeatures(features_SouthboundSurfaces0);var lyr_SouthboundSurfaces0 = new ol.layer.Vector({
                source:jsonSource_SouthboundSurfaces0, 
                style: style_SouthboundSurfaces0,
                title: "Southbound - Surfaces"
            });var format_SouthboundRightlane1 = new ol.format.GeoJSON();
var features_SouthboundRightlane1 = format_SouthboundRightlane1.readFeatures(json_SouthboundRightlane1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthboundRightlane1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthboundRightlane1.addFeatures(features_SouthboundRightlane1);var lyr_SouthboundRightlane1 = new ol.layer.Vector({
                source:jsonSource_SouthboundRightlane1, 
                style: style_SouthboundRightlane1,
                title: "Southbound - Right lane"
            });var format_SouthboundLeftlane2 = new ol.format.GeoJSON();
var features_SouthboundLeftlane2 = format_SouthboundLeftlane2.readFeatures(json_SouthboundLeftlane2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthboundLeftlane2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthboundLeftlane2.addFeatures(features_SouthboundLeftlane2);var lyr_SouthboundLeftlane2 = new ol.layer.Vector({
                source:jsonSource_SouthboundLeftlane2, 
                style: style_SouthboundLeftlane2,
                title: "Southbound - Left lane"
            });var format_NorthboundSurfaces3 = new ol.format.GeoJSON();
var features_NorthboundSurfaces3 = format_NorthboundSurfaces3.readFeatures(json_NorthboundSurfaces3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthboundSurfaces3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NorthboundSurfaces3.addFeatures(features_NorthboundSurfaces3);var lyr_NorthboundSurfaces3 = new ol.layer.Vector({
                source:jsonSource_NorthboundSurfaces3, 
                style: style_NorthboundSurfaces3,
                title: "Northbound - Surfaces"
            });var format_NorthboundRightlane4 = new ol.format.GeoJSON();
var features_NorthboundRightlane4 = format_NorthboundRightlane4.readFeatures(json_NorthboundRightlane4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthboundRightlane4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NorthboundRightlane4.addFeatures(features_NorthboundRightlane4);var lyr_NorthboundRightlane4 = new ol.layer.Vector({
                source:jsonSource_NorthboundRightlane4, 
                style: style_NorthboundRightlane4,
                title: "Northbound - Right lane"
            });var format_NorthboundLeftlane5 = new ol.format.GeoJSON();
var features_NorthboundLeftlane5 = format_NorthboundLeftlane5.readFeatures(json_NorthboundLeftlane5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthboundLeftlane5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NorthboundLeftlane5.addFeatures(features_NorthboundLeftlane5);var lyr_NorthboundLeftlane5 = new ol.layer.Vector({
                source:jsonSource_NorthboundLeftlane5, 
                style: style_NorthboundLeftlane5,
                title: "Northbound - Left lane"
            });

lyr_SouthboundSurfaces0.setVisible(false);lyr_SouthboundRightlane1.setVisible(false);lyr_SouthboundLeftlane2.setVisible(false);lyr_NorthboundSurfaces3.setVisible(true);lyr_NorthboundRightlane4.setVisible(false);lyr_NorthboundLeftlane5.setVisible(true);
var layersList = [baseLayer,lyr_SouthboundSurfaces0,lyr_SouthboundRightlane1,lyr_SouthboundLeftlane2,lyr_NorthboundSurfaces3,lyr_NorthboundRightlane4,lyr_NorthboundLeftlane5];
lyr_SouthboundSurfaces0.set('fieldAliases', {'Surface': 'Surface', });
lyr_SouthboundRightlane1.set('fieldAliases', {'CPX level': 'CPX level', });
lyr_SouthboundLeftlane2.set('fieldAliases', {'CPX level': 'CPX level', });
lyr_NorthboundSurfaces3.set('fieldAliases', {'Surface': 'Surface', });
lyr_NorthboundRightlane4.set('fieldAliases', {'CPX level': 'CPX level', });
lyr_NorthboundLeftlane5.set('fieldAliases', {'CPX level': 'CPX level', });
lyr_SouthboundSurfaces0.set('fieldImages', {'Surface': 'TextEdit', });
lyr_SouthboundRightlane1.set('fieldImages', {'CPX level': 'TextEdit', });
lyr_SouthboundLeftlane2.set('fieldImages', {'CPX level': 'TextEdit', });
lyr_NorthboundSurfaces3.set('fieldImages', {'Surface': 'TextEdit', });
lyr_NorthboundRightlane4.set('fieldImages', {'CPX level': 'TextEdit', });
lyr_NorthboundLeftlane5.set('fieldImages', {'CPX level': 'TextEdit', });
lyr_SouthboundSurfaces0.set('fieldLabels', {'Surface': 'no label', });
lyr_SouthboundRightlane1.set('fieldLabels', {'CPX level': 'header label', });
lyr_SouthboundLeftlane2.set('fieldLabels', {'CPX level': 'header label', });
lyr_NorthboundSurfaces3.set('fieldLabels', {'Surface': 'no label', });
lyr_NorthboundRightlane4.set('fieldLabels', {'CPX level': 'header label', });
lyr_NorthboundLeftlane5.set('fieldLabels', {'CPX level': 'header label', });
lyr_NorthboundLeftlane5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});