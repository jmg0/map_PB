
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "dark_0": {
            "type": "raster",
            "tiles": ["https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Buttigieg_b1_1": {
            "type": "geojson",
            "data": json_Buttigieg_b1_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_dark_0_0",
            "type": "raster",
            "source": "dark_0"
        },
        {
            "id": "lyr_Buttigieg_b1_1_0",
            "type": "circle",
            "source": "Buttigieg_b1_1",
            "layout": {},
            "paint": {'circle-radius': ['case', ['all', ['>=', ['get', 'Contribution'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution'], 200.0]], ['/', 3.7795275591, 2], ['all', ['>', ['get', 'Contribution'], 200.0], ['<=', ['get', 'Contribution'], 500.0]], ['/', 3.7795275591, 2], ['all', ['>', ['get', 'Contribution'], 500.0], ['<=', ['get', 'Contribution'], 1000.0]], ['/', 3.7795275591, 2], ['all', ['>', ['get', 'Contribution'], 1000.0], ['<=', ['get', 'Contribution'], 2800.0]], ['/', 3.7795275591, 2], ['all', ['>', ['get', 'Contribution'], 2800.0], ['<=', ['get', 'Contribution'], 5600.0]], ['/', 3.7795275591, 2], 1], 'circle-color': ['case', ['all', ['>=', ['get', 'Contribution'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution'], 200.0]], '#8b978a', ['all', ['>', ['get', 'Contribution'], 200.0], ['<=', ['get', 'Contribution'], 500.0]], '#6eb167', ['all', ['>', ['get', 'Contribution'], 500.0], ['<=', ['get', 'Contribution'], 1000.0]], '#52cb45', ['all', ['>', ['get', 'Contribution'], 1000.0], ['<=', ['get', 'Contribution'], 2800.0]], '#35e522', ['all', ['>', ['get', 'Contribution'], 2800.0], ['<=', ['get', 'Contribution'], 5600.0]], '#19fe00', '#ffffff'], 'circle-opacity': ['case', ['all', ['>=', ['get', 'Contribution'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution'], 200.0]], 1.0, ['all', ['>', ['get', 'Contribution'], 200.0], ['<=', ['get', 'Contribution'], 500.0]], 1.0, ['all', ['>', ['get', 'Contribution'], 500.0], ['<=', ['get', 'Contribution'], 1000.0]], 1.0, ['all', ['>', ['get', 'Contribution'], 1000.0], ['<=', ['get', 'Contribution'], 2800.0]], 1.0, ['all', ['>', ['get', 'Contribution'], 2800.0], ['<=', ['get', 'Contribution'], 5600.0]], 1.0, 1], 'circle-stroke-width': ['case', ['all', ['>=', ['get', 'Contribution'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution'], 200.0]], 0, ['all', ['>', ['get', 'Contribution'], 200.0], ['<=', ['get', 'Contribution'], 500.0]], 0, ['all', ['>', ['get', 'Contribution'], 500.0], ['<=', ['get', 'Contribution'], 1000.0]], 0, ['all', ['>', ['get', 'Contribution'], 1000.0], ['<=', ['get', 'Contribution'], 2800.0]], 0, ['all', ['>', ['get', 'Contribution'], 2800.0], ['<=', ['get', 'Contribution'], 5600.0]], 0, 1], 'circle-stroke-color': ['case', ['all', ['>=', ['get', 'Contribution'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution'], 200.0]], '#3d8035', ['all', ['>', ['get', 'Contribution'], 200.0], ['<=', ['get', 'Contribution'], 500.0]], '#3d8035', ['all', ['>', ['get', 'Contribution'], 500.0], ['<=', ['get', 'Contribution'], 1000.0]], '#3d8035', ['all', ['>', ['get', 'Contribution'], 1000.0], ['<=', ['get', 'Contribution'], 2800.0]], '#3d8035', ['all', ['>', ['get', 'Contribution'], 2800.0], ['<=', ['get', 'Contribution'], 5600.0]], '#3d8035', '#000000']}
        }
],
}