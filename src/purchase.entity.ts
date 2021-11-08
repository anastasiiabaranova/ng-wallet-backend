import {InMemoryDBEntity} from '@nestjs-addons/in-memory-db';

export class PurchaseEntity implements InMemoryDBEntity {
    id: string;
    title: string;
    price: number;
}
