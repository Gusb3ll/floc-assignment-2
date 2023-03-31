import { useToast as useChakraToast } from '@chakra-ui/react'

export const useToast = () => {
	const toast = useChakraToast()

	const info = (title: string, description?: string) => {
		toast({
			title: title || 'Success',
			description,
			status: 'info',
			duration: 3000,
			isClosable: true,
		})
	}
	const success = (title: string, description?: string) => {
		toast({
			title: title || 'Success',
			description,
			status: 'success',
			duration: 3000,
			isClosable: true,
		})
	}
	const error = (title: string, description?: string) => {
		toast({
			title: title || 'Error',
			description,
			status: 'error',
			duration: 3000,
			isClosable: true,
		})
	}

	return { info, success, error }
}
