import { Category } from '../infra/typeorm/entities/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>; // Retorna um category
  list(): Promise<Category[]>; // Retorna um array de category
  create({ name, description }: ICreateCategoryDTO): Promise<void>; // void não retorna nada
}

export { ICategoriesRepository, ICreateCategoryDTO };
