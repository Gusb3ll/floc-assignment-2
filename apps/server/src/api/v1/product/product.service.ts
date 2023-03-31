import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaModels, PrismaService } from '@shop/db'

import { CreateProductArgs, UpdateProductArgs } from './product.dto'

@Injectable()
export class ProductService {
	constructor(private readonly db: PrismaService) {}

	getProducts(): Promise<PrismaModels.Product[]> {
		return this.db.product.findMany({
			orderBy: {
				createdAt: 'asc',
			},
		})
	}

	async getProduct(productId: string): Promise<PrismaModels.Product> {
		const product = await this.db.product.findFirst({
			where: {
				id: productId,
			},
		})
		if (!product) {
			throw new NotFoundException('Product not found')
		}

		return product
	}

	async createProduct(args: CreateProductArgs): Promise<void> {
		const { data } = args
		await this.db.product.create({
			data,
		})
	}

	async updateProduct(
		productId: string,
		args: UpdateProductArgs
	): Promise<void> {
		const { data } = args
		await this.db.product.update({
			where: {
				id: productId,
			},
			data,
		})
	}

	async deleteProduct(productId: string): Promise<void> {
		await this.db.product.delete({
			where: {
				id: productId,
			},
		})
	}
}
