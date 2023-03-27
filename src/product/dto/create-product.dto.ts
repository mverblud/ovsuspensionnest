import { IsString, MinLength, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @MinLength(5)
    code: string;
    
    @IsString()
    @MinLength(5)
    name: string;

    @IsString()
    @MinLength(5)
    @IsOptional()
    description: string;

    @IsString()
    category: string;

    @IsString()
    productBrand: string;

    @IsString()
    carBrand: string;

    @IsString()
    provider: string;

    @IsNumber()
    stock: number;
    @IsNumber()
    price:number;
    @IsNumber()
    iva:number
    @IsNumber()
    discount:number;

    @IsBoolean()
    @IsOptional()
    enabled: boolean;   
}
