import { LoggerModule } from '@todo-app/logger';
import { Test, TestingModule } from '@nestjs/testing';
import { DbService } from './db-service.service';

describe('DbServiceService', () => {
  let service: DbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [DbService],
    }).compile();

    service = module.get<DbService>(DbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
