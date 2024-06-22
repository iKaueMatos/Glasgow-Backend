import express, { NextFunction, Request, Response } from 'express';
import { router } from './app/index'
import { AppError } from './app/core/exceptions/AppError';

const app = express();

app.use(express.json());
app.use(router);

const PORT = 3000;

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Erro do Servidor Interno - ${err.message}`,
    });
  }
);

app.listen(PORT, () => {
  console.log(`O servidor está em execução http://localhost:${PORT}/`);
})