import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface JwtPayload {
  email: string;
}

interface IPayload {
  email: string;
}

const middleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verify(token, 'segredo-do-jwt');
    if (typeof decoded === 'string') {
      throw new Error('Token inválido');
    }

    const payload: IPayload = {
      email: (decoded as JwtPayload).email,
    };

    (req as any).payload = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

export default middleware;
