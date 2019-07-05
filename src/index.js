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
			<ul>
				{filteredCountries.length === 1
					? filteredCountries.map(country => (
							<Country
								country={country}
								key={country.alpha3Code}
							/>
					  ))
					: filteredCountries.map(country => (
							<Countries
								country={country}
								key={country.alpha3Code}
							/>
					  ))}
			</ul>
		</React.Fragment>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
