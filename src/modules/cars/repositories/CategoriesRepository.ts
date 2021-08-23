import { Category } from "../model/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    /* Só vai ser usado quando criarmos uma instância da categories. Exe.:
    const categoriesRepository = new CategoriesRepository(); */
    constructor() {
        /* Passa this para poder pegar o categories de dentro da class só inicia
        o array */
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): void {
        /* Quando instanciamos, Category vai lá pra pasta Model sua respectiva 
        localização e acaba trazendo um id */
        const category = new Category();

        /* Com Object.assign passamos item a item para dentro de category,
        não precisando passar category.name e por ai vai no caso de
        fazer da forma padrão */
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const categoryExist = this.categories.find(
            (category) => category.name === name
        );

        return categoryExist;
    }
}

export { CategoriesRepository };
