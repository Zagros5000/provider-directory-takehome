import { createContext, useState } from "react";
const DirectoryProvidersContext = createContext({
	providers: [],
	setProviders: () => {}
});

const DirectoryProvider = ({ children }) => {
	const [providers, setProviders] = useState([]);

	return (
		<DirectoryProvidersContext.Provider
			value={{
				providers,
				setProviders,
			}}
		>
			{children}
		</DirectoryProvidersContext.Provider>
	);
};

export { DirectoryProvider, DirectoryProvidersContext };
