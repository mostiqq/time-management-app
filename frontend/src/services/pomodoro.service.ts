import { API_URL } from '@/constants/api.constants'
import {
	IPomodoroSessionResponse,
	TypePomodoroRoundState,
	TypePomodoroSessionState
} from '@/types/pomodoro.types'

class PomodoroService {
	private BASE_URL = 'user/timer'

	async getTodaySession() {
		const token = localStorage.getItem('token')
		const response = await fetch(`${API_URL}/${this.BASE_URL}/today`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData: IPomodoroSessionResponse = await response.json()

		return responseData
	}

	async createSession() {
		const token = localStorage.getItem('token')
		const response = await fetch(`${API_URL}/${this.BASE_URL}`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData: IPomodoroSessionResponse = await response.json()

		return responseData
	}

	async updateSession(id: string, data: TypePomodoroSessionState) {
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

	async deleteSession(id: string) {
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

	async updateRound(id: string, data: TypePomodoroRoundState) {
		const token = localStorage.getItem('token')
		const response = await fetch(`${API_URL}/${this.BASE_URL}/round/${id}`, {
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
}

export const pomodoroService = new PomodoroService()
