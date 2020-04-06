import * as React from 'react'

import * as types from '../components/types'

export const useSortAndSearch = (
	searchValue: string,
	data: null | types.TableProps
) => {
	const [result, setResult] = React.useState(null)

	React.useEffect(() => {
		const parsedData = JSON.parse(JSON.stringify(data))
		const searchRegex = searchValue && new RegExp(`${searchValue}`, 'gi')
		setResult(
			parsedData?.filter(
				(dataChunk: types.TableRow | null) =>
					!searchRegex || (dataChunk && searchRegex.test(dataChunk?.name))
			)
		)
	}, [searchValue, data])

	return result
}