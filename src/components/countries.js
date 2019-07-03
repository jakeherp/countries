import React, { useState } from "react"

import Country from "./country"

const Countries = ({ country }) => {
	const [countryInfo, setCountryInfo] = useState({})

	const handleToggle = () => {
		console.log(`clicked on ${country.name}`)
		setCountryInfo(country)
	}

	return (
		<li onClick={() => handleToggle()}>
			{country.name}
			{countryInfo && <Country country={countryInfo} />}
		</li>
	)
}

export default Countries
