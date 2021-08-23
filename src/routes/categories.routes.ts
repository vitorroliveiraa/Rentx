import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    // Agora a rota só recebe as requisisões
    const { name, description } = request.body;

    // Chama o service(RN) e passa tudo pra variável
    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );

    // Executa o service(RN)
    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();

    return response.json({ all });
});

export { categoriesRoutes };
