import { extendTheme } from '@chakra-ui/react'

import { buttonTheme } from './components/button'

export const theme = extendTheme({
	fonts: {
		body: 'Line, sans-serif',
		heading: 'Line, sans-serif',
	},
	components: {
		Container: {
			baseStyle: {
				maxW: '1280px',
			},
		},
		Text: {
			baseStyle: {
				color: 'gray.12',
			},
		},
		Heading: {
			baseStyle: {
				color: 'gray.12',
			},
		},
		FormLabel: {
			baseStyle: {
				color: 'gray.12',
				fontFamily: "'IBM Plex Sans Thai', sans-serif",
				fontWeight: 'medium',
			},
		},
		Button: buttonTheme,
	},
	styles: {
		global: () => ({
			body: {
				backgroundColor: '#f8f8f8',
			},
		}),
	},
})
