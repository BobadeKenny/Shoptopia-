import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Contact from "./components/Contact";

export default function App()
{
	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>
					<Route path='/c' element={<Contact />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	)
}