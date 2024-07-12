'use client'
import { COLORS } from '@/constants/color.constants'
import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'
import { LogoutButton } from './LogoutButton'
import { MENU } from './menu.data'
import { MenuItem } from './MenuItem'

export function Sidebar() {
	return (
		<aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout border-b border-b-border'
				>
					<GanttChartSquare color={COLORS.primary} size={38} />
					<span className='text-2xl font-bold relative'>
						Todoist
						<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
							beta
						</span>
					</span>
				</Link>
				<div className='p-3 relative'>
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem item={item} key={item.link} />
					))}
				</div>
			</div>
			<footer className='text-xs opacity-40 font-normal text-center p-layout'>
				2024 &copy; With love from{' '}
				<a
					href='https://t.me/mostiqq'
					target='_blank'
					className='hover:text-primary text-brand-300 transition-colors'
				>
					Mostiqq
				</a>
				. <br /> All rights reserved.
			</footer>
		</aside>
	)
}
