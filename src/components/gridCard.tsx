import React, {useEffect, useState} from 'react';
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Center,
	Divider,
	Flex,
	Icon,
	Image,
	Text
} from "@chakra-ui/react";
import SeriesLabel from "./seriesLabel";
import useColorWithOpacity from "../hooks/useColorWithOpacity";
import {ReactComponent as locationIcon} from "../assets/icons/location.svg";
import {ReactComponent as levelItemIcon} from "../assets/icons/levelItem.svg";
import {gridCardProps} from '../types/interfaces';
import {motion, useAnimation, useCycle} from "framer-motion";


const imageAnimate = {
	initial: {scale: 1},
	hover: {scale: 1.05, transition: {type: 'spring', stiffness: 100, damping: 5,}},
}
const cardAnimate = {
	initial: {y: 0, opacity: 0},
	hover: {y: -20, cursor: 'pointer'},
}
const choiseCardBGAnimate = {
	initial: {filter: "brightness(1)"},
	hover: {filter: "brightness(0.9)"}
}
const buttonCardAnimate = {
	initial: {opacity: '0'},
	hover: {opacity: '1', transition: {duration: 2, delay: 0.2}}
}

function GridCard({
	                  cardImage,
	                  series,
	                  cardName,
	                  ethPrice,
	                  dollarPrice,
	                  cardType,
	                  typeProp,
	                  label,
                  }: gridCardProps) {
	const [hoverEffect, setHoverEffect] = useCycle(false, true);
	const MotionImage = motion(Image);
	const MotionCard = motion(Card);
	const MotionButton = motion(Button);
	const MotionBox = motion(Box);


	function formatNumber(num: number): string {
		return Number(num).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
	}

	return (
		<MotionCard variant={'unstyled'} bg={'transparent'} w={'372px'} borderRadius={'16px'}
		            whileHover="hover"
			// onMouseEnter={() => setHoverEffect()}
			// onMouseLeave={() => setHoverEffect()}
			          initial='initial'
			          variants={cardAnimate}
			          whileInView={{opacity: 1}}

		>
			<CardHeader w={'372px'} h={'372px'} borderRadius={'16px'} bg={'neutral.1000'}
			            transition={'0.2s'}
			            display={'flex'}
			            justifyContent={'center'}
			            alignItems={'center'}
			            position={'relative'}
			            zIndex="1"
			>
				<MotionBox w="100%" h="100%" borderRadius={'16px'} position="absolute" top="0" left="0" bg={'neutral.1000'}
				           transition={'0.2s'}
				           zIndex="-1"
				           variants={choiseCardBGAnimate}
				/>
				<MotionButton position={'absolute'} zIndex={2} height={'70px'} transform="translate(-50%, -50%)"
				              left={'50%'} top={'50%'} variant={'primary'} variants={buttonCardAnimate}>
					Read more
				</MotionButton>

				{label === 'New' &&
					<Text position={'absolute'} right={'16px'} top={'16px'} textStyle={'base2'} px={'12px'} py={'4px'}
					      bg={'brand.100'} borderRadius={'6px'}>New</Text>}
				{label === 'Popular' &&
					<Text position={'absolute'} right={'16px'} top={'16px'} textStyle={'base2'} px={'12px'} py={'4px'}
					      bg={'brand.200'} borderRadius={'6px'}>Popular</Text>}
				{label === 'Featured' &&
					<Text position={'absolute'} right={'16px'} top={'16px'} textStyle={'base2'} px={'12px'} py={'4px'}
					      bg={'brand.500'} borderRadius={'6px'}>Featured</Text>}

				<MotionImage
					objectFit='cover'
					src={cardImage}
					alt='planet'
					variants={imageAnimate}


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
			<Divider orientation='horizontal' color={'neutral.400'}/>
			<CardFooter p={0} color={'neutral.600'} mt={'16px'}>
				<Icon as={cardType === 'planet' ? locationIcon : levelItemIcon} mr={'4px'}></Icon>
				{cardType === 'planet' ?
					<Text textStyle={'caption2'} color={'brand.200'}>{(typeProp as { system: string, coords: string }).system}
						{': '}
						<Box as={"span"} color={'neutral.500'}>
							{(typeProp as { system: string, coords: string }).coords}
						</Box>
					</Text>
					:
					<Text textStyle={'caption2'} color={'neutral.500'}>{'Level requirement'}
						{': '}
						<Box as={"span"} color={'brand.200'}>
							{cardType === 'item' && (typeProp as { level: number }).level}
						</Box>
					</Text>
				}
			</CardFooter>
		</MotionCard>

	);
}

export default GridCard;