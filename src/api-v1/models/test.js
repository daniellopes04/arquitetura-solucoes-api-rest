import { validate } from "jsonschema";

import { pessoaSchema } from "./schemas";

var obj = {
  nome: "Antônia Albuquerque",
  email: "antonia@gmail.com",
  telefone: "001-124-2111",
  organizacao: null,
  tags: ["trabalho", "amigos"],
};

var result = validate(obj, pessoaSchema);
console.log(result);
