import {extendTheme} from "@chakra-ui/react";
import {ButtonStyles as Button} from "./components/buttonStyles"
import "@fontsource/archivo";
import "@fontsource/inter"
import customTextStyles from "./customTextStyles";

export const mainTheme = extendTheme(customTextStyles, {
	styles: {
		global: {
			body: {
				color: '#22252D',
				bg: '#FCFCF9',
			},
		},
	},
	colors: {
		brand: {
			100: '#E45F35',
			200: '#30B28C',
			300: '#FDC24F',
			400: '#1F3D8B',
			500: '#9F73E6',
			600: '#2D73FF',
		},
		neutral: {
			100: '#fff',
			200: '#FCFCF9',
			300: '#F7F7F0',
			400: '#E7E7E1',
			500: '#7F8596',
			600: '#494E5B',
			700: '#31343F',
			800: '#22252D',
			900: '#1F2128',
			1000: '#EBE3D9',
		}
	},
	fonts:{
		heading: `Archivo`,
		body: `Inter`,
		mono: `Inter`,
	},
	sizes: {
		container: {
			md: '1184px',
		},
	},
	components: {
		Button,
		Container: {
			variants: {
				default: {
					p: 0,
				}
			},
			defaultProps: {
				variant: "default",
				size: "md",
			},
		}
	},

})