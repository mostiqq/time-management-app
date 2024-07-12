import { API_URL } from '@/constants/api.constants'
import { IAuthForm, IAuthResponse } from '@/types/auth.types'

class AuthService {
	async main(type: 'login' | 'register', data: IAuthForm) {
		const response = await fetch(`${API_URL}/auth/${type}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData: IAuthResponse = await response.json()
		return responseData
	}
}

export const authService = new AuthService()
