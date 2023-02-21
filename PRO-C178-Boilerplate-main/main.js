var latitude= 40.93959227072959
var longitude= -74.12629464050427

//init mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoidGllbnhpb24iLCJhIjoiY2xlZW1ocXBvMDJ4czN2bWN3N2JmdmVoMSJ9.sktSP6QOaZX1Ai-a52JmVQ'
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [latitude,longitude],
	zoom: 22,
})

map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
)

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);