import data from './data/data';
import { Container, Heading } from '@chakra-ui/react';
import SingleQuestion from './components/SingleQuestion';
import './App.css';

function App() {
  return (
    <Container maxW='3xl'>
      <Heading color='teal' align='center' my='30px'>Question & Answers</Heading>
        {
          data.map( question => {
            return (
              <SingleQuestion question={ question } />
            )
          })
        }
    </Container>
  );
}

export default App;
