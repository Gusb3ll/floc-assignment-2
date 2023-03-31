import { Flex, Text } from '@chakra-ui/react'

import { useLogout, useUser } from '../utils/auth'

const Navbar = () => {
	const user = useUser()
	const logout = useLogout()

	return (
		<Flex px="6" h="60px" shadow="md">
			<Flex flexDir="row" align="center" gap="8">
				<Text fontSize="xl">{user.data.username}</Text>
				<Text fontSize="xl">{user.data.email}</Text>
			</Flex>
			<Flex flex="1" justify="end" align="center" gap={2}>
				<Text
					opacity={0.7}
					_hover={{ cursor: 'pointer', opacity: 1 }}
					onClick={() => logout.mutate({})}
				>
					Logout
				</Text>
			</Flex>
		</Flex>
	)
}

export default Navbar
