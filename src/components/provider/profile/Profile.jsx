import "./Profile.styles.scss";

import { useEffect, useState } from "react";

import { BreadCrumb } from "./breadcrumb/BreadCrumb";
import LargeAvatar from "./avatar/LargeAvatar";
import Loading from "../../loading/Loading";
import ProfileCard from "./card/ProfileCard";
import { fetchProvider } from "../../../api";
import { useParams } from "react-router-dom";

export const Profile = () => {
	const { id } = useParams();
	const [profile, setProfile] = useState({});
	useEffect(() => {
		fetchProvider(`${id}`).then(setProfile);
	}, [id]);
	if (!profile.id) {
		return <Loading />;
	}
	return (
		<div className="profile-wrapper">
			<div>
				<BreadCrumb name={profile.name} />
				<div className="info-wrapper">
					<LargeAvatar avatarUrl={profile.avatarUrl} />
					<ProfileCard {...profile} />
				</div>
			</div>
		</div>
	);
};
export default Profile;
