import { useToken } from '@chakra-ui/react';

const useColorWithOpacity = (colorName: string, opacityValue: number): string => {
	const [color] = useToken('colors', [colorName]);

	const rgb = parseInt(color.slice(1), 16);
	const r = (rgb >> 16) & 255;
	const g = (rgb >> 8) & 255;
	const b = rgb & 255;

	return `rgba(${r}, ${g}, ${b}, ${opacityValue})`;
};

export default useColorWithOpacity;
