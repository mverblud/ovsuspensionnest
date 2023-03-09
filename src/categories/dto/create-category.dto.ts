import { IsString, MinLength, IsBoolean, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @MinLength(5)
  name: string;
  @IsBoolean()
  @IsOptional()
  enabled: boolean;
}
