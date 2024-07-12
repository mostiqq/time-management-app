import { API_URL } from '@/constants/api.constants'
import {
	ITimeBlockResponse,
	TypeTimeBlockFormState
} from '@/types/time-block.types'

class TimeBlockService {
	private BASE_URL = 'user/time-blocks'

	async getTimeBlocks() {
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

		const responseData: ITimeBlockResponse[] = await response.json()

		return responseData
	}

	async createTimeBlock(data: TypeTimeBlockFormState) {
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

	async updateOrderTimeBlock(ids: string[]) {
		const token = localStorage.getItem('token')
		const response = await fetch(`${API_URL}/${this.BASE_URL}/update-order`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(ids)
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData = await response.json()

		return responseData
	}

	async updateTimeBlock(id: string, data: TypeTimeBlockFormState) {
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

	async deleteTimeBlock(id: string) {
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

export const timeBlockService = new TimeBlockService()
