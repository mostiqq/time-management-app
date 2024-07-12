import { PomodoroService } from './pomodoro.service';
import { PomodoroRoundDto, PomodoroSessionDto } from './dto/pomodoro.dto';
export declare class PomodoroController {
    private readonly pomodoroService;
    constructor(pomodoroService: PomodoroService);
    getTodaySession(userId: string): Promise<{
        rounds: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            totalSeconds: number;
            isCompleted: boolean;
            pomodoroSessionId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean;
        userId: string;
    }>;
    create(userId: string): Promise<{
        rounds: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            totalSeconds: number;
            isCompleted: boolean;
            pomodoroSessionId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean;
        userId: string;
    }>;
    updateRound(id: string, dto: PomodoroRoundDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        totalSeconds: number;
        isCompleted: boolean;
        pomodoroSessionId: string;
    }>;
    update(id: string, dto: PomodoroSessionDto, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean;
        userId: string;
    }>;
    deleteSession(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean;
        userId: string;
    }>;
}
