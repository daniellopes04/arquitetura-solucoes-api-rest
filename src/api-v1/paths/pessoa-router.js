import express from "express";
import { validate } from "jsonschema";

import pessoaModel from "../models/pessoa-model";
import { pessoaSchema } from "../models/schemas";

const pessoaRouter = express.Router();

// pessoaRouter.use("/", (req, res, next) => res.send("ENDPOINT PESSOAS"));
pessoaRouter.get("/", listaPessoas);
pessoaRouter.post("/", inserePessoas);

// pessoaRouter.put("/", inserePessoas);
// pessoaRouter.delete("/", inserePessoas);

// pessoaRouter.get("/{id}", listaPessoas);

function listaPessoas(req, res, next) {
  pessoaModel.lista({}, (err, lista) => {
    if (!err) {
      res.json(lista);
    } else {
      res.status(400).send(err.message);
    }
  });
}

function inserePessoas(req, res, next) {
  // Validação do documento JSON recebido
  var result = validate(req.body, pessoaSchema);

  if (result.errors.length > 0) {
    res.status(400).send("Erro no formato do objeto JSON");
  } else {
    pessoaModel.insere(req.body, (err, objNovo) => {
      if (!err) {
        res.json(objNovo);
      } else {
        res.status(400).send(err.message);
      }
    });
  }
}

export default pessoaRouter;
