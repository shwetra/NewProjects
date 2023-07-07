import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Text, Flex, Icon } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";


export const Computer = () => {
  return (
    <Box mt="20px" bg="#D7B369" fontWeight={600} pt="40px" pb="20px" h="50vh">
        <Heading color="#102A83" pb="50px">Department of Computer application</Heading>
        <SimpleGrid columns={[1,2,2]} w="90%" m="auto" >

<Box>
<Heading
              as="h3"
              w="50%"
              borderBottom={"2px solid #f28524"}
              fontSize="xl"
              mb={4}
            >
              Graduation
            </Heading>
{texts.map((text, index) => (
        <Flex key={index} alignItems="center">
          <Icon as={FaArrowRight} mr={2} />
          <Text>{text}</Text>
        </Flex>
      ))}
</Box>


<Box>
<Heading
              as="h3"
              w="50%"
              borderBottom={"2px solid #f28524"}
              fontSize="xl"
              mb={4}
            >
              Post Graduation
            </Heading>
{text1.map((text, index) => (
        <Flex key={index} alignItems="center">
          <Icon as={FaArrowRight} mr={2} />
          <Text>{text}</Text>
        </Flex>
      ))}
</Box>
<Box></Box>
        </SimpleGrid>
    </Box>
  )
}


const texts = [
    "Bachelor of Computer Application (BCA)"
  ];

  const text1 = [
   "   Master of Computer Application ( MCA )"
    ];