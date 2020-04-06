import * as React from 'react'

import * as types from '../../types'
import styles from './Name.module.css'

export const TableRowName: React.FC<types.TableRowNameProps> = (props) => {
	const { name } = props
	return (
		<td data-test='component-table-row-name'>
			<h3 className={styles.name}>{name}</h3>
		</td>
	)
}