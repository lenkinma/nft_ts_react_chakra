import {
	Box,
	Container,
	Flex,
	Tab,
	TabIndicator,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Image,
	Text,
	InputGroup, InputLeftElement, Input, Icon
} from '@chakra-ui/react';
import React from 'react';
import charactersIcon from "../assets/images/tabs_characters_icon.png";
import planetsIcon from "../assets/images/tabs_planets_icon.png";
import itemsIcon from "../assets/images/tabs_items_icon.png";
import bundlesIcon from "../assets/images/tabs_bundles_icon.png";
import {ReactComponent as SearchIcon} from "../assets/icons/search.svg";
import PlanetsList from "./planetsList";
import useColorWithOpacity from "../hooks/useColorWithOpacity";

interface tabsProps {
	image: string,
	title: string,
}

const HotTab = ({image, title}:tabsProps) => {
	return (
		<Tab pl={'32px'} pb={'34px'} pr={'64px'}
		     color={'neutral.500'}
		     _selected={{ color: 'neutral.600', bg: 'transparent' }}
		     _focus={{ boxShadow: 'none' }}
		>
			<Flex alignItems={'center'} >
				<Image src={image} mr={'12px'} />
				<Text textStyle={'base2'} >{title}</Text>
			</Flex>
		</Tab>
	);
}

function MenuTabs() {
	return (
		<Box pt={'64px'} position={'relative'}>
			<Box h={'1px'} w={'100%'} bg={'neutral.400'} position={'absolute'} top={'141px'}></Box>
			<Container maxW='container.md'>
					<Tabs position={'relative'}>
						<Flex justifyContent={'end'} >
							<Box position={'absolute'} left={'-32px'} >
								<TabList  p={0} >
									<HotTab image={charactersIcon} title={'Characters'}/>
									<HotTab image={planetsIcon} title={'Planets'}/>
									<HotTab image={itemsIcon} title={'Items'}/>
									<HotTab image={bundlesIcon} title={'Bundles'}/>
								</TabList>
								<TabIndicator
									height="2px"
									bg="brand.500"
									borderRadius="2px"
								/>
							</Box>

							<Box >
								<InputGroup
									width={'336px'}>
									<InputLeftElement  pointerEvents='none' p={0} m={0} height={'auto'} pt={'12px'}>
										<Icon as={SearchIcon} color="neutral.600" w={'24px'} h={'24px'}/>
									</InputLeftElement>
									<Input borderRadius={'12px'} color={'neutral.800'} placeholder='Search character, planet, item...'
									       _placeholder={{ color: 'neutral.600' }}
									       _hover={{bg:'transparent', pl:'39px', border: '2px solid', borderColor: 'neutral.400', _placeholder: { color: 'neutral.500' }}}
									       _focus={{bg:'transparent', pl:'39px', border: '2px solid', borderColor: 'brand.500', _placeholder: { color: useColorWithOpacity('neutral.500', 0.55) }}}
									       h="48px" pl={'40px'} textStyle={'base2'} fontSize={'14px'} bg={'neutral.400'}
										     focusBorderColor={'transparent'}
									/>
								</InputGroup>
							</Box>

						</Flex>


						<TabPanels mt={'76px'} >
							<TabPanel p={0}>
								<p>one!</p>
							</TabPanel>
							<TabPanel p={0}>
								<PlanetsList/>
							</TabPanel>
							<TabPanel p={0}>
								<p>three!</p>
							</TabPanel>
							<TabPanel p={0}>
								<p>four!</p>
							</TabPanel>
						</TabPanels>
					</Tabs>







			</Container>

		</Box>
	);
}

export default MenuTabs;