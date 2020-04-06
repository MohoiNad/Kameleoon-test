import * as React from 'react'

import data from './data.json'
import { Search } from './components/search'
import { Table } from './components/table'
import { useSortAndSearch } from './hooks/useSortAndSearch'
import { useParseJson } from './hooks/useParseJson'

function App() {
	const [searchValue, setSearchValue] = React.useState<string>('')

	return (
		<div>
			<h1>Kinda cool tool</h1>
			<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			<Table data={useSortAndSearch(searchValue, useParseJson(data))} />
		</div>
	)
}

export default App
