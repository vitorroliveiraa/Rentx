import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category; // Retorna um category
    list(): Category[]; // Retorna um array de category
    create({ name, description }: ICreateCategoryDTO): void; // void não retorna nada
}

export { ICategoriesRepository, ICreateCategoryDTO };
