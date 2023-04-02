import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { DbService } from '@todo-app/db-service';
import { UtilsService } from '@todo-app/utils';

@Injectable()
export class UserService {
  constructor(private db: DbService, private utils: UtilsService) { }

  getAll(): Promise<User[]> {
    return this.db.user.findMany();
  }

  getById(id: string): Promise<User> {
    return this.db.user.findFirst({ where: { id } })
  }

  getByEmail(email: string): Promise<User> {
    return this.db.user.findFirst({ where: { email } })
  }

  createUser(userData: Partial<User>): Promise<User> {
    const password = this.utils.sha1(userData.password);

    return this.db.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password,
      }
    })

  }
}
