import { Global, Module } from '@nestjs/common';
import { DbService } from './db-service.service';

@Global()
@Module({
  providers: [DbService],
  exports: [DbService],
})
export class DbServiceModule { }
