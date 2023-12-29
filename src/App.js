import './App.css';
import * as React from 'react'

import { ChakraProvider, Text, Box, Grid } from '@chakra-ui/react'

import FileForm from './components/FileForm';

// All here
function App() {
  return (
      <ChakraProvider>
        <Box className="App" m={10} padding={1}>
            <Text fontSize={'xx-large'} padding={'inherit'} fontWeight={'bold'} mt={50}>Welcome to Skripsi Fina Ralfi!</Text>
            <Text fontSize={'large'} mt={0.1} color={'gray'}>Upload an image to get an orthodontic diagnosis.</Text>

            <Grid autoFlow="column dense" mt={10}>
              <FileForm task={'Frontal'} endpoint='http://127.0.0.1:8000/predict-frontal/'/>
              <FileForm task={'Frontal-Smile'} endpoint='http://127.0.0.1:8000/predict-frontal-smile/'/>
              <FileForm task={'Sides'} endpoint='http://127.0.0.1:8000/predict-sides/'/>
            </Grid>

        </Box>
      </ChakraProvider>
  );
}

export default App;
