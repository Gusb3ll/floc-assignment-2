import { BrowserRouter, Routes, Route } from 'react-router-dom'

import IndexPage from './pages'
import SignInPage from './pages/auth/signin'
import ProductPage from './pages/product/[productId]'
import { ProtectedRoute } from './utils/auth'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* Public Route */}
				<Route path="/auth/signin" element={<SignInPage />} />

				{/* Private Route */}
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<IndexPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/product/:productId/*"
					element={
						<ProtectedRoute>
							<ProductPage />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
