'use client'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ListView } from './list-view/ListView'
import { Loader } from '@/components/ui/Loader'
import { SwitcherView } from './SwitcherView'
import { KanbanView } from './kanban-view/KanbanView'

export type TypeView = 'list' | 'kanban'

export function TasksView() {
	const [type, setType, isLoading] = useLocalStorage<TypeView>(
		'view-type',
		'list'
	)

	if (isLoading) return <Loader />

	return (
		<div>
			<SwitcherView setType={setType} type={type} />
			{type === 'list' ? <ListView /> : <KanbanView />}
		</div>
	)
}
