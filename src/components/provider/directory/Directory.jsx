import "./Directory.styles.scss";

import {useContext, useEffect} from "react";

import DirectoryBody from "./body/DirectoryBody";
import DirectoryHeader from "./header/DirectoryHeader";
import { DirectoryProvidersContext } from "../../../context/DirectoryProvider";
import { fetchProviders } from "../../../api";

export const Directory = () => {
	const { setProviders } = useContext(DirectoryProvidersContext);
	useEffect(() => {
		fetchProviders().then(setProviders);
	}, [setProviders]);
	return (
		
		<div className="directory-wrapper">
			<DirectoryHeader />
			<DirectoryBody />
		</div>
	);
};
export default Directory;
