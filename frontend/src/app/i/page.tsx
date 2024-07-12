import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Statistics } from './Statistics'
import { Heading } from '@/components/ui/Heading'
export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}
export default function page() {
	return (
		<div>
			<Heading title='Statistics' />
			<Statistics />
		</div>
	)
}
