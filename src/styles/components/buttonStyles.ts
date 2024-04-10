export const ButtonStyles = {
	baseStyle: {
		textStyle: "hero",
	},
	variants: {
		primary: {
			bg: "brand.100",
			color: "neutral.100",
			fontFamily: "'Inter', sans-serif",
			transition: '0.3s',
			_hover: {
				background: 'brand.600',
			},
			_disabled: {
				background: 'neutral.400',
				color: 'neutral.500',
			}
		},
		secondary: {
			border:"2px solid",
			borderColor: "neutral.400",
			color: "neutral.800",
			fontFamily: "'Inter', sans-serif",
			transition: '0.3s',
			_hover: {
				background: 'neutral.800',
				color: "neutral.200",
			},
			_disabled: {
				color: 'neutral.400',
			}
		},
	},
	sizes: {
		md: {
			height: '100%',
			borderRadius: "12px",
			padding: "16px 32px 16px 32px",
			fontSize: "16px",
			lineHeight: "24px",
			fontWeight: "700",
		},
		sm: {
			height: '100%',
			borderRadius: "8px",
			padding: "8px 16px 8px 16px",
			fontSize: "14px",
			lineHeight: "24px",
			fontWeight: "700",
		}
	},
	// defaultProps: {
	// 	variant: "gray",
	// 	size: "md",
	// 	colorScheme: "gray",
	// },
}