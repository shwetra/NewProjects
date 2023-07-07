



import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'

export const Diploma = () => {
  return (
    <Box bg="gray.100" p="40px" pt="100px">
        <SimpleGrid columns={[1,2,2,3]} w={{base:"100%",md:"80%",lg:"90%"}} m="auto" gap="20px"  >
            {data.map((e)=>{
                return(
                    <Box color={"black"}  bg="#D7B369" pt="10px" borderRadius={"20px"}  h="100px"><Heading pl="40px" textAlign={"start"} fontSize={{base:"18px",md:"18px",lg:"18px"}}>{e.text}</Heading>
                    <Text align={"start"} pl="40px">Duration : {e.duration}</Text>
                    <Text align={"start"} pl="40px">Diploma Duration : 2 Year</Text>
                    </Box>
                )
            })}
           
        </SimpleGrid>
</Box>
  )
}




const data = [
    {
      text: "Certificate in Dresser",
      duration: "6 Months",
    },
    {
      text: "Fireman",
      duration: "6 Months",
    },
    {
      text: "Sub Fire Officer",
      duration: "1 Year",
    },
    {
      text: "Diploma in Fire & Safety Management",
      duration: "1 Year",
    },
    {
      text: "Diploma in Yoga",
      duration: "1 Year",
    },
    {
      text: "Diploma in Computer Science",
      duration: "1 Year",
    },
    {
      text: "Mechanic (Refrigeration & AC)",
      duration: "1 Year",
    },
    {
      text: "Mechanic (Draughtsman)",
      duration: "1 Year",
    },
    {
      text: "Mechanical",
      duration: "1 Year",
    },
    {
      text: "Civil",
      duration: "1 Year",
    },
    {
      text: "Electrician",
      duration: "1 Year",
    },
    {
      text: "Fitter",
      duration: "1 Year",
    },
    {
      text: "Turner",
      duration: "1 Year",
    },
    {
      text: "Plumber",
      duration: "1 Year",
    },
    {
      text: "Welder (Gas & Electric)",
      duration: "1 Year",
    },
    {
      text: "Diploma in Fashion Design & Garment Making",
      duration: "1 Year",
    },
    {
      text: "Diploma in Fashion & Textile Design",
      duration: "1 Year",
    },
    {
      text: "Diploma in Interior Design",
      duration: "1 Year",
    },
  ];