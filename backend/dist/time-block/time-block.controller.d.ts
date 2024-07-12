import { TimeBlockService } from './time-block.service';
import { TimeBlockDto } from './dto/time-block.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class TimeBlockController {
    private readonly timeBlockService;
    constructor(timeBlockService: TimeBlockService);
    getAll(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        color: string;
        duration: number;
        order: number;
        userId: string;
    }[]>;
    create(dto: TimeBlockDto, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        color: string;
        duration: number;
        order: number;
        userId: string;
    }>;
    updateOrder(updateOrderDto: UpdateOrderDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        color: string;
        duration: number;
        order: number;
        userId: string;
    }[]>;
    update(dto: TimeBlockDto, userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        color: string;
        duration: number;
        order: number;
        userId: string;
    }>;
    delete(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        color: string;
        duration: number;
        order: number;
        userId: string;
    }>;
}
