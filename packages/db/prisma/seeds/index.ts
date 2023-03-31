import { seedProduct } from './product.seed'
import { seedUser } from './user.seed'
import { cleanupDb } from './utils'
import { PrismaClient } from '../../generated/client'

const db = new PrismaClient()

;(async () => {
	console.log('\n🧹 Cleaning up db...\n')
	await cleanupDb(db)

	console.log('\n🍡 Seeding users...')
	await seedUser(db)
	console.log('✅ Users seeded!')

	console.log('\n🍡 Seeding products...')
	await seedProduct(db)
	console.log('✅ Products seeded!')
})()
	.then(async () => {
		console.log('\n⛩️ Seeder disconnected')
		await db.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await db.$disconnect()
		process.exit(1)
	})
