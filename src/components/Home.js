import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Home()
{
	const [categories, setCategories] = useState([]);
	function requestCategories() {
		fetch(`https://fakestoreapi.com/products/categories`)
		.then((res) => res.json())
		.then((json) => setCategories(json))
		.catch(console.error);
	}
	useEffect(() => {
		requestCategories();
	}, []);
	return (
		<div>
			<h1>Header</h1>
			<h1>Header</h1>
			<div>
				{categories.map(category => <Link to={`/category/${category}`}>{category}</Link>)}
			</div>
			<Link to='c'>Contact</Link>
		</div>
	)
}