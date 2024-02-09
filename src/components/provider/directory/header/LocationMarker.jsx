import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export const LocationMarker = ({ location = "ON" }) => {
	return (
		<div className="location">
			<FontAwesomeIcon icon={faLocationDot} />
			<p className="location-text">{location}</p>
		</div>
	);
};
export default LocationMarker;
