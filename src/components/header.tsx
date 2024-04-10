import React from 'react';
import {Box, Button, Center, Flex, Image} from "@chakra-ui/react";
import {ReactComponent as BurgerMenuIcon} from "../assets/icons/burger_1.svg";
import AstroClashLogo from "../assets/images/astroclash_logo.png";

function Header() {
	return (
		<Box bg={'neutral.300'}>
			<Flex justifyContent={'space-between'} alignItems={'center'} minHeight={'88px'} paddingX={'40px'} position="relative">
				<BurgerMenuIcon/>
				<Image src={AstroClashLogo} position="absolute" left="50%" transform="translateX(-50%)" />
				<Button variant={'secondary'} size={'sm'}>Play now</Button>
			</Flex>
		</Box>
	);
}

export default Header;