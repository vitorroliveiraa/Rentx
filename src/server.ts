import express from "express";
import swaggerUi from "swagger-ui-express";

// Quando o path termina com nome de pasta, automaticamente pega index
import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => {
    console.log("Started application ⚡");
});
