import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { ApplicationGlobalModule } from '../app.global.modules'


describe('TodoService', () => {
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ApplicationGlobalModule],
      providers: [TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
