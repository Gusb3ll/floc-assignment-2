import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { isDevelopment, SERVER_HOST, SERVER_PORT } from '@shop/core'

import { AppModule } from './app.module'
//
;(async () => {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter({ bodyLimit: 33554432 }),
		{
			bodyParser: true,
			cors: { origin: '*' },
			logger: isDevelopment ? ['error', 'warn', 'log'] : ['error'],
		}
	)
	app.useGlobalPipes(new ValidationPipe())

	await app.listen(SERVER_PORT, SERVER_HOST)

	console.log(`\n Server started ${SERVER_HOST}:${SERVER_PORT}`)
})()
