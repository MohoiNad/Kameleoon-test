import * as React from 'react'

import * as types from '../components/types'

export const useParseJson = (
	data: types.JsonData[]
) => {
	const [parsedData, setParsedData] = React.useState(null);
	React.useEffect(() => {
		setParsedData(JSON.parse(JSON.stringify(data)))
	}, [data])
	return parsedData
}