import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import * as types from '../types'
import styles from './index.module.css'

export const Search: React.FC<types.SearchProps> = (props) => {
	const { searchValue, setSearchValue } = props

	return (
		<div className={styles.search}>
			<FontAwesomeIcon className={styles.icon} icon={faSearch} />
			<input
				placeholder=''
				value={searchValue}
				onChange={(e) => setSearchValue(e.currentTarget.value)}
				type='text'
			/>
		</div>
	)
}


