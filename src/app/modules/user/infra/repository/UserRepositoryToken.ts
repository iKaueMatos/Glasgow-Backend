import { UserTokens } from '@prisma/client';
import prisma from '../prisma/client';
import { IUserToken } from '../../domain/entities/interfaces/IUserToken';
import { ITokenData } from '../../application/dtos/ITokenData';

export class UserRepositoryToken {
  async create(tokenData: ITokenData): Promise<void> {
    await prisma.userTokens.create({
      data: {
        refreshToken: tokenData.refresh_token,
        userId: tokenData.user_id,
        expiresDate: tokenData.expires_date,
      },
    });
  }

  async findByUserIdAndRefreshToken(userId: number, refreshToken: string): Promise<IUserToken | null> {
    const prismaUserToken = await prisma.userTokens.findFirst({
      where: {
        userId: userId,
        refreshToken: refreshToken,
      },
    });

    if (!prismaUserToken) return null;
    
    return {
      id: prismaUserToken.id,
      userId: prismaUserToken.userId,
      refreshToken: prismaUserToken.refreshToken,
      expiresDate: prismaUserToken.expiresDate,
      createdAt: prismaUserToken.createdAt,
    } as IUserToken;
  }

  async findByRefreshToken(refleshToken: string): Promise<IUserToken | null> {
    const prismaUserToken = await prisma.userTokens.findFirst({
      where: {
        refreshToken: refleshToken
      }
    })

    if (!prismaUserToken) return null;

    return {
      id: prismaUserToken.id,
      userId: prismaUserToken.userId,
      refreshToken: prismaUserToken.refreshToken,
      expiresDate: prismaUserToken.expiresDate,
      createdAt: prismaUserToken.createdAt,
    } as IUserToken;
  }

  async deleteById(id: number): Promise<void> {
    await prisma.userTokens.delete({
      where: { id },
    });
  }
  
  async findById(id: number): Promise<UserTokens | null> {
    const userToken = await prisma.userTokens.findUnique({
      where: { id },
    });
  
    return userToken;
  }
}