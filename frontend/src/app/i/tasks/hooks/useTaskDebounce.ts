import { TypeTaskFormState } from '@/types/task.types'
import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import { useUpdateTasks } from './useUpdateTasks'
import { useCreateTask } from './useCreateTask'
import { UseFormWatch } from 'react-hook-form'

interface IUseTaskDebounce {
	watch: UseFormWatch<TypeTaskFormState>
	itemId: string
}

export function useTaskDebounce({ watch, itemId }: IUseTaskDebounce) {
	const { updateTask } = useUpdateTasks()
	const { createTask } = useCreateTask()
	const debouncedCreateTask = useCallback(
		debounce((formData: TypeTaskFormState) => {
			createTask(formData)
		}, 444),
		[]
	)

	const debouncedUpdateTask = useCallback(
		debounce((formData: TypeTaskFormState) => {
			updateTask({ id: itemId, data: formData })
		}, 444),
		[]
	)

	useEffect(() => {
		const { unsubscribe } = watch(formData => {
			if (itemId) {
				debouncedUpdateTask({
					...formData,
					priority: formData.priority || undefined
				})
			} else {
				debouncedCreateTask(formData)
			}
		})

		return () => {
			unsubscribe()
		}
	}, [watch(), debouncedUpdateTask, debouncedCreateTask])
}
