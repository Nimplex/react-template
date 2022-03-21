import React, { FC, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

// Components
import Loading from "./components/LoadingComponent";

// Pages
const HomePage = lazy(() => import("./pages/HomePage"));

const App: FC = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
				</Suspense>
			</div>
		</BrowserRouter>
	);
};

ReactDOM.render(<App />, document.getElementById("App"));