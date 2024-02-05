import L from "leaflet";
import iconMain from "/assets/marker.svg";

const IconLocation = L.icon({
  iconUrl: iconMain,
  iconRetinaUrl: iconMain,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});

export default IconLocation;
