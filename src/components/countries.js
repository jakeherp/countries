import React, { useState } from "react"

import Country from "./country"

const Countries = ({ country }) => {
	const [countryInfo, setCountryInfo] = useState(null)

	const handleToggle = () => {
		console.log(`clicked on ${country.name}`)
		setCountryInfo(country)
	}

	return (
		<li onClick={() => handleToggle()}>
			{country.name}
			{countryInfo && (
				<ul>
					<Country country={country} />
				</ul>
			)}
		</li>
	)
}

export default Countries
