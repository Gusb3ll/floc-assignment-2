import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { PrismaService } from '@shop/db'

import { ProductController } from './product.controller'
import { ProductService } from './product.service'
import { PermissionsGuard } from '../common/guards/permissions.guard'
import { UserService } from '../user/user.service'

@Module({
	controllers: [ProductController],
	providers: [
		ProductService,
		UserService,
		PrismaService,
		{
			provide: APP_GUARD,
			useClass: PermissionsGuard,
		},
	],
})
export class ProductModule {}
