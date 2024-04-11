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
import {planets} from "../data/data";


function PlanetsList() {

	return (

		<Box pt={'65px'}>
			<SimpleGrid columns={3} spacingX={'34px'} spacingY={'40px'}>
				{planets.map(planet =>
					<GridCard cardImage={planet.cardImage} series={planet.series} cardName={planet.cardName}
					          ethPrice={planet.ethPrice} dollarPrice={planet.dollarPrice} cardType={planet.cardType}
					          typeProp={planet.typeProp} label={planet.label}/>
				)}
			</SimpleGrid>
		</Box>
	);
}

export default PlanetsList;