var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PARROQUIAS_1 = new ol.format.GeoJSON();
var features_PARROQUIAS_1 = format_PARROQUIAS_1.readFeatures(json_PARROQUIAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARROQUIAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARROQUIAS_1.addFeatures(features_PARROQUIAS_1);
var lyr_PARROQUIAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARROQUIAS_1, 
                style: style_PARROQUIAS_1,
                popuplayertitle: "PARROQUIAS",
                interactive: true,
                title: '<img src="styles/legend/PARROQUIAS_1.png" /> PARROQUIAS'
            });
var format_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2 = new ol.format.GeoJSON();
var features_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2 = format_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2.readFeatures(json_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2.addFeatures(features_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2);
var lyr_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2, 
                style: style_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2,
                popuplayertitle: "NIÑOS, NIÑAS Y ADOLECENTES EN SITUACION DE CALLE",
                interactive: true,
                title: '<img src="styles/legend/NIOSNIASYADOLECENTESENSITUACIONDECALLE_2.png" /> NIÑOS, NIÑAS Y ADOLECENTES EN SITUACION DE CALLE'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PARROQUIAS_1.setVisible(true);lyr_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PARROQUIAS_1,lyr_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2];
lyr_PARROQUIAS_1.set('fieldAliases', {'PARROQUIAS': 'PARROQUIAS', });
lyr_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2.set('fieldAliases', {'ID': 'ID', 'ESTADO': 'ESTADO', 'MUNICIPIOS': 'MUNICIPIO', 'PARROQUIAS': 'PARROQUIA', 'EJE': 'EJE', 'DIRECCIÓN': 'DIRECCION', 'CANTIDAD_D': 'CANTIDAD DE NIÑOS', 'EDADES': 'EDADES', 'actividade': 'ACTIVIDADES', 'OTROS': 'OTRAS ACTIVIDADES', 'OBSEVACION': 'OBSERVACION', });
lyr_PARROQUIAS_1.set('fieldImages', {'PARROQUIAS': 'TextEdit', });
lyr_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2.set('fieldImages', {'ID': 'TextEdit', 'ESTADO': 'TextEdit', 'MUNICIPIOS': 'TextEdit', 'PARROQUIAS': 'TextEdit', 'EJE': 'TextEdit', 'DIRECCIÓN': 'TextEdit', 'CANTIDAD_D': 'TextEdit', 'EDADES': 'TextEdit', 'actividade': 'TextEdit', 'OTROS': 'TextEdit', 'OBSEVACION': 'TextEdit', });
lyr_PARROQUIAS_1.set('fieldLabels', {'PARROQUIAS': 'inline label - always visible', });
lyr_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2.set('fieldLabels', {'ID': 'hidden field', 'ESTADO': 'inline label - always visible', 'MUNICIPIOS': 'inline label - always visible', 'PARROQUIAS': 'inline label - always visible', 'EJE': 'inline label - always visible', 'DIRECCIÓN': 'inline label - always visible', 'CANTIDAD_D': 'inline label - always visible', 'EDADES': 'inline label - always visible', 'actividade': 'inline label - always visible', 'OTROS': 'inline label - always visible', 'OBSEVACION': 'inline label - always visible', });
lyr_NIOSNIASYADOLECENTESENSITUACIONDECALLE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});