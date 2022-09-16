import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Airducts from './pages/Airducts';
import Mold from './pages/Mold';
import Hardwood from './pages/Hardwood';
import Crime from './pages/Crime';
import Carpet from './pages/Carpet';
import Dryer from './pages/DryerVents';
import Water from './pages/WaterAndFire';
import Tile from './pages/Tile';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/airducts' element={<Airducts />} />
				<Route path='/mold' element={<Mold />} />
				<Route path='/hardwood' element={<Hardwood />} />
				<Route path='/crimescene' element={<Crime />} />
				<Route path='/carpet' element={<Carpet />} />
				<Route path='/dryervent' element={<Dryer />} />
				<Route path='/waterandfiredamage' element={<Water />} />
				<Route path='/tile' element={<Tile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
