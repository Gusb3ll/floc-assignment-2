import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	TableContainer,
	Image,
	Button,
	Spinner,
	Flex,
	Td,
} from '@chakra-ui/react'

import Layout from '../layouts/Layout'
import { fetch } from '../utils/fetch'
import { useUser } from '../utils/auth'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../utils/toast'

const IndexPage = () => {
	const user = useUser()
	const toast = useToast()
	const navigate = useNavigate()

	const { data } = useQuery({
		queryKey: ['getProducts'],
		queryFn: () => fetch.get('/product/products'),
		onError: err => toast.error((err as any).message),
	})

	return (
		<Layout>
			{data?.data ? (
				<TableContainer maxWidth="full">
					<Table variant="simple" size="lg">
						<Thead>
							<Tr>
								<Th />
								<Th>Product Title (Thai)</Th>
								<Th>Product Title (English)</Th>
								<Th>Product Description</Th>
								<Th>Price</Th>
								<Th />
							</Tr>
						</Thead>
						<Tbody>
							{data?.data.map((product: any) => {
								return (
									<Tr key={product.id}>
										<Td>
											<Image
												src={product.image}
												alt={product.name}
												maxW="6rem"
											/>
										</Td>
										<Td>{product.title[0]}</Td>
										<Td>{product.title[1]}</Td>
										<Td
											style={{
												whiteSpace: 'pre-wrap',
											}}
										>
											{product.description}
										</Td>
										<Td isNumeric>{product.price}฿</Td>
										<Td>
											<Button
												px="8"
												isDisabled={!user.data.permissions.includes('WRITE')}
												_hover={{ bg: 'gray.600' }}
												onClick={() => navigate(`/product/${product.id}`)}
											>
												Edit
											</Button>
										</Td>
									</Tr>
								)
							})}
						</Tbody>
					</Table>
				</TableContainer>
			) : (
				<Flex justifyContent="center" py={8}>
					<Spinner />
				</Flex>
			)}
		</Layout>
	)
}

export default IndexPage
