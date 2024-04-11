export interface gridCardProps {
	cardImage: string,
	series: string,
	cardName: string,
	ethPrice: number,
	dollarPrice: number,
	cardType: 'planet' | 'item',
	typeProp: {system: string, coords: string} | {level: number},
	label?: 'Featured' | 'New' | 'Popular',
}