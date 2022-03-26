import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home"

export default function App()
{
	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Home/>
					</Route>
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	)
}