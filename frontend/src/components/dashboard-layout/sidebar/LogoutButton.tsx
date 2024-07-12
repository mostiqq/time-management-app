'use client'

import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function LogoutButton() {
	const { push } = useRouter()

	return (
		<div className='absolute top-1 right-1'>
			<button
				className='opacity-20 hover:opacity-100 transition-opacity duration-300'
				onClick={() => {
					localStorage.removeItem('token')
					push('/auth')
				}}
			>
				<LogOut size={20} />
			</button>
		</div>
	)
}
