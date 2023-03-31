import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const sizes = {
	md: defineStyle({
		fontSize: 'sm',
	}),
}

const customVariant = defineStyle(() => {
	return {
		bg: `#171717`,
		color: 'white',
		borderRadius: 'md',
		transition: 'transform 0.15s ease-out, background 0.15s ease-out',
		_hover: {
			bg: `#6F6F6F`,
		},
		_active: {
			bg: `#6F6F6F`,
		},
	}
})

export const buttonTheme = defineStyleConfig({
	sizes,
	variants: {
		custom: customVariant,
	},
	defaultProps: {
		variant: 'custom',
	},
})
