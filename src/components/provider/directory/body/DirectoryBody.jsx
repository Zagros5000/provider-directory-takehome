import DirectoryBodyCard from "./card/DirectoryBodyCard";
import DirectoryProviderCount from "../count/DirectoryProviderCount";
import { DirectoryProvidersContext } from "../../../../context/DirectoryProvider";
import { useContext } from "react";

export const DirectoryBody = () => {
	const { providers } = useContext(DirectoryProvidersContext);
	return (
		<div className="directory-body">
			<DirectoryProviderCount amount={providers.length} />
			{providers.map((item) => (
				<DirectoryBodyCard
					key={`directory-item-id:${item.id}`}
					{...item}
				/>
			))}
		</div>
	);
};
export default DirectoryBody;
