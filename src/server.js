import express from "express";
import http from "http";

const app = express();
const port = 5500;

app.get("/doc", (req, res, next) => res.send("Documentação da aplicação"));
app.get("/api/v1", (req, res, next) => res.send("Tudo funcionando!"));

http
  .createServer(app)
  .listen(port, () => console.log(`Servidor pronto na porta ${port}`));
