import { Box, Flex, Heading, Icon, Image, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from './Slider'
import Navbar from './Navbar'
import {AiFillClockCircle}from "react-icons/ai"
import { Link } from 'react-router-dom'
import { BsPlayFill } from "react-icons/bs";


export const Home = () => {
  return (
    <Box mt={{base:"30px",md:"50px"}}>
        
<Slider/>

<Box bg="gray.100" p="40px">
        <SimpleGrid columns={[1,2,2,3]} w={{base:"100%",md:"80%",lg:"90%"}} m="auto" gap="20px"  >
            <Box  bg="#1CB098" pt="17px" borderRadius={"20px"}  h="100px"><Heading fontSize={{base:"20px",md:"22px",lg:"26px"}}>Learn Anything.</Heading>
                <Text>Solid understanding of math & More</Text></Box>
            <Box  bg="#1CB098" pt="17px" borderRadius={"20px"}  h="100px"><Heading fontSize={{base:"20px",md:"22px",lg:"26px"}}>Trusted Content</Heading>
            <Text>Solid understanding of math & More</Text></Box>
            <Box  bg="#1CB098" pt="17px" borderRadius={"20px"}  h="100px" ><Heading fontSize={{base:"20px",md:"22px",lg:"26px"}}>Personalized Learning</Heading>
            <Text>Solid understanding of math & More</Text></Box>
        </SimpleGrid>
</Box>



<Box w="100%" textAlign={"justify"} >
    <Flex direction={{base:"column",md:"column",lg:"row"}} >
        <Box w={{base:"90%",md:"90%",lg:"50%"}}> <Image ml="30px" src="https://github.com/shwetra/assa/assets/104376252/5bbe02c4-243b-407d-8206-ff2d25bdec0d" alt="Logo"  /></Box>
        <Box w={{base:"90%",md:"90%",lg:"50%"}}  m="auto">
        <Box w={{base:"100%",md:"100%",lg:"90%"}}>
        <Heading
              as="h3"
              w="50%"
              borderBottom={"2px solid #f28524"}
              fontSize="28px"
              mb={4}
            >
              About  MPI
            </Heading>
            <Text>We are an education and placement consultant. We are into this industry since 2011. Currently we have 4 branches in India and have official consultant almost every state. We provide admission assistance or guidance for Traditional, Technical, Law, Pharmacy, Computer Science, Marketing Courses and we have professional Counselor for getting admission in MBBS & P.HD in Top Colleges or Universities of India.</Text>
        </Box>
        <Flex direction={{base:"column",md:"column",lg:"row"}} gap="30px" mt="20px">
            <Text w={{base:"100%",md:"100%",lg:"45%"}}>We have Universities that offer online courses for working professionals and those who cannot complete their studies for any reason. We have a team of professionals who help with the guidance and support that you need throughout the completion of your course till the end.</Text>
            <Text w={{base:"100%",md:"100%",lg:"45%"}}>We believe that education is an investment in yourself, your career and society at large. We are committed to helping you realize your full potential by providing the right kind of guidance and support throughout the duration of your training program</Text>
        </Flex>
        </Box>
    </Flex>
</Box>





{/* take the next step toward */}


<Box bg="#FDF8F4" pt="100px" pb="100px" >
<Flex direction={{base:"column",md:"column",lg:"row"}} justifyContent={"center"} w={{base:"95%",lg:"80%"}} m="auto"  >
<Box  w={{base:"90%",md:"90%",lg:"40%"}} pb="50px"  m={{base:"auto"}} >
    <Heading fontStyle={"italic"} textAlign={"start"}>Take the next step toward your personal and professional goals with Upstudy</Heading>
    <Text mt="60px" color={"skyblue"} textDecoration={"underline"} fontWeight={600}>Start Learning Now </Text>
</Box>
<Flex w={{base:"100%",md:"80%",lg:"60%"}} direction={{base:"column",md:"row",lg:"row"}}  m={"auto"} >
<Box m="auto">
<Box bg={"white"} h="250px" w="250px" borderRadius={"20px"} border={"2px solid black"} pt="70px">
    <Heading>24k+</Heading>
<Text>Total Students Enrolled</Text>
</Box>
<Box bg={"white"} h="250px" w="250px" borderRadius={"20px"} mt="20px" border={"2px solid black"} pt="70px">
<Heading>3.5M</Heading>
<Text>Video Lesson</Text>
</Box>
</Box>
<Box m="auto" mt="20px">

<Box bg={"white"} borderRadius={"20px"} h="250px" w="250px" border={"2px solid black"} pt="70px">
<Heading>24k+</Heading>
<Text>Daily Live Classes</Text>
</Box>
<Box bg={"white"} borderRadius={"20px"} h="250px" w="250px" mt="20px" border={"2px solid black"}pt="70px">
<Heading>75M+</Heading>
<Text>Total Exam Categories</Text>
</Box>
</Box>
</Flex>
</Flex>
</Box>







{/* course  */}


<Box bg="#EFF5FF" pt="40px">
    <Flex justifyContent={"center"}  pb="40px">
<Heading
              as="h3"
              
              w={{base:"80%",lg:"80%"}}
              align="center"
            
              borderBottom={"2px solid #f28524"}
              fontSize="36px"
              mb={4}
            >
              Most Popular Courses
            </Heading>
            </Flex>

<SimpleGrid  columns={[1,1,2,3]} w={{base:"90%",md:"90%" ,lg:"80%"}} m="auto" gap="30px" pb="100px">
    <Link to="/php">
<Box bg={"white"} m="auto" cursor={"pointer"} borderWidth="1px" borderRadius="lg"  boxShadow="md" w={{base:"330px",md:"350px"}}  h="500px">
      <Image h="250px" w="100%" src="https://github.com/shwetra/assa/assets/104376252/77763beb-6e61-437d-ba8d-f6498f41a323" alt="Course Image" objectFit="cover"  />
      <Flex justifyContent="space-between" alignItems="center" p={4}>
      <Text border={"1px solid green"} bg="green.100" p="3px" pl="10px" pr="10px" fontWeight={600} fontSize="sm" color="gray.500">Beginner</Text>
       <Flex>
        <Text ml="20px"  mt="2px">{<AiFillClockCircle/>}</Text>
        <Text fontSize="sm" color="gray.500">2h 30m</Text>
       </Flex>      
      </Flex>
      <Box>
        <Text align={"start"} ml="10px"  borderBottom={"2px solid #f28524"} fontSize="20px"   fontWeight="bold" mb={2}>Learn PHP Programming From Scratch</Text>

        <Flex w="90%" m="auto" justifyContent={"space-between"}>
        <Text fontSize="xl" fontWeight={600} fontStyle={"italic"} color={"#f28524"}  borderBottom={"2px solid #f28524"} mb={2}>By Daziy Millar</Text>
        <Flex mt="8px">
            <Image h="20px" mt="3px" src='https://github.com/shwetra/assa/assets/104376252/405c4f18-07c8-48e6-93b7-f4e2edd17f1e' alt='rating image'/>
            <Text fontSize="sm" color="gray.500">(4.5)</Text>
        </Flex>

        
        </Flex >
        <Flex mr="20px" justifyContent={"end"} >
        <Flex  w="30%" borderBottom={"2px solid #f28524"}>
            <Text fontWeight={700} mr="10px">Price</Text>
            <Text fontWeight={700} mr="10px"> : </Text>
            <Text align={"right"}  mr="20px" fontSize="lg" fontWeight="bold" mb={2}>$29</Text>
        </Flex>
        </Flex>
      </Box>
    </Box>
    </Link>



    <Link to="/php">
<Box bg={"white"} m="auto" cursor={"pointer"} borderWidth="1px" borderRadius="lg"  boxShadow="md" w={{base:"330px",md:"350px"}}  h="500px">
      <Image h="250px" w="100%" src="https://github.com/shwetra/assa/assets/104376252/29112cec-7d9f-42e8-820c-f06886f6884d" alt="Course Image" objectFit="cover"  />
      <Flex justifyContent="space-between" alignItems="center" p={4}>
      <Text border={"1px solid green"} bg="green.100" p="3px" pl="10px" pr="10px" fontWeight={600} fontSize="sm" color="gray.500">Beginner</Text>
       <Flex>
        <Text ml="20px"  mt="2px">{<AiFillClockCircle/>}</Text>
        <Text fontSize="sm" color="gray.500">2h 30m</Text>
       </Flex>      
      </Flex>
      <Box>
        <Text align={"start"} ml="10px"  borderBottom={"2px solid #f28524"} fontSize="20px"   fontWeight="bold" mb={2}>Getting Started with the Linux Command Line</Text>

        <Flex w="90%" m="auto" justifyContent={"space-between"}>
        <Text fontSize="xl" fontWeight={600} fontStyle={"italic"} color={"#f28524"}  borderBottom={"2px solid #f28524"} mb={2}>By Andrew paker</Text>
        <Flex mt="8px">
            <Image h="20px" mt="3px" src='https://github.com/shwetra/assa/assets/104376252/405c4f18-07c8-48e6-93b7-f4e2edd17f1e' alt='rating image'/>
            <Text fontSize="sm" color="gray.500">(4.5)</Text>
        </Flex>

        
        </Flex >
        <Flex mr="20px" justifyContent={"end"} >
        <Flex  w="30%" borderBottom={"2px solid #f28524"}>
            <Text fontWeight={700} mr="10px">Price</Text>
            <Text fontWeight={700} mr="10px"> : </Text>
            <Text align={"right"}  mr="20px" fontSize="lg" fontWeight="bold" mb={2}>Free</Text>
        </Flex>
        </Flex>
      </Box>
    </Box>
    </Link>




    <Link to="/php">
<Box bg={"white"} m="auto" cursor={"pointer"} borderWidth="1px" borderRadius="lg"  boxShadow="md" w={{base:"330px",md:"350px"}}  h="500px">
      <Image h="250px" w="100%" src="https://2.bp.blogspot.com/-Orv-dFRYx58/XE5bQRfsyvI/AAAAAAAANI0/e056i-OMcqY43wL7wsiQQZMX9X1Z8TKIwCEwYBhgL/w400-h225/The%2BComplete%2BWeb%2BDeveloper%2BCourse%2B2.0%2BRob%2BPercival%2BUdemy%2Bcourse.png" alt="Course Image" objectFit="cover"  />
      <Flex justifyContent="space-between" alignItems="center" p={4}>
      <Text border={"1px solid green"} bg="green.100" p="3px" pl="10px" pr="10px" fontWeight={600} fontSize="sm" color="gray.500">Beginner</Text>
       <Flex>
        <Text ml="20px"  mt="2px">{<AiFillClockCircle/>}</Text>
        <Text fontSize="sm" color="gray.500">2h 30m</Text>
       </Flex>      
      </Flex>
      <Box>
        <Text align={"start"} ml="10px"  borderBottom={"2px solid #f28524"} fontSize="20px"   fontWeight="bold" mb={2}>The Complete Web Developer Course</Text>

        <Flex w="90%" m="auto" justifyContent={"space-between"}>
        <Text fontSize="xl" fontWeight={600} fontStyle={"italic"} color={"#f28524"}  borderBottom={"2px solid #f28524"} mb={2}>By Rosy Janner</Text>
        <Flex mt="8px">
            <Image h="20px" mt="3px" src='https://github.com/shwetra/assa/assets/104376252/405c4f18-07c8-48e6-93b7-f4e2edd17f1e' alt='rating image'/>
            <Text fontSize="sm" color="gray.500">(4.5)</Text>
        </Flex>

        
        </Flex >
        <Flex mr="20px" justifyContent={"end"} >
        <Flex  w="30%" borderBottom={"2px solid #f28524"}>
            <Text fontWeight={700} mr="10px">Price</Text>
            <Text fontWeight={700} mr="10px"> : </Text>
            <Text align={"right"}  mr="20px" fontSize="lg" fontWeight="bold" mb={2}>$29</Text>
        </Flex>
        </Flex>
      </Box>
    </Box>
    </Link>
</SimpleGrid>
</Box>


{/* top categories  */}
<Box pb="100px" bg="#FFF7EE"> <Heading pt="20px" pb="20px" color={"#f28524"} borderBottom={"2px solid black"} mb="30px">Top Categories</Heading>
<SimpleGrid columns={[1,2,3,4]} w={{base:"90%",md:"90%", lg:"80%"}} m="auto" gap="20px">
{Data.map((e)=>{
    return(
<Flex h="100px" border={"1px solid gray"} borderRadius={"20px"} cursor={"pointer"}  _hover={{ bg:"blue.100"}}>
    <Img objectFit={"cover"} border={"1px solid black"} h="60px" ml="20px" mt="20px" borderRadius={"50px"} src={e.image} alt='' />
    <Text fontSize={"18px"} pt="30px" pl="20px" fontWeight={600} textDecoration={"underline"} _hover={{ color:"#f28524"}}>{e.name}</Text>
</Flex>
    )
})}

</SimpleGrid>
</Box>


<Flex justifyContent={"center"} mt="-50px">
    <Link to={"/video"} >
<Box
      w="100px"
      h="100px"
      borderRadius="50%"
      bg="#1CB098"
      _hover={{bg:"blue.100"}}
      cursor={"pointer"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Icon as={BsPlayFill} boxSize={6} color="black" />
    </Box>
    </Link>
    </Flex>




{/* -------------------student story -------------------- */}
<Box bg={"gray.100"} pt="60px" pb="50px" mt="-50px">
<Heading pb="10px">Student Stories</Heading>
<SimpleGrid columns={[1,2,3]} w="80%" gap="30px" m="auto">
<Box h="150px" bg="white" border={1} borderRadius={"20px"}> 
    <Text mt="20px">In total, it was a big success, I would get emails about what a fantastic resource it was.</Text>
    <Text mt="30px" fontWeight={600}>Vergenia Radar</Text>
</Box>

<Box h="150px" bg="white" border={1} borderRadius={"20px"}> 
    <Text mt="20px">In total, it was a big success, I would get emails about what a fantastic resource it was.</Text>
    <Text mt="30px" fontWeight={600}>Vergenia Radar</Text>
</Box>

<Box h="150px" bg="white" border={1} borderRadius={"20px"}> 
    <Text mt="20px">In total, it was a big success, I would get emails about what a fantastic resource it was.</Text>
    <Text mt="30px" fontWeight={600}>Vergenia Radar</Text>
</Box>
</SimpleGrid>
</Box>



{/*------------------------------- last box ------------------*/}
<Box  h={{base:"200px",lg:"400px"}} bgSize={"100%"} bgRepeat={"no-repeat"} bgImage={"https://github.com/shwetra/assa/assets/104376252/7928b736-7f92-4e96-bfd9-b27bedf36079"}>
<Box w={{base:"100%",md:"40%",lg:"25%"}}  pt={{lg:"50px"}} ml={{lg:"50px"}}>
     <Text fontSize={"23px"} fontWeight={700} >The trusted market leader in talent transformation through education </Text>
     <Text>The trusted market leader in talent transformation through education </Text> 
      </Box>
</Box>



    </Box>
  )
}




const Data=[
    {
        name: "Teaching",
        image: "https://github.com/shwetra/assa/assets/104376252/f652ebe3-bb52-432a-896e-d31ec264fe39"
      },
      {
        name: "Engineering",
        image: "https://github.com/shwetra/assa/assets/104376252/d35ac2a0-f184-4720-85db-671066c623c7"
      },
      {
        name: "Management",
        image: "https://github.com/shwetra/assa/assets/104376252/3d1050ee-405d-4f9c-bb4d-135aede847ea"
      },
      {
        name: "Humanities",
        image: "https://github.com/shwetra/assa/assets/104376252/392d629a-e1d0-42ea-b985-22f2f531b6d0"
      },
      {
        name: "Commerce",
        image: "https://github.com/shwetra/assa/assets/104376252/43b79dd1-307a-4562-8471-180f7551f31c"
      },
      {
        name: "Ph.D",
        image: "https://github.com/shwetra/assa/assets/104376252/a41d1e0a-a7da-4635-adf2-97381421c31b"
      },
      {
        name: "Law",
        image: "https://github.com/shwetra/assa/assets/104376252/14838ff4-47f6-42e8-aee8-06442df5a6fe"
      },
      {
        name: "MBBS",
        image: "https://github.com/shwetra/assa/assets/104376252/1b3325db-5f43-4d49-97b4-6ca2f8843feb"
      }
]