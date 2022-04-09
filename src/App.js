import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"

export default function App()
{
	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}/>
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	)
}