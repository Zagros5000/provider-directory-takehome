import Loading from "../../../loading/Loading";

export const DirectoryProviderCount = ({ amount }) => {
	if(!amount){
		return <Loading/>
	}
	return (
		<div className="provider-count-wrapper">
			<span className="provider-count">{amount} </span>
			providers in Ontario
		</div>
	);
};
export default DirectoryProviderCount;
