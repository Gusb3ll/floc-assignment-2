import { PrismaClient } from '../../generated/client'

export const cleanupDb = async (db: PrismaClient) => {
	const tablenames = await db.$queryRaw<
		Array<{ tablename: string }>
	>`SELECT tablename FROM pg_tables WHERE schemaname='public'`

	for (const { tablename } of tablenames) {
		if (tablename !== '_prisma_migrations') {
			try {
				let result = `${await db.$executeRawUnsafe(
					`TRUNCATE TABLE "public"."${tablename}" CASCADE;`
				)}`
				if (result === '0') {
					result = 'OK'
				} else {
					result = 'ERROR'
				}
				console.log(`${tablename}: ${result}`)
			} catch (e) {
				console.log('Clean up error : ', e)
			}
		}
	}
}
