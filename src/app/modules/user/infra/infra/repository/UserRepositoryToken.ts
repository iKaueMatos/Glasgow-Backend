import prisma from '../prisma/client';

export class UserRepositoryToken {
  async create(tokenData: { refreshToken: string; userId: number; expiresDate: Date }): Promise<void> {
    await prisma.userTokens.create({
      data: {
        refreshToken: tokenData.refreshToken,
        userId: tokenData.userId,
        expiresDate: tokenData.expiresDate,
      },
    });
  }
}