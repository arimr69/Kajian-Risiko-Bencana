ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32748").setExtent([741007.750168, 9189290.735599, 839004.158402, 9247097.013007]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_kabbandung_area_kec_1 = new ol.format.GeoJSON();
var features_kabbandung_area_kec_1 = format_kabbandung_area_kec_1.readFeatures(json_kabbandung_area_kec_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_kabbandung_area_kec_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kabbandung_area_kec_1.addFeatures(features_kabbandung_area_kec_1);
var lyr_kabbandung_area_kec_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kabbandung_area_kec_1, 
                style: style_kabbandung_area_kec_1,
                interactive: true,
                title: '<img src="styles/legend/kabbandung_area_kec_1.png" /> kabbandung_area_kec'
            });
var format_JALAN_LN_25K_2 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_2 = format_JALAN_LN_25K_2.readFeatures(json_JALAN_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_JALAN_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_2.addFeatures(features_JALAN_LN_25K_2);
var lyr_JALAN_LN_25K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_25K_2, 
                style: style_JALAN_LN_25K_2,
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_2.png" /> JALAN_LN_25K'
            });
var format_SUNGAI_LN_25K_3 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_3 = format_SUNGAI_LN_25K_3.readFeatures(json_SUNGAI_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_SUNGAI_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_3.addFeatures(features_SUNGAI_LN_25K_3);
var lyr_SUNGAI_LN_25K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_25K_3, 
                style: style_SUNGAI_LN_25K_3,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_3.png" /> SUNGAI_LN_25K'
            });
var lyr_GERAKANTANAH_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "GERAKAN TANAH",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GERAKANTANAH_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11939129.969100, -815936.395661, 12015359.969100, -760188.804965]
                            })
                        });
var lyr_BANJIRBANDANG_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "BANJIR BANDANG",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BANJIRBANDANG_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11963203.668841, -808667.585846, 12014203.668841, -773364.830659]
                            })
                        });
var lyr_KARHUTLA_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "KARHUTLA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KARHUTLA_6.png",
    attributions: ' ',
                                projection: 'EPSG:32748',
                                alwaysInRange: true,
                                imageExtent: [748788.265855, 9191180.177501, 824628.265855, 9246050.177501]
                            })
                        });
var lyr_GEMPABUMIPSHA_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "GEMPA BUMI PSHA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GEMPABUMIPSHA_7.png",
    attributions: ' ',
                                projection: 'EPSG:32748',
                                alwaysInRange: true,
                                imageExtent: [748559.969100, 9191136.385800, 824519.969100, 9246096.385800]
                            })
                        });
var lyr_KEKERINGAN_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "KEKERINGAN",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KEKERINGAN_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11939129.969100, -815936.395661, 12015659.969100, -760188.804965]
                            })
                        });
var lyr_LETUSANGUNUNGAPI_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "LETUSAN GUNUNG API",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LETUSANGUNUNGAPI_9.png",
    attributions: ' ',
                                projection: 'EPSG:32748',
                                alwaysInRange: true,
                                imageExtent: [748608.403575, 9193031.993050, 813408.403575, 9243311.993050]
                            })
                        });
var lyr_CUACAEKSTREM_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "CUACA EKSTREM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CUACAEKSTREM_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11939129.969100, -815936.395661, 12015659.969100, -760188.804965]
                            })
                        });
var lyr_BANJIR_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "BANJIR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BANJIR_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11939129.969100, -815936.395661, 12015359.969100, -760188.804965]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_kabbandung_area_kec_1.setVisible(true);lyr_JALAN_LN_25K_2.setVisible(true);lyr_SUNGAI_LN_25K_3.setVisible(true);lyr_GERAKANTANAH_4.setVisible(true);lyr_BANJIRBANDANG_5.setVisible(true);lyr_KARHUTLA_6.setVisible(true);lyr_GEMPABUMIPSHA_7.setVisible(true);lyr_KEKERINGAN_8.setVisible(true);lyr_LETUSANGUNUNGAPI_9.setVisible(true);lyr_CUACAEKSTREM_10.setVisible(true);lyr_BANJIR_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_kabbandung_area_kec_1,lyr_JALAN_LN_25K_2,lyr_SUNGAI_LN_25K_3,lyr_GERAKANTANAH_4,lyr_BANJIRBANDANG_5,lyr_KARHUTLA_6,lyr_GEMPABUMIPSHA_7,lyr_KEKERINGAN_8,lyr_LETUSANGUNUNGAPI_9,lyr_CUACAEKSTREM_10,lyr_BANJIR_11];
lyr_kabbandung_area_kec_1.set('fieldAliases', {'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'KETERANGAN': 'KETERANGAN', 'OPACITY': 'OPACITY', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', });
lyr_JALAN_LN_25K_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_kabbandung_area_kec_1.set('fieldImages', {'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KETERANGAN': 'TextEdit', 'OPACITY': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_JALAN_LN_25K_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAI_LN_25K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_kabbandung_area_kec_1.set('fieldLabels', {'KABUPATEN': 'inline label - always visible', 'KECAMATAN': 'inline label - always visible', 'KETERANGAN': 'inline label - always visible', 'OPACITY': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETER': 'inline label - always visible', 'ACRES': 'inline label - always visible', 'HECTARES': 'inline label - always visible', });
lyr_JALAN_LN_25K_2.set('fieldLabels', {'NAMRJL': 'inline label - always visible', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_3.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});