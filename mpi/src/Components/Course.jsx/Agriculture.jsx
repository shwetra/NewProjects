

import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Text, Flex, Icon } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";


export const Agriculture = () => {
  return (
    <Box mt="20px" bg="#D7B369" fontWeight={600} pt="40px" pb="20px" h="70vh">
        <Heading color="#102A83" pb="50px">Department of Agriculture</Heading>
        

<Box w="300px" p="50px" borderRadius={"20px"} m="auto" bg="white">
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
    "Diploma in Agriculture",
    "B.Sc in Agriculture",
    "M.Sc in Agriculture"
    
  ];
