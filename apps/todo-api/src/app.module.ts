import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ApplicationGlobalModule } from './app.global.modules';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [ApplicationGlobalModule, TodoModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule { }
