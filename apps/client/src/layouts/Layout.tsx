import { Box, Container, ScaleFade } from '@chakra-ui/react'
import Navbar from './Navbar'

const Layout = ({ children }: { children?: React.ReactNode }) => {
	return (
		<Box>
			<Navbar />
			<ScaleFade initialScale={0.97} in={true}>
				<Container my="4">{children}</Container>
			</ScaleFade>
		</Box>
	)
}

export default Layout
