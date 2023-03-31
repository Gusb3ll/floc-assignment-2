import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'

import { Prisma as PrismaTypes, PrismaClient } from '../generated/client'
import type * as PrismaModels from '../generated/client'

@Injectable()
class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy
{
	async onModuleInit() {
		await this.$connect()
	}

	async onModuleDestroy() {
		await this.$disconnect()
	}
}

export { PrismaTypes, PrismaModels, PrismaService, PrismaClient }
