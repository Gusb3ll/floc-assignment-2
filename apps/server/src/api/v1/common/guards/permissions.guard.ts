import {
	Injectable,
	CanActivate,
	ExecutionContext,
	UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'

import { UserService } from '../../user/user.service'

@Injectable()
export class PermissionsGuard implements CanActivate {
	constructor(
		private readonly reflector: Reflector,
		private readonly userService: UserService
	) {}

	private matchPermissions(permissions: string[], userPermissions: string[]) {
		return permissions.some(permission => userPermissions.includes(permission))
	}

	async canActivate(ctx: ExecutionContext): Promise<boolean> {
		try {
			const req = ctx.switchToHttp().getRequest()
			const permissions = this.reflector.get<string[]>(
				'permissions',
				ctx.getHandler()
			)
			if (!permissions) {
				return true
			}
			const token: string = req.headers?.authorization || ''
			if (!token) {
				throw new UnauthorizedException("You don't have enough permission")
			}
			const user = await this.userService.getMe(token)
			const validate = this.matchPermissions(permissions, user.permissions)
			if (validate) {
				return true
			}
			throw new UnauthorizedException("You don't have enough permission")
		} catch {
			throw new UnauthorizedException("You don't have enough permission")
		}
	}
}
