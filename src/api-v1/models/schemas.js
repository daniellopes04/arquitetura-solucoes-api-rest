export const pessoaSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
    },
    nome: {
      type: "string",
      description: "Nome do contato",
    },
    email: {
      type: "string",
      description: "E-mail do contato",
    },
    telefone: {
      type: "string",
      description: "Número de telefone do contato",
    },
    tags: {
      type: "array",
      description: "Grupos aos quais o contato está associado",
      items: {
        type: "string",
      },
    },
  },
  required: ["nome", "email"],
  example: {
    id: 5,
    nome: "Francis Ford Copolla",
    email: "copolla@hollywood.com",
    telefone: "001-124-2111",
    organizacao: {
      id: 1,
      nome: "Acme Corporation",
      segmento: "Varejo",
      endereco: "Av. Rebolças, 422 - Centro",
      cidade: "São Paulo",
      cep: "33422-990",
      estado: "SP",
      telefones: ["11-3234-5543", "11-4425-5544"],
    },
    tags: ["cinema", "trabalho"],
  },
};
