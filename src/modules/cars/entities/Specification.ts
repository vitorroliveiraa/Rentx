import { v4 as uuidv4 } from "uuid";

class Specification {
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    /* Só entra no constructor quando instância */
    constructor() {
        /* Se for diferente, quer dizer que não existe determinada
        categoria. Então vai gerar um id para a nova categoria */
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Specification };
