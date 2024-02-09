import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export const BreadCrumb = ({ name }) => {
	return (
		<div className="breadcrumb">
			<p className="breadcrumb-route"><Link className="link" to={ROUTES.HOME}>Mental Wellness</Link></p>
			<span className="icon-span">
				<FontAwesomeIcon icon={faChevronRight} />
			</span>

			<p className="breadcrumb-name">{name}</p>
		</div>
	);
};
