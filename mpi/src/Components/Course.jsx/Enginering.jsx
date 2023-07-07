import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Text, Flex, Icon } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";


export const Eangineering = () => {
  return (
    <Box mt="20px" bg="#D7B369" fontWeight={600} pt="40px" pb="20px">
        <Heading color="#102A83" pb="50px">Department of Eangineering</Heading>
        <SimpleGrid columns={[1,2,2,3]} w="90%" m="auto" gap="30px" >

        <Box>
<Heading
              as="h3"
              w="50%"
              borderBottom={"2px solid #f28524"}
              fontSize="xl"
              mb={4}
            >
              Diploma
            </Heading>
{text2.map((text, index) => (
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
    "Diploma in Civil Engineering",
  "  Diploma in Mechanical Engineering",
    "Diploma in Electrical Engineering",
   "Diploma in Electronics Engineering",
   "Diploma in Automobile Engineering",
   "Diploma In Computer Science"
  ];

  const text1 = [
   " B.Tech in Civil Engineering",
    "B.Tech in Mechanical Engineering",
   " B.Tech in Electrical Engineering",
   "B.Tech in Electronics Engineering",
   "B.Tech in Automobile Engineering",
   "B.Tech In Computer Science"
    ];

    const text2=[
        "M.Tech in Civil Engineering",
        "M.Tech in Mechanical Engineering",
        "M.Tech in Electrical Engineering",
       "M.Tech in Electronics Engineering",
       "M.Tech in Automobile Engineering",
      " M.Tech In Computer Science"
    ]