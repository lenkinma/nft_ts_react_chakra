import {gridCardProps} from "../types/interfaces";
import planet1 from "../assets/images/Planet1.png";
import planet2 from "../assets/images/Planet2.png";
import planet3 from "../assets/images/Planet3.png";
import planet4 from "../assets/images/Planet4.png";
import planet5 from "../assets/images/Planet5.png";
import planet6 from "../assets/images/Planet6.png";
import planet7 from "../assets/images/Planet7.png";
import planet8 from "../assets/images/Planet8.png";
import planet9 from "../assets/images/Planet9.png";


export const planets:gridCardProps[] = [
	{
		cardImage: planet1,
		series: '#078928',
		cardName: 'Mars 078928',
		ethPrice: 3.54,
		dollarPrice: 9829,
		cardType: 'planet',
		typeProp: {system: 'Milky Way Galaxy', coords: '-15, +09, +89'},
		label: 'New',
	},
	{
		cardImage: planet2,
		series: '#1122889',
		cardName: 'Star IRB1122889',
		ethPrice: 3.14,
		dollarPrice: 9413,
		cardType: 'planet',
		typeProp: {system: 'Solar system', coords: '-326, +77, +160'},
		label: 'Popular',
	},
	{
		cardImage: planet3,
		series: '#987654',
		cardName: 'Planet IBM987654',
		ethPrice: 2.62,
		dollarPrice: 4253,
		cardType: 'planet',
		typeProp: {system: 'Milky Way Galaxy', coords: '-42, -421, +10'},
		label: 'Featured',
	},
	{
		cardImage: planet4,
		series: '#421521',
		cardName: 'Star 521323',
		ethPrice: 1.52,
		dollarPrice: 122,
		cardType: 'planet',
		typeProp: {system: 'Milky Way Galaxy', coords: '+23, +12, -340'},
	},
	{
		cardImage: planet5,
		series: '#64361',
		cardName: 'Star 32133',
		ethPrice: 5.42,
		dollarPrice: 11332,
		cardType: 'planet',
		typeProp: {system: 'Solar system', coords: '+23, +12, -340'},
	},
	{
		cardImage: planet6,
		series: '#53132',
		cardName: 'Star 05320',
		ethPrice: 2.23,
		dollarPrice: 4214,
		cardType: 'planet',
		typeProp: {system: 'Solar system', coords: '-19, +42, +591'},
		label: 'New',
	},
	{
		cardImage: planet7,
		series: '#69391',
		cardName: 'Star 42151',
		ethPrice: 1.11,
		dollarPrice: 3221,
		cardType: 'planet',
		typeProp: {system: 'Milky Way Galaxy', coords: '+242, +12, -14'},
	},
	{
		cardImage: planet8,
		series: '#42512',
		cardName: 'Star 51241',
		ethPrice: 4.23,
		dollarPrice: 4215,
		cardType: 'planet',
		typeProp: {system: 'Milky Way Galaxy', coords: '+242, -42, +421'},
		label: 'Popular',
	},
	{
		cardImage: planet9,
		series: '#01828',
		cardName: 'Star 02399',
		ethPrice: 8.32,
		dollarPrice: 52198,
		cardType: 'planet',
		typeProp: {system: 'Solar system', coords: '+11, -22, -34'},
		label: 'Featured',
	}
]

