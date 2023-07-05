import React, { useEffect, useState } from 'react'
import {
    Box,
    Heading,
    Image,
    SimpleGrid,
    Text,
    useToast,
  
  
  } from '@chakra-ui/react';
import {  useNavigate } from 'react-router-dom'
import {  Flex, Button } from '@chakra-ui/react';
import MyComponent from './Cards';
import Footer from './Footer';
import Slider from './Slider';
import { Secondbanner } from './Secondbanner';
const card=[
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/d2f3ed01-2609-46cd-9cef-5ad67f49ba02",
      "name": "Coal",
      "quentity":"1 Kg",
      "brand":"Aline Coconut",
      "discountPrice": 0,
      "regularPrice": 450
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/e52c5e70-8cb2-4135-af6d-e6315d571d1b",
      "name": "Foil Paper",
      "brand":"Cocayaya Eco",
      "discountPrice": 0,
      "regularPrice": 80
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/9287bec1-540a-427a-9716-5838c6492bed",
      "name": "Foil Paper",
      "brand":"Cocayaya VIP",
      "discountPrice": 0,
      "regularPrice": 100
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/2ae4afc8-4c64-454e-941f-8c58c31a9ef3",
      "name": "Hookah Burner",
      "brand":"Fumo(1000 watt)",
      "discountPrice": 0,
      "regularPrice": 1350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/dbec4c98-be47-4af1-9fbf-39d9654cb01d",
      "name": "Hookah Burner",
      "brand":"Cocoyaya (500 watt)",
      "discountPrice": 0,
      "regularPrice": 1050
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/9d6e2b13-278b-4f8b-8555-27cb9e79faf4",
      "name": "Hookah Burner",
      "brand":"Boko Hot Plate (500 watt)",
      "discountPrice": 0,
      "regularPrice": 850
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/6472f9a5-2e5d-4e7d-b502-9e55a4562e61",
      "name": "Hookah Burner",
      "brand":"Fumo Mini (500 watt)",
      "discountPrice": 0,
      "regularPrice": 850
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/3d32bf45-97ad-42bd-b785-5449e74c68cb",
      "name": "Hookah Starter Pump",
      "brand":"Hookah Pump Mini (chargeable)",
      "discountPrice": 0,
      "regularPrice": 1250
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/fde09de4-e689-4930-8c8a-ded6b6bc11c5",
      "name": "Hookah Starter Pump",
      "brand":"Shisha Pump (chargeable)",
      "discountPrice": 0,
      "regularPrice": 1250
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/f835bb3e-028a-4e3d-b162-4da859253d89",
      "name": "Hookah Plate Ring Light",
      "brand":"RGB Led Light",
      "discountPrice": 0,
      "regularPrice": 1250
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/3d0d9c46-7c5a-434c-bd42-5c94aabb4969",
      "name": "Hookah Chiller",
      "brand":"Hookah Chiller",
      "discountPrice": 0,
      "regularPrice": 350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/6c1e1a80-46d2-4619-8855-047f55c80e18",
      "name": "Hookah Chillam",
      "brand":"Funnel",
      "discountPrice": 0,
      "regularPrice": 290
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/61f38f52-ac6d-4006-ab4e-a052e3985e13",
      "name": "Hookah Chillam",
      "brand":"Silicon",
      "discountPrice": 0,
      "regularPrice": 290
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/b03185aa-78f2-4956-8d76-59867357ac8c",
      "name": "Hookah Chillam",
      "brand":"Apple",
      "discountPrice": 0,
      "regularPrice": 550
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/981f112c-c317-423e-bfa8-00491f180bd4",
      "name": "Hookah Chillam",
      "brand":"Pikachu",
      "discountPrice": 0,
      "regularPrice": 650
    } ,
    


    {
      "image": "https://github.com/shwetra/assa/assets/104376252/82ef586d-24bb-4698-8f0d-865e548e3125",
      "name": "Hookah Chillam",
      "brand":"Mini Skull",
      "discountPrice": 0,
      "regularPrice": 160
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/f20bafe2-9034-41dd-b38d-671ce3efd4e9",
      "name": "Hookah Chillam",
      "brand":"Skull",
      "discountPrice": 0,
      "regularPrice": 350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/631b4cfd-e727-43b3-9a27-587531c7f4b0",
      "name": "Hookah Chillam",
      "brand":"Ceramic",
      "discountPrice": 0,
      "regularPrice": 100
    },

    {
      "image": "https://github.com/shwetra/assa/assets/104376252/bba0b282-1283-4411-a87f-a56b164c3a67",
      "name": "Hookah Chillam",
      "brand":"Silicon Tornado",
      "discountPrice": 0,
      "regularPrice": 350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/e7a0cc96-fb42-4659-976c-8164fc143956",
      "name": " Hookah Kloud",
      "brand":" Lotus",
      "discountPrice": 0,
      "regularPrice": 350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/5528b7e8-77c9-425b-8022-b437b147b1af",
      "name": " Hookah Kloud",
      "brand":" Lotus Premium",
      "discountPrice": 0,
      "regularPrice": 350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/648de48c-5efa-404e-889d-cbbceed670b1",
      "name": " Hookah Kloud",
      "brand":"HMD",
      "discountPrice": 0,
      "regularPrice": 450
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/6e3d571f-30f0-4ee9-8a25-b1576b3b4a8e",
      "name": " Hookah Heat Management Device",
      "brand":"Cocoyaya (Rose Gold)",
      "discountPrice": 0,
      "regularPrice": 1250
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/f56d0b69-bbba-4a1f-8a2f-d5184a3434ed",
      "name": " Hookah Heat Management Device",
      "brand":"Cocoyaya (Rainbow)",
      "discountPrice": 0,
      "regularPrice": 1200
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/eeb5be12-ed98-4846-aacd-94f006da2167",
      "name": " Hookah Base Gliter",
      "brand":"VG (France) All Colour Available",
      "discountPrice": 0,
      "regularPrice": 100
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/14793e15-ddfc-48e1-bd0f-3329a4f34934",
      "name": " Hookah Pipe Handle",
      "brand":"Silicone",
      "discountPrice": 0,
      "regularPrice": 180
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/06fa47ab-aefc-404d-a7f6-4e3c660ecdfa",
      "name": " Hookah Tong",
      "brand":"Hookah Tong",
      "discountPrice": 0,
      "regularPrice": 350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/bea8ac4a-27a6-425c-a298-6a551cd8442f",
      "name": " Hookah Tong",
      "brand":"Hookah Tong",
      "discountPrice": 0,
      "regularPrice": 100
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/123b5cc7-34db-4840-91d7-9a8bb1e0ed4d",
      "name": " Hookah Tong",
      "brand":"Hookah Tong",
      "discountPrice": 0,
      "regularPrice": 35
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/ec6c9118-518e-48f7-b881-3db5de6773ad",
      "name": " Hookah Herbal Gel Flavour",
      "brand":"Foggit (All Flavour Available)",
      "discountPrice": 0,
      "regularPrice": 240
    },

    {
      "image": "https://github.com/shwetra/assa/assets/104376252/39deba89-5c4e-4bbe-909e-1cd6742da522",
      "name": " Cigarette Filter",
      "brand":"Bio-Pipe",
      "discountPrice": 0,
      "regularPrice": 100
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/cda67a97-2dbc-4850-9084-83a45c967626",
      "name": " Hookah Flavour",
      "brand":"Royal Smokin (All Flavour Available)",
      "aditional":"Rs.120 (Single Piece) Rs.1150 (Box 10 Piece)",
      "discountPrice": 0,
      "regularPrice": 120
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/9a2bd08d-090a-412e-98f7-34ae3352669b",
      "name": " Hookah Flavour",
      "brand":"Alfakher (All Flavour Available)",
      "aditional":"Rs.160 (Single Piece) Rs.1450 (Box 10 Piece)",
      "discountPrice": 0,
      "regularPrice": 160
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/f88d7cec-88ce-47fe-a46e-a6cf950da1f4",
      "name": "Hookah Base",
      "brand":"Khalil",
      "discountPrice": 0,
      "regularPrice": 950
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/c4c9b9ef-4f49-4abd-ad25-dd723555e810",
      "name": "Hookah Base",
      "brand":"Mya Petite",
      "discountPrice": 0,
      "regularPrice": 350
    },
   
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/46e21429-eeab-4339-83f0-7cc5000fdb8a",
      "name": "Hookah Base",
      "brand":"Mya Petite",
      "discountPrice": 0,
      "regularPrice": 300
    },


  
  ]


