import { storage } from './storage'

export const getBaseUrl = () => {
	if (process.env.NODE_ENV === 'development') {
		return 'http://localhost:4000/v1'
	} else {
		return 'https://assignment-api.kivotos.sh/v1'
	}
}

const fetchTemp = (method: string, url: string, body: any) =>
	window
		.fetch(
			`${getBaseUrl()}${url}${
				method === 'GET' ? new URLSearchParams(body) : ''
			}`,
			{
				method: method,
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${storage.getToken()}`,
				},
				body: method !== 'GET' ? JSON.stringify(body) : null,
			}
		)
		.then(res => res.json())
		.then(res => {
			if (![200, 201].includes(res.statusCode)) {
				throw new Error(res.message)
			}
			return res
		})

const post = (url: string, body?: any): any => fetchTemp('POST', url, body)
const get = (url: string, params?: any): any => fetchTemp('GET', url, params)

export const fetch = {
	delete: (url: string, params?: any): any => fetchTemp('DELETE', url, params),
	patch: (url: string, body?: any): any => fetchTemp('PATCH', url, body),
	post,
	get,
}
