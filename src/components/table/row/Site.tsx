import * as React from 'react'

import * as types from '../../types'
import styles from './Site.module.css'

export const TableRowSite: React.FC<types.TableRowSiteProps> = (props) => {
	const { sites } = props
	return (
		<td data-test='component-table-row-site'>
			<h3 className={styles.site}>{sites ? `${sites} site` : 0}</h3>
		</td>
	)
}


