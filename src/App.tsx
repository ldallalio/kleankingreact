import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";
import Home from "./pages/Home";
import Airducts from "./pages/Airducts";
import Mold from "./pages/Mold";
import Hardwood from "./pages/Hardwood";
import Crime from "./pages/Crime";
import Carpet from "./pages/Carpet";
import Dryer from "./pages/DryerVents";
import Water from "./pages/WaterAndFire";
import Tile from "./pages/Tile";
import Upholstery from "./pages/Upholstery";
import LandingPage from "./pages/LandingPage";
import TextingPrivacy from "./pages/TextingPrivacy";
import TextingAUP from "./pages/TextingAUP";
import NotFound from "./pages/NotFound";

initializeIcons();

export const GlobalStateContext = React.createContext<any>(null);

function App() {
	return (
		<GlobalStateContext.Provider value={{}}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/air" element={<Airducts />} />
					<Route path="/mold" element={<Mold />} />
					<Route path="/hardwood" element={<Hardwood />} />
					<Route path="/crime" element={<Crime />} />
					<Route path="/carpet" element={<Carpet />} />
					<Route path="/dryer" element={<Dryer />} />
					<Route path="/water" element={<Water />} />
					<Route path="/tile" element={<Tile />} />
					<Route path="/upholstery" element={<Upholstery />} />
					<Route path="/landing" element={<LandingPage />} />
					<Route path="/texting-privacy" element={<TextingPrivacy />} />
					<Route path="/texting-aup" element={<TextingAUP />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</GlobalStateContext.Provider>
	);
}

export default App;
