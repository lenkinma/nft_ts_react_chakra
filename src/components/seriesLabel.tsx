import React from 'react';
import useColorWithOpacity from "../hooks/useColorWithOpacity";
import {Box, Text} from "@chakra-ui/react";

interface seriesProps {
	series: string,
	color: string,
}

function SeriesLabel({series, color}:seriesProps) {
	return (
		<Box bg={useColorWithOpacity(color, 0.25)}
		     display={'inline-block'} px={'6px'} py={'3px'} borderRadius={'6px'}
		>
			<Text textStyle={'caption2'} color={'neutral.800'}>{series}</Text>
		</Box>
	);
}

export default SeriesLabel;