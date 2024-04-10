import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Heading, Button
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import {mainTheme} from "./styles/theme";
import Header from "./components/header";
import WelcomeContainer from "./components/welcomeContainer";
import MenuTabs from "./components/menuTabs";

export const App = () => (
  <ChakraProvider theme={mainTheme}>
    <Header />
    <WelcomeContainer/>
    <MenuTabs/>



    <Box  textAlign="center" fontSize="xl">
      <Heading >hero</Heading>
      testing
      <Text textStyle={'h1'} color={'brand.200'}>hero</Text>
      <Box textStyle={'hero'}>
        aaaa
        <Button variant={'primary'} size={'md'}>Button</Button>
        <Button variant={'secondary'} size={'sm'}>Play now</Button>
      </Box>

    </Box>
  </ChakraProvider>
)
