import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import '../assets/style/Map.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2NvcmNoZXJmamsiLCJhIjoiY2s4Nm9qOGI5MDY3ZTNkcDY1NXMyMHU4cSJ9.KZI7PHOYzUEfYb-MAgPIFQ';

const Map = ({ geo }) => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [geo.lon, geo.lat],
      zoom: 15.5,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, [geo]);

  return <div className="map" ref={mapContainerRef} />;
};

export default Map;
