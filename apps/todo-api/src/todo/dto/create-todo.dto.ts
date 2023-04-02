import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({ minimum: 3 })
  @IsString()
  @MinLength(1)
  title: string;
}
