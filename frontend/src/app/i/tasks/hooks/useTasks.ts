import { taskService } from '@/services/task.service'
import { ITaskResponse } from '@/types/task.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export function useTasks() {
	const { data } = useQuery({
		queryKey: ['tasks'],
		queryFn: () => taskService.getTasks()
	})

	const [items, setItems] = useState<ITaskResponse[] | undefined>(data)

	useEffect(() => {
		setItems(data)
	}, [data])

	return { items, setItems }
}
