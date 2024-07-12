import { FILTERS } from '../columns.data'
import { useUpdateTasks } from './useUpdateTasks'
import { DropResult } from '@hello-pangea/dnd'

export function useTaskDnd() {
	const { updateTask } = useUpdateTasks()

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return

		const destinationColumnId = result.destination.droppableId

		if (destinationColumnId === result.source.droppableId) return

		if (destinationColumnId === 'completed') {
			updateTask({
				id: result.draggableId,
				data: {
					isCompleted: true
				}
			})

			return
		}

		const newCreatedAt = FILTERS[destinationColumnId].format()

		updateTask({
			id: result.draggableId,
			data: {
				isCompleted: false,
				createdAt: newCreatedAt
			}
		})
	}

	return { onDragEnd }
}
