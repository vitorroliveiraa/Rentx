import { getRepository, Repository } from 'typeorm';

import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from '@modules/cars/repositories/ISpecificationsRepository';

import { Specification } from '../entities/Specification';

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    // private static INSTANCE: SpecificationsRepository;

    constructor() {
        this.repository = getRepository(Specification);
    }

    // public static getInstance(): SpecificationsRepository {
    //     if (!SpecificationsRepository.INSTANCE) {
    //         SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    //     }
    //     return SpecificationsRepository.INSTANCE;
    // }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({
            name,
        });

        return specification;
    }

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({
            name,
            description,
        });

        await this.repository.save(specification);

        return specification;
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const specifications = await this.repository.findByIds(ids);
        return specifications;
    }
}

export { SpecificationsRepository };
