import { Module } from '@nestjs/common';
import { LoggerModule } from '@todo-app/logger';
import { DbServiceModule } from '@todo-app/db-service';
import { UtilsModule } from '@todo-app/utils';
import { ConfigurationModule, ConfigurationService } from '@todo-app/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [DbServiceModule, LoggerModule, UtilsModule, ConfigurationModule, JwtModule.registerAsync({
    global: true,
    imports: [ConfigurationModule],
    useFactory: async (configService: ConfigurationService) => ({
      secret: configService.get('JWT_SECRET'),
      signOptions: {
        expiresIn: 3600,
      },
    }),
    inject: [ConfigurationService],
  }),],
})
export class ApplicationGlobalModule { }
