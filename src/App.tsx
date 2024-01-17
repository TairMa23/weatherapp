import { Grid, GridItem, HStack, Image, List, ListItem, Flex, Text } from '@chakra-ui/react'
import './App.css'
import SearchInput from './components/SearchInput'
import useData from './hooks/useData';
import Navbar from './components/Navbar';
import { useState } from 'react';
import OptionList from './components/OptionList';
interface Props {
  onSearch: (searchPlace: string) => void;
}
export interface SearchQuery {
  searchLocation: string;
}
function App() {
  const currentHour = new Date().getHours();
  const [location, setLocation] = useState('Jerusalem');
  const weatherData = useData(location);


  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area='nav'>
      <Navbar onSearch={(searchLocation) => setLocation(searchLocation)} />
    </GridItem>

    <GridItem area='aside'>
      <OptionList />
    </GridItem>

    <GridItem area='main'>
      <HStack justifyContent={'space-between'} alignItems={'flex-start'} padding={10}>

        <List spacing={-5}>
          <ListItem>  <Text>{weatherData?.current?.temp_c}°{" "}
            {weatherData?.current?.condition?.text}</Text></ListItem>
          <ListItem>  <Image boxSize='230px' src={weatherData?.current?.condition?.icon} /></ListItem>
        </List>

        <List>
          <ListItem style={{ fontSize: '50px' }}>{weatherData?.location?.name}</ListItem>
          <ListItem>{weatherData?.location?.country}</ListItem>
          <ListItem>{weatherData?.current?.last_updated}</ListItem>
        </List>

      </HStack>
      {/* 
      <Grid templateColumns='repeat(6, 1fr)' gap={6}>
        {
          weatherData.forecast.forecastday[0].hour.slice(currentHour, currentHour + 6).map((hour) => (<>
            <GridItem w='100%' h='40' bg='blue.500' >
              {hour?.time.slice(10, 17)}   <br />
              {<Image boxSize='80px' src={hour?.condition?.icon} />}  <br />
              {hour?.condition?.text}

            </GridItem>
          </>
          ))
        }
      </Grid> */}


      {/* <Grid templateColumns='repeat(7, 1fr)' gap={6}>
          {
            weatherData.forecast.forecastday.map((day) => (<>
              <GridItem w='100%' h='40' bg='blue.500' >{day.date.slice(8, 10)}.{day.date.slice(5, 7)}
                <br />
                {day.day.maxtemp_c}°
                {<img src={day?.day?.condition?.icon} />}
                {day?.day?.condition?.text}
              </GridItem>
            </>
            ))
          }
        </Grid> */}



    </GridItem>
  </Grid>


}

export default App
