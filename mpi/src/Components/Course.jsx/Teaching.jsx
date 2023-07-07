


import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Text, Flex, Icon } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";


export const Teaching = () => {
  return (
    <Box mt="20px" bg="#D7B369" fontWeight={600} pt="40px" pb="20px" h="70vh">
        <Heading color="#102A83" pb="50px">Department of Teaching</Heading>
        

<Box w="350px" pt="50px" pb="50px" borderRadius={"20px"} m="auto" bg="white">
{texts.map((text, index) => (
        <Flex key={index} alignItems="center">
          <Icon as={FaArrowRight} mr={2} />
          <Text>{text}</Text>
        </Flex>
      ))}
</Box>

    </Box>
  )
}


const texts = [
    "Master of Education (M.Ed.)",
    "Bachelor of Education (B.Ed.)",
    "Diploma in Elementary Education (D. El. Ed)",
    "Diploma in Physical Education (D.P. Ed.)"
    
  ];
