(async function () {
    'use strict';
    const { Map } = await google.maps.importLibrary('maps');
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary('marker');

    const bmg = { lat: 40.096435526114426, lng: -74.22148623738576 };
    const pcs = { lat: 40.10904236548321, lng: -74.2177665335666 };

    const map = new Map(
        document.querySelector('#map'), {
        zoom: 18,
        center: bmg,
        mapId: 'DEMO_MAP_ID',
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    let inputListener = async () => {
        const theSearch= document.getElementById('inpt').value;
        console.log(theSearch);

        try {
            const r = await fetch(`http://api.geonames.org/wikipediaSearch?q=${theSearch}&maxRows=10&username=davidohana99&type=json`);

            const mapData = await r.json();

            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText} - ${mapData.message}`);
            }

            console.log(mapData)

            mapData.geonames.forEach(element => {
                const myBestPos = {lat:element.lat, lng: element.lng};
                const marker = new AdvancedMarkerElement({
                    map: map,
                    position: myBestPos,
                    title: element.title,

                });

                const infowindow = new google.maps.InfoWindow();
                marker.addListener('click', () => {
                    infowindow.setContent(element.summary);
                
                    infowindow.open({
                      anchor: marker,
                      map,
                    });
                  });
            });

        } catch (e) {
            console.error('oops', e);
        }
    };


  
  //  const s = ('srch')
    document.body.addEventListener('click', inputListener);


}());