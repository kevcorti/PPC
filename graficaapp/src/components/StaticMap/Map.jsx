import "leaflet/dist/leaflet.css";
import "./Map.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
import IconLocation from "../shared/IconLocation";
function Map({ markers }) {
  return (
    <>
      <MapContainer center={[-2.1993, -79.8834]} zoom={13} className="w-1/2">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <MarkerClusterGroup chunkedLoading>
          
        </MarkerClusterGroup> */}
        {markers.map((marker, index) => (
          <Marker
            position={{ lat: marker.latitude, lng: marker.longitude }}
            key={index}
            icon={IconLocation}
          >
            <Popup>
              <h3 className="text-semibold text-xl">{marker.urbanart.name}</h3>
              <img
                src={marker.urbanart.url_photo}
                alt={`Foto ${index} de ${marker.urbanart.name}`}
              />
              <p className="text-md">{marker.urbanart.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default Map;
