import { Grid, GridItem, HStack, List, ListItem, Show, Text } from '@chakra-ui/react'
import './App.css'
import SearchInput from './components/SearchInput'
import useData from './hooks/useData';
import Navbar from './components/Navbar';
import { useState } from 'react';
interface Props {
  onSearch: (searchPlace: string) => void;
}
export interface SearchQuery {
  searchText: string;
}
function App() {
  const [location, setLocation] = useState('Jerusalem');
  const weatherData = useData(location);
  console.log("weatherData", weatherData)
  const [weatherQuery, setWeatherQuery] = useState<SearchQuery>({} as SearchQuery);
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area='nav'>
      <Navbar onSearch={(searchText) => setWeatherQuery({ ...weatherQuery, searchText })} />
    </GridItem>

    <GridItem area='aside'>  </GridItem>

    <GridItem area='main'>
      <List>
        <ListItem>{weatherData?.location?.name}</ListItem>
        <ListItem>{weatherData?.location?.country}</ListItem>
        <ListItem>{weatherData?.location?.tz_id}</ListItem>
        <ListItem>{weatherData?.current?.temp_c}°</ListItem>
        <ListItem>{weatherData?.current?.condition?.text}<img src={weatherData?.current?.condition?.icon} /></ListItem>


        <Grid templateColumns='repeat(7, 1fr)' gap={6}>
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
        </Grid>


      </List>
    </GridItem>
  </Grid>


}

export default App
