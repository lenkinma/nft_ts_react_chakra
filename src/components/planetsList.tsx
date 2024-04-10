import React from 'react';
import {
	Box,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Center,
	Divider,
	Flex, Icon,
	SimpleGrid,
	Spacer,
	Text,
	Image,
    AbsoluteCenter
} from "@chakra-ui/react";
import useColorWithOpacity from "../hooks/useColorWithOpacity";
import {ReactComponent as locationIcon} from "../assets/icons/location.svg";
import SeriesLabel from "./seriesLabel";
import planet1 from "../assets/images/Planet1.png";
import GridCard from "./gridCard";

function PlanetsList() {

	return (

		<Box pt={'65px'}>
			<SimpleGrid columns={3} spacingX={'34px'} spacingY={'40px'} >
				<GridCard cardImage={planet1} series={'#1122889'} cardName={'Mars 078928'} ethPrice={3.54} dollarPrice={1231} cardType={'planet'} typeProp={{system: 'Milky Way Galaxy', coords: '-326, +77, +160'}}/>
				<GridCard cardImage={planet1} series={'#1122889'} cardName={'adsasd'} ethPrice={4.23} dollarPrice={312521} cardType={'item'} typeProp={{level: 5}}/>

			</SimpleGrid>
		</Box>
	);
}

export default PlanetsList;