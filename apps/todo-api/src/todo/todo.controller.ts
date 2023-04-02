import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { GetUser } from '../auth/get-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto, @GetUser() user) {
    return this.todoService.create(createTodoDto, user);
  }

  @Get()
  findAll(@GetUser() user) {
    return this.todoService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser() user) {
    return this.todoService.findOne(id, user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto, @GetUser() user) {
    return this.todoService.update(id, updateTodoDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @GetUser() user) {
    return this.todoService.remove(id, user);
  }
}
