import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../constants/routes";
export const DirectoryBodyCard = ({
	availabilty,
	avatarUrl,
	bio,
	name,
	title,
	id,
}) => {
	return (
		<Link className="link" to={`${ROUTES.PROFILE}/${id}`}>
			<div className="directory-body-card">
				<div className="main-info-wrapper">
					<div className="col-1">
						<Avatar url={avatarUrl} />
					</div>

					<div className="col-2">
						<h2 className="name">{name}</h2>
						<h3 className="title">{title}</h3>
					</div>
				</div>
				<p className="bio">{bio} </p>
				<span className="availability-wrapper">
					<span className="availability">{availabilty}</span>
				</span>
			</div>
		</Link>
	);
};
export default DirectoryBodyCard;
