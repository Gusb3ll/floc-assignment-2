import { IsNotEmpty, IsString, IsNumber, ValidateNested } from 'class-validator'

export class CreateProductData {
	@IsString()
	title: string

	@IsString()
	description: string

	@IsNumber()
	price: number

	@IsString()
	image: string
}

export class CreateProductArgs {
	@ValidateNested()
	@IsNotEmpty()
	data: CreateProductData
}

export class UpdateProductData {
	title?: string[]

	description?: string

	price?: number

	image?: string
}

export class UpdateProductArgs {
	@IsNotEmpty()
	data: UpdateProductData
}
