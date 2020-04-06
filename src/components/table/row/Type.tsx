import * as React from 'react'

import styles from './Type.module.css'
import * as types from '../../types'

export const TableRowType: React.FC<types.TableRowTypeProps> = (props) => {
	const { type } = props
	switch (type) {
		case 'analytics': {
			return (
				<td className={styles.heading} data-test='component-table-row-type'>
					<h3 className={styles.type}>Analytics</h3>
				</td>
			)
		}
		case 'tag_manager': {
			return (
				<td className={styles.heading} data-test='component-table-row-type'>
					<h3 className={styles.type}>Tag manager</h3>
				</td>
			)
		}
		case 'email': {
			return (
				<td className={styles.heading} data-test='component-table-row-type'>
					<h3 className={styles.type}>Email</h3>
				</td>
			)
		}
		case 'dmp_crm': {
			return (
				<td className={styles.heading} data-test='component-table-row-type'>
					<h3 className={styles.type}>DMP/CRM</h3>
				</td>
			)
		}
		case 'heatmap': {
			return (
				<td className={styles.heading} data-test='component-table-row-type'>
					<h3 className={styles.type}>Heatmap</h3>
				</td>
			)
		}
		default:
			return (
				<td className={styles.heading} data-test='component-table-row-type'>
					<h3 className={styles.type}>Error</h3>
				</td>
			)
	}
}


