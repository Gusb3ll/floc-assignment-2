import {
	Flex,
	Button,
	Image,
	FormControl,
	Stack,
	FormHelperText,
	Input,
	Spinner,
} from '@chakra-ui/react'
import { Field, Formik } from 'formik'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'

import Layout from '../../layouts/Layout'
import { fetch } from '../../utils/fetch'
import { useToast } from '../../utils/toast'
import { DialogDeleteConfirm } from '../../modules/shared/DialogDeleteConfirm'

const ProductPage = () => {
	const toast = useToast()
	const route = useParams()
	const navigate = useNavigate()

	const { data } = useQuery({
		queryKey: ['getProduct'],
		queryFn: () => fetch.get(`/product/${route.productId}`),
		onError: err => toast.error((err as any).message),
	})

	const updateProduct = useMutation({
		mutationFn: (data: any) =>
			fetch.patch(`/product/update/${route.productId}`, { data }),
		onError: error => {
			toast.error((error as any).message)
		},
		onSuccess: () => {
			toast.success('Product updated')
		},
	})

	const deleteProduct = useMutation({
		mutationFn: () => fetch.delete(`/product/delete/${route.productId}`),
		onError: error => {
			toast.error((error as any).message)
		},
		onSuccess: () => {
			toast.success('Product deleted')
			navigate('/')
		},
	})

	return (
		<Layout>
			{data?.data ? (
				<>
					<Link to="/">
						<Button>Back</Button>
					</Link>
					<Flex
						flexDir="column"
						justify="center"
						align="center"
						gap="8"
						mt="-10"
					>
						<Image
							src={data?.data?.image}
							alt="Product Image"
							maxW="200px"
							rounded="md"
						/>
						<Formik
							enableReinitialize={true}
							initialValues={{
								title_th: data.data.title[0],
								title_en: data.data.title[1],
								description: data.data.description,
								price: data.data.price,
							}}
							onSubmit={async (values, actions) => {
								await updateProduct.mutateAsync({
									title: [values.title_th, values.title_en],
									description: values.description,
									price: values.price,
								})
								actions.setSubmitting(false)
							}}
						>
							{({ handleSubmit, isSubmitting, values }) => (
								<form onSubmit={handleSubmit}>
									<Stack spacing={4}>
										<Stack spacing={4}>
											<FormControl>
												<FormHelperText>Product title (Thai)</FormHelperText>
												<Field
													as={Input}
													type="text"
													name="title_th"
													values={values.title_th}
													placeholder={values.title_th}
												/>
											</FormControl>
											<FormControl>
												<FormHelperText>Product title (English)</FormHelperText>
												<Field
													as={Input}
													type="text"
													name="title_en"
													values={values.title_en}
												/>
											</FormControl>
											<FormControl>
												<FormHelperText>Product description</FormHelperText>
												<Field
													as={Input}
													type="text"
													name="description"
													values={values.description}
												/>
											</FormControl>
											<FormControl>
												<FormHelperText>Product price</FormHelperText>
												<Field
													as={Input}
													type="number"
													name="price"
													values={values.price}
												/>
											</FormControl>
										</Stack>
										<Button type="submit" isLoading={isSubmitting}>
											Save
										</Button>
										<DialogDeleteConfirm
											previewText="this product"
											onDelete={() => deleteProduct.mutateAsync()}
										>
											<Button w="full" variant="outline" border="2px solid">
												Delete
											</Button>
										</DialogDeleteConfirm>
									</Stack>
								</form>
							)}
						</Formik>
					</Flex>
				</>
			) : (
				<Flex justifyContent="center" py={8}>
					<Spinner />
				</Flex>
			)}
		</Layout>
	)
}

export default ProductPage
