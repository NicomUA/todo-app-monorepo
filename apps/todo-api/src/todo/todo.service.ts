import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from '@todo-app/db-service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';


const todos = [];

@Injectable()
export class TodoService {
  constructor(private db: DbService) { }

  create({ title }: CreateTodoDto, user) {
    return this.db.todo.create({
      data: {
        title,
        userId: user.sub,
      },
    });
  }

  findAll(user) {
    return this.db.todo.findMany({ where: { userId: user.sub }, orderBy: { createdAt: 'asc' } });
  }

  findOne(id: string, user) {
    return this.db.todo.findFirst({ where: { id, userId: user.sub } })
  }

  async update(id: string, updateTodoDto: UpdateTodoDto, user) {
    const todo = await this.findOne(id, user);

    if (!todo) {
      throw new NotFoundException();
    }

    return this.db.todo.update({ where: { id: todo.id }, data: { title: updateTodoDto.title, done: updateTodoDto.done } })
  }

  async remove(id: string, user) {
    const todo = await this.findOne(id, user);

    if (!todo) {
      throw new NotFoundException();
    }

    return this.db.todo.delete({ where: { id } });
  }
}
