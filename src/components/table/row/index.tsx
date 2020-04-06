import * as React from 'react'

import * as types from '../../types'
import { TableRowStatus } from './Status'
import { TableRowType } from './Type'
import { TableRowSite } from './Site'
import { TableRowName } from './Name'
import styles from './index.module.css'

export const Row: React.FC<types.TableRowProps> = (props) => {
	const { name, sites, type, status } = props
	return (
		<tr data-test='component-table-row' className={styles.row}>
			<TableRowName name={name} />
			<TableRowSite sites={sites} />
			<TableRowType type={type} />
			<TableRowStatus status={status} />
		</tr>
	)
}


