var size = 0;
function categories_SouthboundSurfaces0(feature, value) {
                switch(value) {case 'Asphalt':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,120,219,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 30}),
    })];
                    break;
case 'Chipseal':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,16,227,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 30}),
    })];
                    break;}};
var styleCache_SouthboundSurfaces0={}
var style_SouthboundSurfaces0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Surface");
    var style = categories_SouthboundSurfaces0(feature, value);
    var labelText = "";
    var currentFeature = feature;
    clusteredFeatures = feature.get("features");
    if (typeof clusteredFeatures !== "undefined") {
        if (size >= 2) {
            labelText = size.toString()
        } else {
            labelText = ""
        }
        var key = value + "_" + labelText
        if (!styleCache_SouthboundSurfaces0[key]){
            var text = new ol.style.Text({
                  font: '16.9px \'.SF NS Text\', sans-serif',
                  text: labelText,
                  textAlign: "center",
                  fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 0, 1)'
                  }),
                });
            styleCache_SouthboundSurfaces0[key] = new ol.style.Style({"text": text})
        }
    } else {
        if ("" !== null) {
            labelText = String("");
        } else {
            labelText = ""
        }
        var key = value + "_" + labelText
        if (!styleCache_SouthboundSurfaces0[key]){
            var text = new ol.style.Text({
                    font: '16.9px \'.SF NS Text\', sans-serif',
                    text: labelText,
                    textBaseline: "center",
                    textAlign: "left",
                    offsetX: 5,
                    offsetY: 3,
                    fill: new ol.style.Fill({
                      color: 'rgba(0, 0, 0, 1)'
                    }),
                });
            styleCache_SouthboundSurfaces0[key] = new ol.style.Style({"text": text})
        }
    }
    var allStyles = [styleCache_SouthboundSurfaces0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};