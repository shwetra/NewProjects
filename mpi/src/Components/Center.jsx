import {  Image, SimpleGrid } from '@chakra-ui/react'
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import React from 'react'
import { FaUser } from 'react-icons/fa';

export const Center = () => {
  return (
    <Box>
        <Box w="100%" >
            <Image src='https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595849.jpg?w=1480&t=st=1690562723~exp=1690563323~hmac=9037acdd3ee552d97c09921419998a4593074c62dbca4482ef1c276293cdd063'/>
        </Box>

<SimpleGrid columns={[1,2,3]} m="auto"p="10px" mt="100px" >
        <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
    >
      <Heading as="h2" size="lg" mb="4">
        Delhi NCR
      </Heading>

      <Flex align="start" mb="2">
        <Icon as={MdLocationOn} boxSize="5" mr="2" />
        <Text align={"start"}>19th Floor, Berger Tower, Sector 16B, Noida, Uttar Pradesh 201301</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdPhone} boxSize="5" mr="2" />
        <Text>01169296594</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdEmail} boxSize="5" mr="2" />
        <Text>info@mpieducation.com</Text>
      </Flex>
    </Box>


    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
    >
      <Heading as="h2" size="lg" mb="4">
        Ranchi
      </Heading>

      <Flex align="center" mb="2">
        <Icon as={FaUser} boxSize="5" mr="2" />
        <Text>C/O Mr. Vikram Singh</Text>
      </Flex>

      <Flex align="start" mb="2">
        <Icon as={MdLocationOn} boxSize="5" mr="2" />
        <Text align={"start"}> 2nd Floor, Road No. 1, Ashok Nagar, Ranchi, Jharkhand</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdPhone} boxSize="5" mr="2" />
        <Text>9835641408</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdEmail} boxSize="5" mr="2" />
        <Text>sambhavi@mpieducation.com</Text>
      </Flex>
    </Box>



    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
    >
      <Heading as="h2" size="lg" mb="4">
      Bangaluru
      </Heading>

      <Flex align="center" mb="2">
        <Icon as={FaUser} boxSize="5" mr="2" />
        <Text>C/O Mr. Swarup Kashyap</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdLocationOn} boxSize="5" mr="2" />
        <Text>325, Manjunath Nagar, Bengaluru, Karnataka</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdPhone} boxSize="5" mr="2" />
        <Text>7676603838</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdEmail} boxSize="5" mr="2" />
        <Text>kashyap@mpieducation.com</Text>
      </Flex>
    </Box>
    </SimpleGrid>


    </Box>
  )
}
