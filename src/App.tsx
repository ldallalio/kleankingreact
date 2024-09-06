import React, { useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { initializeIcons } from "@fluentui/react";

initializeIcons();
export const GlobalStateContext = React.createContext<any>(null);
function App() {

	return (
		<GlobalStateContext.Provider value={{}}>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/air' element={<Airducts />} />
				<Route path='/mold' element={<Mold />} />
				<Route path='/hardwood' element={<Hardwood />} />
				<Route path='/crime' element={<Crime />} />
				<Route path='/carpet' element={<Carpet />} />
				<Route path='/dryer' element={<Dryer />} />
				<Route path='/water' element={<Water />} />
				<Route path='/tile' element={<Tile />} />
				<Route path='/upholstery' element={<Upholstery />} />
				<Route path='/landing' element={<LandingPage />} /> 
			</Routes>
		</BrowserRouter>
		</GlobalStateContext.Provider>
	);
}

export default App;
