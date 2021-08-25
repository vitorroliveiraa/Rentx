import express from "express";

// Quando o path termina com nome de pasta, automaticamente pega index
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => {
    console.log("Started application ⚡");
});
