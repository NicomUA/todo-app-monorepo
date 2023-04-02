import {
  Injectable,
  OnModuleInit,
  INestApplication,
  OnApplicationShutdown,
} from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { AppLogger } from '@todo-app/logger';
import { PrismaConfig, prismaConfig } from './prisma.config';

@Injectable()
export class DbService
  extends PrismaClient<PrismaConfig>
  implements OnModuleInit, OnApplicationShutdown {
  constructor(private readonly logger: AppLogger) {
    super(prismaConfig);
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();

    this.$on('error', (event: Prisma.LogEvent) => {
      this.logger.error('Error from prisma', { error: event });
    });

    this.$on('warn', (event: Prisma.LogEvent) => {
      this.logger.warn('Warn from prisma', { error: event });
    });

    this.$on('info', (event: Prisma.LogEvent) => {
      this.logger.debug('Info from prisma', { info: event });
    });
  }

  async enableShutdownHooks(app: INestApplication): Promise<void> {
    this.$on('beforeExit', async () => {
      this.logger.info('Going to shout down up APP');
      await app.close();
    });
  }

  async onApplicationShutdown(): Promise<void> {
    this.logger.info('Going to disconnect DB');
    await this.$disconnect();
  }
}
