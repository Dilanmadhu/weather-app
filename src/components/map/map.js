import { APIProvider , AdvancedMarker, Map,ControlPosition, useMap, AdvancedMarkerRef, useMapsLibrary, MapControl} from "@vis.gl/react-google-maps";
import './map.css'
import { useEffect, useState } from "react";

const apiKeymap = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const mapId = process.env.REACT_APP_MAP_ID

function MapView({geolocation, handle}) {
  
  const [center, setCenter] = useState({ lat: geolocation.latitude, lng: geolocation.longitude });

  useEffect(() => {
    setCenter({ lat: geolocation.latitude, lng: geolocation.longitude });
  }, [geolocation]);
  return (
    <div className="map-container">
      <APIProvider apiKey= {apiKeymap} >
        <Map
        id="map1"
         className="g-map"
         defaultCenter={center}
        /*key={JSON.stringify(center)}*/
         defaultZoom={11}
         gestureHandling={'greedy'}
         disableDefaultUI={true}
         mapId="6f5f539653d8da16"
        onClick={e=>{
          handle( { latitude: e.detail.latLng.lat, longitude: e.detail.latLng.lng  })
        }}>
           <AdvancedMarker position={{lat: geolocation.latitude, lng:geolocation.longitude}}/>
           </Map>
       
      </APIProvider>
    </div>
  );
}




export default MapView;
