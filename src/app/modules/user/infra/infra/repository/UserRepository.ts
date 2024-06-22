import { IUser } from "../../../domain/model/IUser";
import prisma from "../prisma/client";


/**
 * TODO
 * Efetuar Correções na tipagem e verificar fluxo
 */
export class UserRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) return null;

    return user;
  }
}