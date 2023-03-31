import { IsString } from 'class-validator'

export class UserLoginArgs {
	@IsString()
	query: string

	@IsString()
	password: string
}
