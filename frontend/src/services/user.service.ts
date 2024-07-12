import { API_URL } from '@/constants/api.constants'
import { IUser, TypeUserForm } from '@/types/auth.types'

export interface IProfileResponse {
	user: IUser
	statistics: {
		label: string
		value: string
	}[]
}

class UserService {
	async getProfile() {
		const token = localStorage.getItem('token')
		const response = await fetch(`${API_URL}/user/profile`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData: IProfileResponse = await response.json()

		return responseData
	}

	async update(data: TypeUserForm) {
		const token = localStorage.getItem('token')
		const response = await fetch(`${API_URL}/user/profile`, {
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

export const userService = new UserService()
