import { IPomodoroRoundResponse } from '@/types/pomodoro.types'
import { ITimerState } from '../timer.types'
import { useLoadSettings } from './useLoadSettings'
import { useUpdateRound } from './useUpdateRound'

type TypeUseTimerActions = ITimerState & {
	rounds: IPomodoroRoundResponse[] | undefined
}

export function useTimerActions({
	activeRound,
	secondsLeft,
	setIsRunning,
	rounds,
	setActiveRound,
	isRunning
}: TypeUseTimerActions) {
	const { workInterval } = useLoadSettings()
	const { isUpdateRoundPending, updateRound } = useUpdateRound()

	const pauseHandler = () => {
		const totalSeconds = workInterval * 60 - secondsLeft
		setIsRunning(false)

		if (!activeRound?.id) return
		updateRound({
			id: activeRound?.id,
			data: {
				totalSeconds: secondsLeft,
				isCompleted: Math.floor(totalSeconds / 60) >= workInterval
			}
		})
	}

	const playHandler = () => {
		setIsRunning(true)
		console.log(isRunning)
	}

	const nextRoundHandler = () => {
		if (!activeRound?.id) return

		updateRound({
			id: activeRound?.id,
			data: {
				isCompleted: true,
				totalSeconds: workInterval * 60
			}
		})
	}

	const prevRoundHandler = () => {
		const lastCompletedRound = rounds?.findLast(round => round.isCompleted)

		if (!lastCompletedRound?.id) return

		updateRound({
			id: lastCompletedRound?.id,
			data: {
				isCompleted: false,
				totalSeconds: 0
			}
		})

		setActiveRound(lastCompletedRound)
	}

	return {
		isUpdateRoundPending,
		pauseHandler,
		playHandler,
		nextRoundHandler,
		prevRoundHandler
	}
}
