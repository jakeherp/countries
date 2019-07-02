import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import axios from "axios"

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
						placeholder="Filter countries"
						onChange={handleFilter}
					/>
				</div>
			</form>
			<ul>
				{filter && filteredCountries.length >= 10
					? "Too many matches, please be more precise"
					: filteredCountries.map(country => (
							<li key={country.alpha2Code}>
								<h2>
									<img
										src={country.flag}
										style={{ height: `1em` }}
										alt={country.name}
									/>{" "}
									{country.name}
								</h2>
								<ul>
									<li>Capital: {country.capital}</li>
									<li>
										Population:{" "}
										{country.population.toLocaleString(
											navigator.language,
											0,
										)}
									</li>
									<li>
										Official languages:
										<ul>
											{country.languages.map(lang => (
												<li key={lang.iso639_1}>
													{lang.name}
												</li>
											))}
										</ul>
									</li>
								</ul>
							</li>
					  ))}
			</ul>
		</React.Fragment>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
