import React from 'react';
import {Box, Button, Container, Flex, HStack, Image, Text} from "@chakra-ui/react";
import totalSalesPic from "../assets/images/total_sales_pic.png";
import totalVolumesPic from "../assets/images/total_volumes_pic.png";
import CharacterSoldPic from "../assets/images/character_sold.png";
import welcomeBlockPicRun from "../assets/images/welcome_block_pic_run.png";

function WelcomeContainer() {
	return (
		<Box bg={'neutral.300'} pt={'120px'} pb={'125px'} position={'relative'} >
			<Image src={welcomeBlockPicRun} position={'absolute'} right={'0'} top={'3%'} objectFit='cover'></Image>
			<Container maxW='container.md' >
				<Box maxW={'481px'} >
					<Text textStyle={'h1'}>
						<Box as="span" color="brand.500">2,048</Box> legendary is ready to join the clash.
					</Text>
					<Text textStyle={'h6'} color={'neutral.500'} mt={'20px'}>Play-to-Earn NFT Marketplace</Text>
					<Button variant={'primary'} size={'md'} mt={'40px'}>Explore now</Button>
				</Box>

				<HStack mt={'200px'} >
					{/*1 card*/}
					<Box pr={'68px'}>
						<Flex py={'26px'} alignItems={'center'} width={'304px'}>
							<Image src={totalSalesPic} objectFit='cover'></Image>
							<Box ml={'20px'}>
								<Text mb={'4px'} textStyle={'base1'} color={'neutral.500'}>Total sales</Text>
								<Text textStyle={'h3'} color={'neutral.800'}>16,789</Text>
							</Box>
						</Flex>
					</Box>
					{/*2 card*/}
					<Box borderX={'1px solid'} borderColor={'neutral.400'} px={'68px'}>
						<Flex py={'26px'} alignItems={'center'} width={'304px'}>
							<Image src={totalVolumesPic} objectFit='cover'></Image>
							<Box ml={'20px'}>
								<Text mb={'4px'} textStyle={'base1'} color={'neutral.500'}>Total volumes</Text>
								<Text textStyle={'h3'} color={'neutral.800'}>300.89
									<Box as="span" ml={'4px'} textStyle={'title'} color="neutral.500">$833,722</Box>
								</Text>
							</Box>
						</Flex>
					</Box>
					{/*3 card*/}
					<Box  paddingLeft={'68px'}>
						<Flex py={'26px'} alignItems={'center'} width={'304px'}>
							<Image src={CharacterSoldPic} objectFit='cover'></Image>
							<Box marginRight={'20px'}>
								<Text marginBottom={'4px'} textStyle={'base1'} color={'neutral.500'}>Character sold</Text>
								<Text textStyle={'h3'} color={'neutral.800'}>8,321</Text>
							</Box>
						</Flex>
					</Box>

				</HStack>

			</Container>
		</Box>
	);
}

export default WelcomeContainer;