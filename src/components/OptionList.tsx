import {
  Button,
  HStack,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaWind } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import { WiSunrise } from "react-icons/wi";


const OptionList = () => {
  return (
    <>
      <Heading fontSize="2xl" marginBottom={5}>
        Weather
      </Heading>

      <List>
        {[
          <WiSunrise  className="icon"/>,
          <TiWeatherPartlySunny  className="icon"/>,
          <FaWind  className="icon"/>,
          <SlSpeedometer  className="icon"/>,
          <FaThermometerThreeQuarters  className="icon"/>,
        ].map((icon, index) => (
          <ListItem key={index} paddingY="7px">
            <HStack boxSize={20}>{icon}</HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default OptionList