import express from "express";
import organizacaoRouter from "./paths/organizacao-router";
import pessoaRouter from "./paths/pessoa-router";

const apiRouter = express.Router();

apiRouter.use("/pessoas", pessoaRouter);
apiRouter.use("/organizacoes", organizacaoRouter);
apiRouter.use("/", (req, res, next) => res.send("API V1"));

export default apiRouter;
