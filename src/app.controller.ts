import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {InMemoryDBService} from '@nestjs-addons/in-memory-db';
import {PurchaseEntity} from './purchase.entity';

@Controller()
export class AppController {
    constructor(private dbService: InMemoryDBService<any>) {
    }

    @Get()
    getAll(): PurchaseEntity[] {
        return this.dbService.getAll();
    }

    @Post()
    create(@Body() dto: Partial<PurchaseEntity>): PurchaseEntity {
        return this.dbService.create(dto);
    }

    @Put()
    update(@Body() dto: PurchaseEntity): void {
        return this.dbService.update(dto);
    }

    @Post('seed')
    seed(): PurchaseEntity[] {
        this.dbService.seed((idx: number) => ({
            id: String(idx + 1),
            title: `Purchase-${idx + 1}`,
            price: (idx + 1) * 10,
            date: new Date(),
        }), 5);

        return this.dbService.getAll();
    }

    @Delete(':id')
    delete(@Param('id') id: string): void {
        return this.dbService.delete(id);
    }
}
