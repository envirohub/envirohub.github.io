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
            });var format_SouthboundLeftlane1 = new ol.format.GeoJSON();
var features_SouthboundLeftlane1 = format_SouthboundLeftlane1.readFeatures(json_SouthboundLeftlane1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthboundLeftlane1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthboundLeftlane1.addFeatures(features_SouthboundLeftlane1);var lyr_SouthboundLeftlane1 = new ol.layer.Vector({
                source:jsonSource_SouthboundLeftlane1, 
                style: style_SouthboundLeftlane1,
                title: "Southbound - Left lane"
            });var format_NorthboundSurfaces2 = new ol.format.GeoJSON();
var features_NorthboundSurfaces2 = format_NorthboundSurfaces2.readFeatures(json_NorthboundSurfaces2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthboundSurfaces2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NorthboundSurfaces2.addFeatures(features_NorthboundSurfaces2);var lyr_NorthboundSurfaces2 = new ol.layer.Vector({
                source:jsonSource_NorthboundSurfaces2, 
                style: style_NorthboundSurfaces2,
                title: "Northbound - Surfaces"
            });var format_NorthboundLeftlane3 = new ol.format.GeoJSON();
var features_NorthboundLeftlane3 = format_NorthboundLeftlane3.readFeatures(json_NorthboundLeftlane3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthboundLeftlane3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NorthboundLeftlane3.addFeatures(features_NorthboundLeftlane3);var lyr_NorthboundLeftlane3 = new ol.layer.Vector({
                source:jsonSource_NorthboundLeftlane3, 
                style: style_NorthboundLeftlane3,
                title: "Northbound - Left lane"
            });

lyr_SouthboundSurfaces0.setVisible(false);lyr_SouthboundLeftlane1.setVisible(false);lyr_NorthboundSurfaces2.setVisible(true);lyr_NorthboundLeftlane3.setVisible(true);
var layersList = [baseLayer,lyr_SouthboundSurfaces0,lyr_SouthboundLeftlane1,lyr_NorthboundSurfaces2,lyr_NorthboundLeftlane3];
lyr_SouthboundSurfaces0.set('fieldAliases', {'Surface': 'Surface', });
lyr_SouthboundLeftlane1.set('fieldAliases', {'CPX level': 'CPX level', });
lyr_NorthboundSurfaces2.set('fieldAliases', {'Surface': 'Surface', });
lyr_NorthboundLeftlane3.set('fieldAliases', {'CPX level': 'CPX level', });
lyr_SouthboundSurfaces0.set('fieldImages', {'Surface': 'TextEdit', });
lyr_SouthboundLeftlane1.set('fieldImages', {'CPX level': 'TextEdit', });
lyr_NorthboundSurfaces2.set('fieldImages', {'Surface': 'TextEdit', });
lyr_NorthboundLeftlane3.set('fieldImages', {'CPX level': 'TextEdit', });
lyr_SouthboundSurfaces0.set('fieldLabels', {'Surface': 'no label', });
lyr_SouthboundLeftlane1.set('fieldLabels', {'CPX level': 'header label', });
lyr_NorthboundSurfaces2.set('fieldLabels', {'Surface': 'no label', });
lyr_NorthboundLeftlane3.set('fieldLabels', {'CPX level': 'header label', });
lyr_NorthboundLeftlane3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});