'use client'
import { Loader } from '@/components/ui/Loader'
import { formatTime } from './format-time'
import { useTimer } from './hooks/useTimer'
import { useTimerActions } from './hooks/useTimerActions'
import { useTodaySession } from './hooks/useTodaySession'
import { PomodoroRound } from './rounds/PomodoroRound'
import { Pause, Play, RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/buttons/Button'
import { useDeleteSession } from './hooks/useDeleteSession'
import { useCreateSession } from './hooks/useCreateSession'

export function Pomodoro() {
	const timerState = useTimer()
	const { isLoading, sessionsResponse, workInterval } =
		useTodaySession(timerState)
	const actions = useTimerActions({
		...timerState,
		rounds: sessionsResponse?.rounds
	})
	const { mutate, isPending } = useCreateSession()
	const { deleteSession, isDeletePending } = useDeleteSession(() =>
		timerState.setSecondsLeft(workInterval * 60)
	)

	return (
		<div className='relative w-80 text-center'>
			{!isLoading && (
				<div className='text-7xl font-semibold'>
					{formatTime(timerState.secondsLeft)}
				</div>
			)}
			{isLoading ? (
				<Loader />
			) : sessionsResponse ? (
				<>
					<PomodoroRound
						rounds={sessionsResponse?.rounds}
						nextRoundHandler={actions.nextRoundHandler}
						prevRoundHandler={actions.prevRoundHandler}
						activeRound={timerState.activeRound}
					/>
					<button
						className='mt-6 opacity-80 hover:opacity-100 transition-opacity'
						onClick={
							timerState.isRunning ? actions.pauseHandler : actions.playHandler
						}
						disabled={actions.isUpdateRoundPending}
					>
						{timerState.isRunning ? <Pause size={30} /> : <Play size={30} />}
					</button>
					<button
						onClick={() => {
							timerState.setIsRunning(false)
							deleteSession(sessionsResponse.id)
						}}
						className='absolute top-0 right-0 opacity-40 hover:opacity-90 transition-opacity'
						disabled={isDeletePending}
					>
						<RefreshCcw size={19} />
					</button>
				</>
			) : (
				<Button onClick={() => mutate()} className='mt-1' disabled={isPending}>
					Create session
				</Button>
			)}
		</div>
	)
}
