import { hashPassword } from '@shop/core'

import { PrismaClient } from '../../generated/client'

export const seedUser = async (db: PrismaClient) => {
	await db.user.createMany({
		data: [
			{
				email: 'floc1@floc.is',
				username: 'floc1',
				password: await hashPassword('P@ssWord.'),
				permissions: ['READ', 'WRITE'],
			},
			{
				email: 'floc2@floc.is',
				username: 'floc2',
				password: await hashPassword('Thi$isfloc.'),
				permissions: ['READ', 'WRITE'],
			},
			{
				email: 'floc3@floc.is',
				username: 'floc3',
				password: await hashPassword('PPcc114@w'),
				permissions: ['READ', 'WRITE'],
			},
			{
				email: 'floc4@floc.is',
				username: 'floc4',
				password: await hashPassword('PPcc115@w'),
				permissions: ['READ'],
			},
			{
				email: 'floc5@floc.is',
				username: 'floc5',
				password: await hashPassword('-1-1-1-1@W'),
				permissions: ['READ'],
			},
		],
	})
}
