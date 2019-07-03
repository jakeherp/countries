import React from "react"

const Country = ({ country }) => {
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
				<li>Capital: {country.capital}</li>
				<li>
					Population:{" "}
					{country.population.toLocaleString(navigator.language, 0)}
				</li>
				<li>
					Official languages:
					<ul>
						{country.languages.map(lang => (
							<li key={lang.iso639_1}>{lang.name}</li>
						))}
					</ul>
				</li>
			</ul>
		</li>
	)
}

export default Country
