import React from "react";
import classes from "./CountryInfo.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function CountryInfo(props) {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedCountry, setLoadedCountry] = useState([]);

	useEffect(() => {
		const url = "https://restcountries.com/v3.1/name/" + props.code + "?fullText=true";
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setIsLoading(false);
				setLoadedCountry(data);
			});
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	let currencies = [];
	try {
        Object.entries(loadedCountry[0].currencies).forEach(([key, value]) => {
		if (
			key !==
			Object.keys(loadedCountry[0].currencies)[
				Object.keys(loadedCountry[0].currencies).length - 1
			]
		) {
			currencies.push(value.name + " (" + key + " " + value.symbol + "), ");
		} else {
			currencies.push(value.name + " (" + key + " " + value.symbol + ")");
		}
	    });}
    catch(error) {
        currencies.push("N/A");
    }
	let languages = [];
    try {
        Object.entries(loadedCountry[0].languages).forEach(([key, value]) => {
            if (
                key !==
                Object.keys(loadedCountry[0].languages)[
                    Object.keys(loadedCountry[0].languages).length - 1
                ]
            ) {
                languages.push(value + ", ");
            } else {
                languages.push(value);
            }
        });}
    catch(error) {
        languages.push("N/A")
    }

	return (
		<div>
			<div className={classes.topSection}>
				<img
					className={classes.flag}
					src={loadedCountry[0].flags.svg}
					alt="flag"
				></img>
				<h2>{loadedCountry[0].name.common}</h2>
			</div>
			<div className={classes.infoContainer}>
				<div className={classes.infoColumn}>
					<div className={classes.info}>
						<p>
							<span className={classes.infoTitle}>Official Name:</span>{" "}
							{loadedCountry[0].name.official}
						</p>
					</div>
					<div className={classes.info}>
						<p>
							<span className={classes.infoTitle}>Continent:</span>{" "}
							{loadedCountry[0].continents[0]}
						</p>
					</div>
					<div className={classes.info}>
						<p>
							<span className={classes.infoTitle}>Capital:</span>{" "}
							{loadedCountry[0].capital === undefined ? "N/A" : loadedCountry[0].capital}
						</p>
					</div>
					<div className={classes.info}>
						<p>
							<span className={classes.infoTitle}>Population:</span>{" "}
							{loadedCountry[0].population.toLocaleString("en-US")}
						</p>
					</div>
				</div>
				<div className={classes.infoColumn}>
					<div className={classes.info}>
						<p>
							<span className={classes.infoTitle}>Languages:</span> {languages}
						</p>
					</div>
					<div className={classes.info}>
						<p>
							<span className={classes.infoTitle}>Currencies:</span>{" "}
							{currencies}
						</p>
					</div>
					<div className={classes.info}>
						<p>
							<span className={classes.infoTitle}>Area:</span>{" "}
							{loadedCountry[0].area.toLocaleString("en-US")} sqft.
						</p>
					</div>
					<div className={classes.info}>
						<p>
							<span className={classes.infoTitle}>UN Member:</span>{" "}
							{loadedCountry[0].unMember ? "Yes" : "No"}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
