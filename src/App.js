import "./App.scss";

import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import {
	DirectoryProvider
} from "./context/DirectoryProvider";
import Loading from "./components/loading/Loading";
import { ROUTES } from "./constants/routes";

const Directory = lazy(() =>
	import("./components/provider/directory/Directory")
);
const Profile = lazy(() => import("./components/provider/profile/Profile"));
function App() {
	return (
		<div className="App">
			<DirectoryProvider>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path={ROUTES.HOME} element={<Directory />} />
						<Route
							path={`${ROUTES.PROFILE}/:id`}
							element={<Profile />}
						/>
					</Routes>
				</Suspense>
			</DirectoryProvider>
		</div>
	);
}

export default App;
