import { Controller, Get, Post, Headers, Body } from '@nestjs/common'

import { UserLoginArgs } from './user.dto'
import { UserService } from './user.service'

@Controller('/v1/user')
export class UserController {
	constructor(private readonly service: UserService) {}

	@Get('/me')
	async getMe(@Headers('Authorization') token: string) {
		const res = await this.service.getMe(token)

		return { statusCode: 200, data: res }
	}

	@Post('/login')
	async login(@Body() args: UserLoginArgs) {
		const res = await this.service.login(args)

		return { statusCode: 200, data: res }
	}
}
