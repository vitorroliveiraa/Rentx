import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory
        );
    });

    it('should be able to list all available cars', async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'Name car',
            description: 'Description car',
            daily_rate: 100,
            license_plate: 'ABC-1234',
            fine_amount: 60,
            brand: 'Brand',
            category_id: 'category_id',
        });

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it('should be able to list all available cars by brand', async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'Name car 2',
            description: 'Description car',
            daily_rate: 100,
            license_plate: 'ABC-1234',
            fine_amount: 60,
            brand: 'Car_brand_test',
            category_id: 'category_id',
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: 'Car_brand_test',
        });

        expect(cars).toEqual([car]);
    });

    it('should be able to list all available cars by name', async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'Name car 3',
            description: 'Description car',
            daily_rate: 100,
            license_plate: 'ABC-12345',
            fine_amount: 60,
            brand: 'Car_brand_test',
            category_id: 'category_id',
        });

        const cars = await listAvailableCarsUseCase.execute({
            name: 'Name car 3',
        });

        expect(cars).toEqual([car]);
    });

    it('should be able to list all available cars by category', async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'Name car 4',
            description: 'Description car',
            daily_rate: 100,
            license_plate: 'ABC-12347',
            fine_amount: 60,
            brand: 'Car_brand_test',
            category_id: '12345',
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: '12345',
        });

        expect(cars).toEqual([car]);
    });
});
