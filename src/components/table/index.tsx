import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { Row } from './row'
import * as types from '../types'
import styles from './index.module.css'

export const Table: React.FC<types.TableProps> = (props) => {
	const { data } = props
	const [tableData, setTableData] = React.useState<types.Data>(null)
	const [nameSortFilterToggle, setNameSortFilterToggle] = React.useState(false)

	React.useEffect(() => {
		setTableData(data)
	}, [data])

	const renderTable = () => {
		return tableData?.map((dataChunk: types.TableRow) => {
			const { id, name, sites, type, status } = dataChunk
			return (
				<Row key={id} name={name} sites={sites} type={type} status={status} />
			)
		})
	}

	const clearFilter = () => {
		setTableData(data)
	}

	const sortDataDESC = () => {
		const arr = [...data]?.sort((a, b) => b.name.localeCompare(a.name))
		setTableData(arr)
		setNameSortFilterToggle(false)
	}

	const sortDataSortABC = () => {
		const arr = [...data]?.sort((a, b) => a.name.localeCompare(b.name))
		setTableData(arr)
		setNameSortFilterToggle(true)
	}

	const iconClass = nameSortFilterToggle ? styles.active : ''

	return (
		<table data-test='component-table' className={styles.table}>
			<thead>
				<tr>
					<th>
						<h2 className={styles.h2}>Tool name</h2>
						<div className={styles.iconContainer}>
							<FontAwesomeIcon
								className={`${styles.iconUp} ${iconClass}`}
								icon={faCaretUp}
								onClick={sortDataSortABC}
							/>
							<FontAwesomeIcon
								className={`${styles.iconDown} ${iconClass}`}
								icon={faCaretDown}
								onClick={sortDataDESC}
							/>
						</div>
					</th>
					<th>
						<h2 className={styles.h2}>Used on</h2>
					</th>
					<th>
						<h2 className={styles.h2}>Type</h2>
					</th>
					<th>
						<h2 className={styles.h2}>Status</h2>
					</th>
				</tr>
			</thead>
			<tbody>{renderTable()}</tbody>
		</table>
	)
}

