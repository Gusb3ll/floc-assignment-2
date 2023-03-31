import { hash as argon2Hash, argon2id, Options } from 'argon2'

import { ENTROPY } from './config'

const config: Options = {
	version: 19,
	type: argon2id,
	hashLength: 64,
	timeCost: 12,
	parallelism: 8,
	memoryCost: 2 ** 16,
}

export const hashPassword = (value: string) => {
	return argon2Hash(value, {
		...config,
		raw: true,
		salt: Buffer.from(ENTROPY, 'utf-8'),
	}).then(hash => hash.toString('hex'))
}

export const verifyPassword = async (input: string, storedHash: string) => {
	const inputHash = await hashPassword(input)
	if (inputHash === storedHash) {
		return true
	}
	return false
}
