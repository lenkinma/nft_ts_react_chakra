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
import GridCard from "./gridCard";
import {planets} from "../data/data";
import {AnimatePresence, motion} from "framer-motion";

const gridAnimate = {
	initial: {

	}
}

function PlanetsList() {
	const GridMotion = motion(SimpleGrid)

	return (

		<Box pt={'65px'}>
			<GridMotion columns={3} spacingX={'34px'} spacingY={'40px'}  variants={gridAnimate}>
				{planets.map(planet =>
					<AnimatePresence>
						<GridCard cardImage={planet.cardImage} series={planet.series} cardName={planet.cardName}
						          ethPrice={planet.ethPrice} dollarPrice={planet.dollarPrice} cardType={planet.cardType}
						          typeProp={planet.typeProp} label={planet.label}/>
					</AnimatePresence>

				)}
			</GridMotion>
		</Box>
	);
}

export default PlanetsList;