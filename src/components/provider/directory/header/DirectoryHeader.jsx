import LocationMarker from "./LocationMarker";

export const DirectoryHeader = () => {
	return (
		<div className="directory-header">
			<div className="text-wrapper">
				<h3 className="header-text">Browse our providers</h3>
				<h4 className="sub-header-text">Mental Wellness</h4>
				<LocationMarker/>
			</div>
			
			
		</div>
	);
};
export default DirectoryHeader;
