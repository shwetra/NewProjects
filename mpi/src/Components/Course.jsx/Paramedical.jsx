


import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Text, Flex, Icon } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";


export const Paramedical = () => {
  return (
    <Box mt="20px" bg="#D7B369" fontWeight={600} pt="40px" pb="20px" h="100vh">
        <Heading color="#102A83" pb="50px">Department of Paramedical</Heading>
        

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
    "B.Sc. Medical Lab Technology",
    "B.Sc. Operation Theatre Technology",
   " B.Sc. Medical Radiation Imaging Technology",
   "B.Sc. Optometry",
  " B.Sc. Nutritian & Dietetics",
   "B.Sc. Hospitilaty & Hotel Administration",
   "B.Sc. Community Health Science",
   "Master of Public Health",
   "Diploma in Medical Lab Technician",
   "Diploma X Ray Technician",
   "Diploma In Operation Theater Assistance",
   "Diploma In Health Sanitary Inspector",
   "BPT (Bachelor of Physiotherapy)",
   "MPT (Master of Physiotherapy)"
    
  ];
