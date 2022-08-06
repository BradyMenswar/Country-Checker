import React from "react";
import classes from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
export default function SearchBar() {
	const searchRef = useRef();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	const [loadedCountry, setLoadedCountry] = useState([]);
	const [suggestedCountry, setSuggestedCountry] = useState([]);
	const [loadedFlag, setLoadedFlag] = useState([]);

	// function onSearch(event) {
	//     event.preventDefault();
	//     const enteredSearch = searchRef.current.value;
	//     console.log(enteredSearch)
	//     navigate('/country', {state: enteredSearch})
	// }

	function onCountrySelected(country) {
		navigate("/country", { state: country });
	}

	const onInputChange = (event) => {
		if (event.target.value !== "")
			setSuggestedCountry(
				loadedCountry.filter((country) =>
					country.toLowerCase().includes(event.target.value.toLowerCase())
				)
			);
		else setSuggestedCountry([]);
	};

	useEffect(() => {
		const url = "https://restcountries.com/v3.1/all/";
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setIsLoading(false);

				const countryNames = data.map(
					(country) => (country = country.name.common)
				);
				const countryFlags = data.map(
					(country) => (country = country.flags.svg)
				);
				setLoadedCountry(countryNames);
				setLoadedFlag(countryFlags);
			});
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div className={classes.container}>
			<div className={classes.searchContainer}>
				<input
					onChange={onInputChange}
					autoComplete="off"
					id="search"
					ref={searchRef}
					className={classes.searchInput}
					type="text"
					placeholder="Find a country"
				></input>
				<span>
					<img src="" alt=""></img>
				</span>
			</div>
			<ul className={classes.suggestions}>
				{suggestedCountry.map((option) => {
					return (
						<button
							onClick={() => onCountrySelected(option)}
							className={classes.dropdownItem}
						>
							<img src={loadedFlag[loadedCountry.indexOf(option)]}></img>
							{option}
						</button>
					);
				})}
			</ul>
		</div>
	);
}
