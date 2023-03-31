import { Navigate } from 'react-router-dom'
import { Flex, Spinner } from '@chakra-ui/react'
import { configureAuth } from 'react-query-auth'

import { storage } from './storage'
import { fetch as customFetch, getBaseUrl } from './fetch'

export const { useUser, useLogin, useRegister, useLogout } = configureAuth({
	userFn: () => {
		if (!storage.getToken()) return null
		return fetch(getBaseUrl() + '/user/me', {
			headers: {
				Authorization: `Bearer ${storage.getToken()}`,
			},
		})
			.then(res => res.json())
			.then(res => res.data)
	},
	loginFn: credentials => {
		return customFetch.post('/user/login', credentials).then((res: any) => {
			storage.setToken(res.data)
			return res
		})
	},
	registerFn: credentials => {
		return customFetch.post('/user/register', credentials).then((res: any) => {
			storage.setToken(res.data)
			return res
		})
	},
	logoutFn: () => {
		storage.clearToken()
		window.location.assign(window.location.origin as unknown as string)
		return Promise.resolve()
	},
})

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const user = useUser()

	if (user.isLoading) {
		return (
			<Flex justifyContent="center" py={8}>
				<Spinner />
			</Flex>
		)
	}

	if (!user.data) {
		return <Navigate to="/auth/signin" />
	}

	return <>{children}</>
}
