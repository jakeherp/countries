import React, { useState, useEffect } from "react"
import axios from "axios"

const Country = ({ country }) => {
	const [weather, setWeather] = useState([])

	useEffect(() => {
		const fetchWeather = async () => {
			const data = await axios.get(
				`https://api.apixu.com/v1/current.json?key=562baccd2eeb48acb2b103013190207&q=${
					country.capital
				}`,
			)
			setWeather(data.data)
		}
		fetchWeather()
	}, [])

	return (
		<li>
			<h2>
				<img
					src={country.flag}
					style={{ height: `1em` }}
					alt={country.name}
				/>{" "}
				{country.name}
			</h2>
			<ul>
				<li>
					<strong>Capital:</strong> {country.capital}
				</li>
				<li>
					<strong>Population:</strong>{" "}
					{country.population.toLocaleString(navigator.language, 0)}
				</li>
				<li>
					<strong>Official languages:</strong>
					<ul>
						{country.languages.map(lang => (
							<li key={lang.iso639_1}>{lang.name}</li>
						))}
					</ul>
				</li>
				{weather.length !== 0 ? (
					<li>
						<h3>Weather in {country.capital}</h3>
						<strong>Temperature:</strong> {weather.current.temp_c}
						&deg;
						<br />
						<img
							src={weather.current.condition.icon}
							alt={weather.current.condition.text}
						/>
						<br />
						<small>{weather.current.condition.text}</small>
						<br />
						Wind: {weather.current.wind_kph} kph direction{" "}
						{weather.current.wind_dir}
					</li>
				) : (
					<li>Loading weather ...</li>
				)}
			</ul>
		</li>
	)
}

export default Country