export const Data = () => {
    const toast = useToast()
    const [data, setData] = useState([]);
    const nav = useNavigate()
 

const handleCart=(item)=>{
    setData([...data, item]);
      localStorage.setItem("cartdata", JSON.stringify([...data, item]));
      toast({
        title: 'Item added to cart',
        position: 'top',
        status: 'success',
        color: 'pink'
      })
      nav('/cart')
    }
    //getting products added in cart in array
     useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem('cartdata')) || [];
        setData(storedData);   
     },[])




  return (
    <>
    <Slider/>
     <Box  bgColor={"white"}>
    <Flex>
        <Box h="50px" ml={{base:"20px",lg:"60px"}} w={{base:"70%",lg:"15%"}} fontSize={"24px"} fontWeight={600} borderBottom={"3px solid #f28524"} >Our Products</Box>
        <Box h="50px" w="90%" borderBottom={"2px solid gray"}></Box>
    </Flex>

  <SimpleGrid columns={[1,2,3,4]}  w="85%" m="auto">
      {card.map((card ,index) => (
        <Box key={index} border="1px solid gray" borderRadius="20px"   m={4} bg="gray.100">    
    <Box  overflow={"hidden"} m="20px" h="150px">
        <Image
          transform="scale(1.0)"
          src={
            card.image
          }
          alt="some text"
          objectFit="contain"
          width="100%"
          
          transition="0.4s ease-in-out"
          _hover={{
            transform: 'scale(1.2)',
          }}
        />
     
    </Box>
    <Box h="150px">
    <Heading fontSize="20px" fontWeight={700} pl="20px" marginTop="2">{card.name}</Heading>
    <Text pl="20px"  fontWeight={600}>{card.brand} </Text>
    <Box mt="10px" pb="20px" pl="20px"  w="100%" >
      <Text fontSize={"12px"}>{card.aditional}</Text>
        {/* <Text  fontSize={"14px"}  textDecoration="line-through">
          Rs : {card.discountPrice}
        </Text> */}

        <Text  fontWeight={600}>
         From Rs : {card.regularPrice}
        </Text>
        </Box>
       
        </Box>
        <Button onClick={()=>handleCart(card)} mb="20px" border={"1px solid black"} w="80%" borderRadius={"20px"} ml="10%"> Add to Cart</Button>

        </Box>
      ))}
      </SimpleGrid>

      {/* <MyComponent/> */}


      <Secondbanner/>
      <Footer/>

</Box>
</>
  )
}
