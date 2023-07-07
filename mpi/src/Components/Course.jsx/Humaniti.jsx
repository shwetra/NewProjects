import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Text, Flex, Icon } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";


export const Humaniti = () => {
  return (
    <Box mt="20px" bg="#D7B369" fontWeight={600} pt="40px" pb="20px" h="100vh">
        <Heading color="#102A83" pb="50px">Department of Humanities</Heading>
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
        </SimpleGrid>
    </Box>
  )
}


const texts = [
    "Bachelor of Arts (Specialisation)",
    "Bachelor of Arts (Hono.)",
    "Bachelor of Social Work (BSW)",
    "Bachelor of Arts (Yoga)",
    "B.A. Education",
    "Bachelor of Fine Art / Performing Art / Visual Art",
    "B.Lib",
    "B.P.E.S.",
    "B.S.W."
  ];

  const text1 = [
    
     "Master of Arts (Yoga)",
     "M.Sc. (Yoga)",
   
     "M.Sc. in Environmental Science",
    
     "Master of Arts",
   
     "Master of Social Work (MSW)",
   
     "M.Sc. (Home Science)",
   
     "Master of Library Science (M. Lib)",
   
     "Master of Fine Art",
     "M.LIB",
   
     "M.P.E.S",
    
     "M.S.W.",
    
    ];