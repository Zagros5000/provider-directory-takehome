import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { BookingInfo } from "./booking-info/BookingInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const ProfileCard = ({
	bio,
	name,
	title,
	location,
	education,
	languages,
}) => {
	const [readLess, setReadLess] = useState(true);
	return (
		<div className="profile-card">
			<div className="main-info-wrapper">
				<div className="col-2">
					<h2 className="name">{name}</h2>
					<h3 className="title">{title}</h3>
				</div>
			</div>
			<p className={`bio ${!readLess?"trimmed":""}`}>{bio} </p>
			<button
				className="read-button"
				onClick={() => setReadLess(!readLess)}
			>
				{readLess ? (
					<span>
						Read Less <FontAwesomeIcon icon={faChevronUp} />
					</span>
				) : (
					<span>
						Read More <FontAwesomeIcon icon={faChevronDown} />
					</span>
				)}
			</button>
            <BookingInfo location={location} education={education} languages={languages}/>
		</div>
	);
};
export default ProfileCard;
