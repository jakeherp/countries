import React from "react"

const Filter = ({ filter, handleFilter }) => (
	<form onSubmit={e => e.preventDefault()}>
		<div>
			<input
				value={filter}
				placeholder="Find a country"
				onChange={handleFilter}
			/>
		</div>
	</form>
)

export default Filter
