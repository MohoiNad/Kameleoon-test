import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock} from '@fortawesome/free-solid-svg-icons'

import * as types from '../../types'
import styles from './Status.module.css'

export const TableRowStatus: React.FC<types.TableRowStatusProps> = (props) => {
	const { status } = props
	switch (status) {
		case 'blocked': {
			return (
				<td className={styles.status} data-test='component-table-row-status'>
					<div className={styles.status_lock}>
						<FontAwesomeIcon className={styles.icon} icon={faLock} />
					</div>
				</td>
			)
		}
		case 'enable': {
			return (
				<td data-test='component-table-row-status'>
					<h3 className={styles.status_on}>On</h3>
				</td>
			)
		}
		case 'disable': {
			return (
				<td data-test='component-table-row-status'>
					<h3 className={styles.status_off}>Off</h3>
				</td>
			)
		}
		default:
			return (
				<td data-test='component-table-row-status'>
					<h3 className={styles.status_error}>Error</h3>
				</td>
			)
	}
}


