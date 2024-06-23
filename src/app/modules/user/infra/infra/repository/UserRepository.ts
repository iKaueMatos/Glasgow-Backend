import { Prisma } from "@prisma/client";
import { IUser } from "../../../domain/model/IUser";
import prisma from "../prisma/client";
import { IUserRepository } from "./IUserRepository";
import { CustomException } from "../../../../../shared/exceptions/CustomException";
import { ICreateUserDTO } from "../../../../auth/application/dtos/ICreatedUserDTO";

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    return {
      ...user,
    };
  }

  async create(data: ICreateUserDTO): Promise<IUser> {
    const userData: Omit<Prisma.UserCreateInput, 'driverLicense'> = {
      name: data.name,
      email: data.email,
      password: data.password,
      isAdmin: data.isAdmin,
      avatar: null,
      created_at: new Date(),
    };
  
    try {
      const user = await prisma.user.create({
        data: userData as Prisma.UserCreateInput,
      });
      
      return user as IUser;
    } catch (error) {
      throw new CustomException("Erro", "Ocorreu um erro ao processar a requisição para criar o usuário!")
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(user: IUser): Promise<IUser | null> {
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      avatar: user.avatar,
      created_at: user.created_at,
    };

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: data,
    });

    if (!updatedUser) {
      return null;
    }

    return {
      ...updatedUser,
    };
  }

  async findById(id: number): Promise<IUser | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return null;
    }

    return {
      ...user,
    };
  }

  async deleteById(id: number): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }
}
