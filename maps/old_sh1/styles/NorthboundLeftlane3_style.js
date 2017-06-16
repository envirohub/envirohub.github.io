var size = 0;
var ranges_NorthboundLeftlane3 = [[0.000000, 1.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(244,244,244,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[1.000000, 90.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(43,131,186,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[90.000000, 91.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(75,154,181,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[91.000000, 92.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(107,176,175,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[92.000000, 93.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(139,199,170,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[93.000000, 94.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(171,221,164,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[94.000000, 95.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(192,230,171,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[95.000000, 96.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(213,238,178,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[96.000000, 97.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(234,247,184,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[97.000000, 98.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,191,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[98.000000, 99.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,235,168,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[99.000000, 100.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,215,144,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[100.000000, 101.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,195,120,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[101.000000, 102.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,174,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[102.000000, 103.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(244,137,80,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[103.000000, 104.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(234,99,62,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[104.000000, 105.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(225,62,45,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]],
[105.000000, 140.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,25,28,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 15}),
    })]]];
var styleCache_NorthboundLeftlane3={}
var style_NorthboundLeftlane3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("CPX level");
    var style = ranges_NorthboundLeftlane3[0][2];
    for (i = 0; i < ranges_NorthboundLeftlane3.length; i++){
        var range = ranges_NorthboundLeftlane3[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
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
        if (!styleCache_NorthboundLeftlane3[key]){
            var text = new ol.style.Text({
                  font: '16.9px \'.SF NS Text\', sans-serif',
                  text: labelText,
                  textAlign: "center",
                  fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 0, 1)'
                  }),
                });
            styleCache_NorthboundLeftlane3[key] = new ol.style.Style({"text": text})
        }
    } else {
        if ("" !== null) {
            labelText = String("");
        } else {
            labelText = ""
        }
        var key = value + "_" + labelText
        if (!styleCache_NorthboundLeftlane3[key]){
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
            styleCache_NorthboundLeftlane3[key] = new ol.style.Style({"text": text})
        }
    }
    var allStyles = [styleCache_NorthboundLeftlane3[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};