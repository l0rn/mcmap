var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "ctrl.alt.coop",
        "ctrl.alt.coop - nether"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1611382006",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Overworld",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "Overworld",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "ctrl.alt.coop",
            "last_rendertime": 1611381345,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                48,
                80,
                112
            ],
            "minZoom": 0,
            "spawn": [
                48,
                80,
                112
            ],
            "north_direction": 0
        },
        {
            "name": "Nether",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "Nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "ctrl.alt.coop - nether",
            "last_rendertime": 1610902455,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                48,
                80,
                112
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Overworld caves",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "Overworld caves",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "ctrl.alt.coop",
            "last_rendertime": 1611381345,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                48,
                80,
                112
            ],
            "minZoom": 0,
            "spawn": [
                48,
                80,
                112
            ],
            "north_direction": 0
        }
    ]
};
