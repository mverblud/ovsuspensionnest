import { IsString, MinLength, IsBoolean, IsOptional, IsEmail } from 'class-validator';

export class CreateProviderDto {
  
  @IsString()
  @MinLength(5)
  name: string;

  @IsString()
  @MinLength(3)
  shortName: string;

  @IsOptional()
  address: string;
  
  @IsOptional()
  phone: string;
 
  @IsOptional()
  @IsEmail()
  email: string;

}