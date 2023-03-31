import { Module } from '@nestjs/common'

import { ProductModule } from './api/v1/product/product.module'
import { UserModule } from './api/v1/user/user.module'

@Module({
	imports: [ProductModule, UserModule],
})
export class AppModule {}
