import "./BookingInfo.styles.scss";

import {
	faGlobe,
	faGraduationCap,
	faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BookingInfo = ({ location, education, languages }) => {
	return (
		<div className="booking-info">
			<div className="booking-row">
				<FontAwesomeIcon icon={faMapLocationDot} />
				<div className="text-wrapper">
					<p className="label-t1">Location</p>
					<p className="label-t3">{location}</p>
				</div>
			</div>
			<div className="booking-row">
				<FontAwesomeIcon icon={faGraduationCap} />
				<div className="text-wrapper">
					<p className="label-t1">Education</p>
					<p className="label-t3">{education}</p>
				</div>
			</div>
			<div className="booking-row">
				<FontAwesomeIcon icon={faGlobe} />
				<div className="text-wrapper">
					<p className="label-t1">Language</p>
					{languages && (
						<p className="label-t3">
							{languages.map((item) => (
								<span key={`lang-${item}`}>{item}</span>
							))}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};
