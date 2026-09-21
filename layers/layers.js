var wms_layers = [];

var lyr_NyesteortofotoGeodanmark_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.datafordeler.dk/GeoDanmarkOrto/orto_foraar/1.0.0/WMS?apikey=iRa1d4GICO49yMRPF3jfmWVW30rLHwOGdYkt83NSzoCPutHRxzlAy099czpq26wbrFPm1DiE2C0Ot14aI8R2W4t4fjVRd2Unt",
                              attributions: ' ',
                              params: {
                                "LAYERS": "orto_foraar",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Nyeste ortofoto, Geodanmark',
                            popuplayertitle: 'Nyeste ortofoto, Geodanmark',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_NyesteortofotoGeodanmark_0, 0]);
var format_Datacentreopdateret260917_1 = new ol.format.GeoJSON();
var features_Datacentreopdateret260917_1 = format_Datacentreopdateret260917_1.readFeatures(json_Datacentreopdateret260917_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datacentreopdateret260917_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Datacentreopdateret260917_1.addFeatures(features_Datacentreopdateret260917_1);
var lyr_Datacentreopdateret260917_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Datacentreopdateret260917_1, 
                style: style_Datacentreopdateret260917_1,
                popuplayertitle: 'Datacentre (opdateret 260917)',
                interactive: true,
    title: 'Datacentre (opdateret 260917)<br />\
    <img src="styles/legend/Datacentreopdateret260917_1_0.png" /> Bygget<br />\
    <img src="styles/legend/Datacentreopdateret260917_1_1.png" /> Ikke bygget<br />' });

lyr_NyesteortofotoGeodanmark_0.setVisible(true);lyr_Datacentreopdateret260917_1.setVisible(true);
var layersList = [lyr_NyesteortofotoGeodanmark_0,lyr_Datacentreopdateret260917_1];
lyr_Datacentreopdateret260917_1.set('fieldAliases', {'fid': 'fid', 'Adresse': 'Adresse', 'Kommune': 'Kommune', 'Navn': 'Navn', 'Firma': 'Firma', 'Størrelse (hektar)': 'Størrelse (hektar)', 'Kapacitet MW': 'Kapacitet MW', 'Status': 'Status', 'Url': 'Url', 'Kommune i zotero': 'Kommune i zotero', 'osm_type': 'osm_type', 'display_name': 'display_name', 'place_id': 'place_id', 'class': 'class', 'type': 'type', 'road': 'road', 'village': 'village', 'city_district': 'city_district', 'town': 'town', 'city': 'city', 'state': 'state', 'country': 'country', 'postcode': 'postcode', });
lyr_Datacentreopdateret260917_1.set('fieldImages', {'fid': 'TextEdit', 'Adresse': 'TextEdit', 'Kommune': 'TextEdit', 'Navn': 'TextEdit', 'Firma': 'TextEdit', 'Størrelse (hektar)': 'TextEdit', 'Kapacitet MW': 'TextEdit', 'Status': 'TextEdit', 'Url': 'TextEdit', 'Kommune i zotero': 'TextEdit', 'osm_type': 'TextEdit', 'display_name': 'TextEdit', 'place_id': 'TextEdit', 'class': 'TextEdit', 'type': 'TextEdit', 'road': 'TextEdit', 'village': 'TextEdit', 'city_district': 'TextEdit', 'town': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'country': 'TextEdit', 'postcode': 'TextEdit', });
lyr_Datacentreopdateret260917_1.set('fieldLabels', {'fid': 'hidden field', 'Adresse': 'inline label - visible with data', 'Kommune': 'inline label - visible with data', 'Navn': 'inline label - visible with data', 'Firma': 'inline label - visible with data', 'Størrelse (hektar)': 'inline label - visible with data', 'Kapacitet MW': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Url': 'hidden field', 'Kommune i zotero': 'hidden field', 'osm_type': 'hidden field', 'display_name': 'hidden field', 'place_id': 'hidden field', 'class': 'hidden field', 'type': 'hidden field', 'road': 'hidden field', 'village': 'hidden field', 'city_district': 'hidden field', 'town': 'hidden field', 'city': 'hidden field', 'state': 'hidden field', 'country': 'hidden field', 'postcode': 'hidden field', });
lyr_Datacentreopdateret260917_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});