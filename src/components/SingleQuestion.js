import { useState } from 'react';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Heading, Flex, Box, Text, Button } from '@chakra-ui/react';

const SingleQuestion = ({ question }) => {
    const [ showInfo, setShowInfo ] = useState(null);

    const toggleHandler = (id) => {
      if(showInfo === id){
        return setShowInfo(null)
       }
      setShowInfo(id);
    };

    return (
        <Box boxShadow='md' p='6' rounded='md' key={ question.id }>
            <Flex alignItems='center' justifyContent='space-between'>
                <Heading as='h5' fontSize='16px'>
                    {question.title}
                </Heading>
                <Button colorScheme='teal' variant='link' fontSize='24px' onClick={ () => toggleHandler(question.id) }>
                    {showInfo === question.id ? <FaAngleUp /> : <FaAngleDown />}
                </Button>
            </Flex>
            <Text className={ showInfo === question.id ? "info show" : "info" }>
                { question.info }
            </Text>
        </Box>
    )
}

export default SingleQuestion;