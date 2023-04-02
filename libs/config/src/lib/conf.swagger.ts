import { DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('ToDo API')
  .addServer('https://localhost:3000/', 'development')
  .setVersion('1.0')
  .build();

export const swaggerOptions: SwaggerDocumentOptions = {
  operationIdFactory: (_controllerKey: string, methodKey: string) => methodKey,
};
