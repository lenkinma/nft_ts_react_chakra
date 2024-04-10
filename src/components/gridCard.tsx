import React from 'react';
import {Box, Card, CardBody, CardFooter, CardHeader, Center, Divider, Flex, Icon, Image, Text} from "@chakra-ui/react";
import SeriesLabel from "./seriesLabel";
import useColorWithOpacity from "../hooks/useColorWithOpacity";
import {ReactComponent as locationIcon} from "../assets/icons/location.svg";
import {ReactComponent as levelItemIcon} from "../assets/icons/levelItem.svg";


interface gridCardProps {
	cardImage: string,
	series: string,
	cardName: string,
	ethPrice: number,
	dollarPrice: number,
	cardType: 'planet' | 'item',
	typeProp: {system: string, coords: string} | {level: number}
}



function GridCard({cardImage, series, cardName, ethPrice, dollarPrice, cardType, typeProp}:gridCardProps) {

	function formatNumber(num:number):string {
		return Number(num).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
	}

	return (
		<Card variant={'unstyled'} bg={'transparent'} w={'372px'}>
			<CardHeader w={'372px'} h={'372px'} borderRadius={'16px'} bg={'neutral.1000'}
			            display={'flex'}
			            justifyContent={'center'}
			            alignItems={'center'}
			>
				<Image
					objectFit='cover'
					src={cardImage}
					alt='planet'
				/>
			</CardHeader>
			<CardBody p={0} mt={'20px'} pb={'16px'}>
				<Flex alignItems="start" justifyContent={'space-between'}>
					<Flex height={'60px'} direction={'column'} justifyContent={'space-between'}>
						<Box>
							<SeriesLabel series={series} color={'brand.500'}/>
						</Box>
						<Box mt={'4px'}>
							<Text textStyle={'title'} color={'neutral.800'}>{cardName}</Text>
						</Box>
					</Flex>

					<Flex height={'60px'} direction={'column'} justifyContent={'space-between'}>
						<Box px={'8px'} py={'2px'} border={'2px solid'} borderRadius={'8px'}
						     borderColor={useColorWithOpacity('brand.200', 0.25)}
						>
							<Text textStyle={'base2'} color={'brand.200'}>{ethPrice}{' ETH'}</Text>
						</Box>
						<Center pb={'4px'}>
							<Text textStyle={'caption2'} color={'neutral.600'}>$ {formatNumber(dollarPrice)}</Text>
						</Center>
					</Flex>

				</Flex>

			</CardBody>
			<Divider orientation='horizontal' color={'neutral.400'} />
			<CardFooter p={0} color={'neutral.600'} mt={'16px'}>
				<Icon as={cardType === 'planet' ? locationIcon : levelItemIcon} mr={'4px'}></Icon>
				{cardType === 'planet' ?
					<Text textStyle={'caption2'} color={'brand.200'}>{(typeProp as {system: string, coords: string}).system}
						{': '}
						<Box as={"span"} color={'neutral.500'}>
							{(typeProp as {system: string, coords: string}).coords}
						</Box>
					</Text>
					:
					<Text textStyle={'caption2'} color={'neutral.500'}>{'Level requirement'}
						{': '}
						<Box as={"span"} color={'brand.200'}>
							{cardType === 'item' && (typeProp as {level: number}).level}
						</Box>
					</Text>
				}
			</CardFooter>
		</Card>
	);
}

export default GridCard;