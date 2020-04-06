export type TableRowSiteProps = {
	sites: TableRowSite
}

export type TableRowSite = number

export type TableRowStatus = 'enable' | 'disable' | 'blocked'

export type TableRowStatusProps = {
	status: TableRowStatus
}

export type TableRowName = string

export type TableRowNameProps = {
	name: TableRowName
}

export type TableRowType =
	| 'analytics'
	| 'tag_manager'
	| 'email'
	| 'dmp_crm'
	| 'heatmap'

export type TableRowTypeProps = {
	type: TableRowType
}

export type TableRowProps = {
	name: TableRowName
	sites: TableRowSite
	type: TableRowType
	status: TableRowStatus
}

export type TableRowId = number

export type TableRow = TableRowProps & { id: TableRowId }

export type TableProps = {
	data: TableRow[] | null
}

export type Data = TableRow[] | null

export type JsonData = {
	id: number
	name: string
	sites: number
	type: string
	status: string
}

export type SearchProps = {
	searchValue: string
	setSearchValue: (arg0: string) => void
}

export type TableFilterType = (
	type: string | number,
	cb:  ()=> void | boolean
) => void