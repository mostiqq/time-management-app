import { PrismaService } from 'src/prisma.service';
import { PomodoroRoundDto, PomodoroSessionDto } from './dto/pomodoro.dto';
export declare class PomodoroService {
    private prisma;
    constructor(prisma: PrismaService);
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
    update(dto: Partial<PomodoroSessionDto>, pomodoroId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean;
        userId: string;
    }>;
    updateRound(dto: Partial<PomodoroRoundDto>, roundId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        totalSeconds: number;
        isCompleted: boolean;
        pomodoroSessionId: string;
    }>;
    deleteSession(sessionId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean;
        userId: string;
    }>;
}
