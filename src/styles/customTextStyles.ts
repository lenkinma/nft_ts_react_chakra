import { extendTheme } from "@chakra-ui/react";

const customTextStyles = {
	textStyles: {
		hero: {
			fontSize: "80px",
			lineHeight: "88px",
			fontWeight: "700",
			fontFamily: "'Archivo', sans-serif",
		},
		h1: {
			fontSize: "64px",
			lineHeight: "72px",
			fontWeight: "700",
			fontFamily: "'Archivo', sans-serif",
		},
		h2: {
			fontSize: "48px",
			lineHeight: "56px",
			fontWeight: "700",
			fontFamily: "'Archivo', sans-serif",
		},
		h3: {
			fontSize: "40px",
			lineHeight: "48px",
			fontWeight: "700",
			fontFamily: "'Archivo', sans-serif",
		},
		h4: {
			fontSize: "36px",
			lineHeight: "44px",
			fontWeight: "700",
			fontFamily: "'Archivo', sans-serif",
		},
		h5: {
			fontSize: "32px",
			lineHeight: "40px",
			fontWeight: "700",
			fontFamily: "'Archivo', sans-serif",
		},
		h6: {
			fontSize: "24px",
			lineHeight: "32px",
			fontWeight: "700",
			fontFamily: "'Archivo', sans-serif",
		},
		title: {
			fontSize: "20px",
			lineHeight: "28px",
			fontWeight: "700",
			fontFamily: "'Archivo', sans-serif",
		},
		body1: {
			fontSize: "24px",
			lineHeight: "36px",
			fontWeight: "500",
			fontFamily: "'Inter', sans-serif",
		},
		body2: {
			fontSize: "18px",
			lineHeight: "28px",
			fontWeight: "500",
			fontFamily: "'Inter', sans-serif",
		},
		base1: {
			fontSize: "16px",
			lineHeight: "24px",
			fontWeight: "700",
			fontFamily: "'Inter', sans-serif",
		},
		base1_2: {
			fontSize: "16px",
			lineHeight: "24px",
			fontWeight: "500",
			fontFamily: "'Inter', sans-serif",
		},
		base2: {
			fontSize: "14px",
			lineHeight: "24px",
			fontWeight: "700",
			fontFamily: "'Inter', sans-serif",
		},
		base2_2: {
			fontSize: "14px",
			lineHeight: "24px",
			fontWeight: "600",
			fontFamily: "'Inter', sans-serif",
		},
		caption1: {
			fontSize: "13px",
			lineHeight: "20px",
			fontWeight: "500",
			fontFamily: "'Inter', sans-serif",
		},
		caption2: {
			fontSize: "12px",
			lineHeight: "16px",
			fontWeight: "600",
			fontFamily: "'Inter', sans-serif",
		},
	},
};

const theme = extendTheme(customTextStyles);
export default theme;