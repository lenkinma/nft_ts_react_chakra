import React, {ReactComponentElement, useState} from 'react';
import {AbsoluteCenter, Box, Center, Flex, HStack, Icon, Image, Link, Stack, Text} from "@chakra-ui/react";
import joinOutCommunity from "../assets/images/joinOutCommunity.png";
import {ReactComponent as discordIcon} from "../assets/icons/discord.svg";
import {ReactComponent as twitterIcon} from "../assets/icons/twitter.svg";
import {ReactComponent as instagramIcon} from "../assets/icons/instagram.svg";
import {ReactComponent as telegramIcon} from "../assets/icons/telegram.svg";
import {ReactComponent as facebookIcon} from "../assets/icons/facebook.svg";

interface socialMediaLinkProps {
	url: string,
	icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

}

const SocialMediaLink = ({url, icon}:socialMediaLinkProps) => {
	return (
		<Link href={url} isExternal>
			<Flex w={'48px'} h={'48px'} bg={'neutral.100'}
			      justifyContent={'center'} alignItems={'center'} borderRadius={'56px'}
			      _hover={{transform: 'translateY(-3px)'}}
			      transition={'0.1s'}
			>
				<Icon as={icon} h={'17.2px'} w={'17.2px'}></Icon>
			</Flex>
		</Link>
	);
}

function SocialMedia() {
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e:any) => {

		setOffset({ x: e.clientX/window.innerWidth, y: e.clientY/window.innerHeight });
		console.log(offset.x)
	};

	const handleMouseLeave = () => {
		setOffset({ x: 0.5, y: 0.5 });
	};

	return (
		<Center mt={'125px'} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
			<Box
				position="relative"
				w={'1360px'}
				h="743px"
				overflow="hidden"
				borderRadius={'32px'}
			>
				<Flex position={'absolute'} mt={'96px'} zIndex={1} direction={'column'} alignItems={'center'}
				      left={'50%'} transform={'translateX(-50%)'}
				      color={'neutral.100'}
				>
					<Text textStyle={'h1'} mb={'16px'}>Join our community</Text>
					<Text textStyle={'body1'}>Iste animi consectetur dicta dolorem</Text>
					<HStack gap={'24px'} mt={'42px'}>
						<SocialMediaLink url={'https://discord.com'} icon={discordIcon}/>
						<SocialMediaLink url={'https://twitter.com'} icon={twitterIcon}/>
						<SocialMediaLink url={'https://instagram.com'} icon={instagramIcon}/>
						<SocialMediaLink url={'https://telegram.org'} icon={telegramIcon}/>
						<SocialMediaLink url={'https://facebook.com'} icon={facebookIcon}/>
					</HStack>
				</Flex>
				<Box
					position="absolute"
					backgroundImage={`url(${joinOutCommunity})`}
					backgroundPosition={'center'}
					backgroundRepeat={'no-repeat'}
					backgroundSize={'cover'}
					objectPosition="center"
					w="105%"
					h="105%"
					transform={`translate(-${offset.x*50}px, -${offset.y*50}px)`}
					transition={'transform 0.5s ease-out'}
				/>
			</Box>
		</Center>

	);
}

export default SocialMedia;