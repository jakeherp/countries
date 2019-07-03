import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import axios from "axios"

import Countries from "./components/countries"
import Country from "./components/country"

const App = () => {
	const [countries, setCountries] = useState([])
	const [filter, setFilter] = useState("")

	useEffect(() => {
		const fetchCountries = async () => {
			const data = await axios.get("https://restcountries.eu/rest/v2/all")
			setCountries(data.data)
		}
		fetchCountries()
	}, [])

	const handleFilter = e => setFilter(e.target.value)

	const filteredCountries = !filter
		? countries
		: countries.filter(country =>
				country.name.toLowerCase().includes(filter.toLowerCase()),
		  )

	const showCountries = () => {
		// switch (filteredCountries.length) {
		// 	case filteredCountries.length > 10:
		// 		console.log("Too many matches, please be more precise")
		// 		break
		// 	case filteredCountries.length < 1:
		// 		return "No country found"
		// 	case filteredCountries.length === 1:
		// 		return <Country country={countries} />
		// 	default:
		// 		filteredCountries.map(country => (
		// 			<Countries country={country} key={country.alpha2Code} />
		// 		))
		// }

		if (filteredCountries.length >= 10) {
			return "Too many matches, please be more precise"
		} else if (filteredCountries.length === 0) {
			return "Search for a country to find information"
		} else if (filteredCountries.length === 1) {
			return <Country country={countries} />
		} else {
			filteredCountries.map(country => (
				<Countries country={country} key={country.alpha2Code} />
			))
		}
	}

	return (
		<React.Fragment>
			<form onSubmit={e => e.preventDefault()}>
				<div>
					<input
						value={filter}
						placeholder="Find a country"
						onChange={handleFilter}
					/>
				</div>
			</form>
			<ul>{showCountries()}</ul>
		</React.Fragment>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
