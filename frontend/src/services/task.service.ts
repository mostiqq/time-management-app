import { API_URL } from '@/constants/api.constants'
import { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

class TaskService {
	private BASE_URL = 'user/tasks'

	async getTasks() {
		const token = localStorage.getItem('token')
		const response = await fetch(`${API_URL}/${this.BASE_URL}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData: ITaskResponse[] = await response.json()

		return responseData
	}

	async createTask(data: TypeTaskFormState) {
		const token = localStorage.getItem('token')
		const response = await fetch(`${API_URL}/${this.BASE_URL}`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData = await response.json()

		return responseData
	}

	async updateTask(id: string, data: TypeTaskFormState) {
		const token = localStorage.getItem('token')
		const response = await fetch(`${API_URL}/${this.BASE_URL}/${id}`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData = await response.json()

		return responseData
	}

	async deleteTask(id: string) {
		const token = localStorage.getItem('token')
		const response = await fetch(`${API_URL}/${this.BASE_URL}/${id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData = await response.json()

		return responseData
	}
}

export const taskService = new TaskService()
