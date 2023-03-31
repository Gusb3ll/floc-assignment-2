import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common'
import { generateToken, verifyPassword, verifyToken } from '@shop/core'
import { PrismaModels, PrismaService } from '@shop/db'

import { UserLoginArgs } from './user.dto'

@Injectable()
export class UserService {
	constructor(private readonly db: PrismaService) {}

	getMe(token: string): Promise<PrismaModels.User> {
		try {
			token = token.split(' ')[1]
			const { id } = verifyToken(token)
			return this.db.user.findUnique({ where: { id } })
		} catch {
			throw new UnauthorizedException()
		}
	}

	async login(args: UserLoginArgs): Promise<string> {
		const { query, password } = args
		const exist = await this.db.user.findFirst({
			where: { OR: [{ email: query }, { username: query }] },
		})
		if (!exist) {
			throw new NotFoundException('User not found')
		}
		const { id, password: existPassword } = exist
		const validPassword = await verifyPassword(password, existPassword)
		if (!validPassword) {
			throw new BadRequestException('Invalid Credentials')
		}

		return generateToken(id)
	}
}
