import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	Patch,
} from '@nestjs/common'

import { CreateProductArgs, UpdateProductArgs } from './product.dto'
import { ProductService } from './product.service'
import { Permissions } from '../common/decorators/permissions.decorator'

@Controller('/v1/product')
export class ProductController {
	constructor(private readonly service: ProductService) {}

	@Get('/products')
	@Permissions('READ')
	async getProducts() {
		const res = await this.service.getProducts()

		return { statusCode: 200, data: res }
	}

	@Get('/:productId')
	@Permissions('READ')
	async login(@Param('productId') productId: string) {
		const res = await this.service.getProduct(productId)

		return { statusCode: 200, data: res }
	}

	@Post('/create')
	@Permissions('WRITE')
	async createProduct(@Body() args: CreateProductArgs) {
		await this.service.createProduct(args)

		return { statusCode: 201 }
	}

	@Patch('/update/:productId')
	@Permissions('WRITE')
	async updateProduct(
		@Param('productId') productId: string,
		@Body() args: UpdateProductArgs
	) {
		await this.service.updateProduct(productId, args)

		return { statusCode: 200 }
	}

	@Delete('/delete/:productId')
	@Permissions('WRITE')
	async deleteProduct(@Param('productId') productId: string) {
		await this.service.deleteProduct(productId)

		return { statusCode: 200 }
	}
}
