import {
	Stack,
	Heading,
	Button,
	FormControl,
	FormLabel,
	Input,
	Box,
	Container,
} from '@chakra-ui/react'
import { Formik, Field } from 'formik'
import { useNavigate } from 'react-router-dom'

import { useLogin } from '../../utils/auth'
import { useToast } from '../../utils/toast'

const SignInPage = () => {
	const toast = useToast()
	const login = useLogin()
	const navigate = useNavigate()

	return (
		<Box py={12}>
			<Container maxW="26rem">
				<Stack spacing={8} textAlign="center">
					<Heading fontSize="3xl">Login</Heading>
					<Formik
						initialValues={{
							query: '',
							password: '',
						}}
						onSubmit={async (values, actions) => {
							try {
								await login.mutateAsync({
									query: values.query,
									password: values.password,
								})
								toast.success('Signed in')
								navigate('/')
							} catch (err) {
								toast.error((err as any).message)
							}
							actions.setSubmitting(false)
						}}
					>
						{({ handleSubmit, isSubmitting }) => (
							<form onSubmit={handleSubmit}>
								<Stack spacing={8}>
									<Stack spacing={4}>
										<FormControl>
											<FormLabel>Email/Username</FormLabel>
											<Field
												as={Input}
												name="query"
												type="text"
												placeholder="example@floc.is"
												required
											/>
										</FormControl>
										<FormControl>
											<FormLabel>Password</FormLabel>
											<Field
												as={Input}
												name="password"
												type="password"
												placeholder="**********"
												required
											/>
										</FormControl>
									</Stack>
									<Button type="submit" isLoading={isSubmitting}>
										Login
									</Button>
								</Stack>
							</form>
						)}
					</Formik>
				</Stack>
			</Container>
		</Box>
	)
}

export default SignInPage
