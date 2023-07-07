import {
    Box,
    Flex,
    Heading,
    Text,
    UnorderedList,
    ListItem,
    IconButton,
    SimpleGrid,
  } from "@chakra-ui/react";
  import {
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
    FaAngleRight,
  } from "react-icons/fa";
  
  function Footer() {
    return (
      <Box as="footer" pt="80px" bg="white">  
        <SimpleGrid columns={[1, 2, 3]} w="90%" m="auto">
        <Box mx="auto" px={4} textAlign={"start"}>
            <Heading
              as="h3"
              w="50%"
              borderBottom={"2px solid #f28524"}
              fontSize="xl"
              mb={4}
            >
              MPI Education
            </Heading>
  
           
            <Text mt="10px" fontSize={"15"} fontWeight={600} align={"justify"}>
            Make your career in education industry Did you know that India has one of the largest networks of higher education systems in the world? It boasts approximately 45,000-degree colleges, over 1,000 universities, and around 1,500 top institutes. Additionally, India has more than 450 medical colleges, and approximately 70,000 doctors graduate from these institutions every year.
            </Text>
          </Box>



          <Box px={4} textAlign={"start"}>
            <Heading
              as="h3"
              w="50%"
              borderBottom={"2px solid #f28524"}
              fontSize="xl"
              mb={4}
            >
              Useful Links
            </Heading>
            <UnorderedList listStyleType="none" pl={0}>
              <Flex>
                <Text color={"gray"} mt="4px">
                  {<FaAngleRight />}
                </Text>
                <ListItem>About us</ListItem>
              </Flex>
              <Flex>
                <Text color={"gray"} mt="4px">
                  {<FaAngleRight />}
                </Text>
                <ListItem>Ph.D</ListItem>
              </Flex>
              <Flex>
                <Text color={"gray"} mt="4px">
                  {<FaAngleRight />}
                </Text>
                <ListItem>MBBS</ListItem>
              </Flex>
              <Flex>
                <Text color={"gray"} mt="4px">
                  {<FaAngleRight />}
                </Text>
                <ListItem>BALLB & LLB</ListItem>
              </Flex>
              <Flex>
                <Text color={"gray"} mt="4px">
                  {<FaAngleRight />}
                </Text>
                <ListItem>Franchisee Proposal</ListItem>
              </Flex>
              <Flex>
                <Text color={"gray"} mt="4px">
                  {<FaAngleRight />}
                </Text>
                <ListItem>News & Events</ListItem>
              </Flex>
            </UnorderedList>
          </Box>


          <Box px={4} textAlign={"start"}>
            <Heading
              w="50%"
              borderBottom={"2px solid #f28524"}
              as="h3"
            
              fontSize="xl"
              mb={4}
            >
              Get In Touch
            </Heading>
            <Text>Address: 514 S. Magnolia St. Orlando, FL 32806, USA</Text>
            <Text>Phone: +011-69296594</Text>
            <Text>Email: info.mpieducation@gmail.com</Text>
            
            <Flex mt={"50px"} >
              <IconButton
                as="a"
                href="https://www.facebook.com"
                target="_blank"
                bg="#f28524"
                aria-label="Facebook"
                icon={<FaFacebook />}
                size="md"
                colorScheme="blue"
                mr={2}
              />
              <IconButton
                as="a"
                href="https://www.youtube.com"
                target="_blank"
                bg="#f28524"
                aria-label="YouTube"
                icon={<FaYoutube />}
                size="md"
                colorScheme="red"
                mr={2}
              />
              <IconButton
                as="a"
                bg="#f28524"
                href="https://www.twitter.com"
                target="_blank"
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="md"
                colorScheme="twitter"
                mr={2}
              />
              <IconButton
                as="a"
                href="https://www.linkedin.com"
                bg="#f28524"
                target="_blank"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                size="md"
                colorScheme="linkedin"
              />
            </Flex>
          </Box>
         
  
         
        </SimpleGrid>
  
        <Box w="100%" m="auto" borderTop={"1px solid black"} mt="10px" h="50px" bg="gray.100">
          <Text fontWeight={"600"}pt="10px" align={"center"}>© Copyright 2023 Saru All rights reserved.</Text>
        </Box>
      </Box>
    );
  }
  
  export default Footer;
  