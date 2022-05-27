import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function requestCategories() {
	const [categories, setCategories] = useState();
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/categories`)
			.then((res) => res.json())
			.then((json) => setCategories)
			.catch(console.error);
	}, [])
	return (
		categories.map(category => <Link to={`/category/${category}`}>${category}</Link>)
	)
}
export default function Home()
{
	return (
		<div>
			<h1>Header</h1>
			<requestCategories/>
			<Link to='c'>Contact</Link>
		</div>
	)
}