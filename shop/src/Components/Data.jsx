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
      "image": "https://github.com/shwetra/assa/assets/104376252/8388ac07-9622-4521-b98b-c7416a62ac1c",
      "name": "Coal",
      "quentity":"1 Kg",
      "brand":"Aline Coconut",
      "discountPrice": 0,
      "regularPrice": 450
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/e4313813-7ea6-4b23-a1ab-9da0be5e3cd4",
      "name": "Foil Paper",
      "brand":"Cocayaya Eco",
      "discountPrice": 0,
      "regularPrice": 80
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/93cc8982-4fa2-4bac-b3f7-ac08e580bd02",
      "name": "Foil Paper",
      "brand":"Cocayaya VIP",
      "discountPrice": 0,
      "regularPrice": 100
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/b247b8f7-cd9f-4f00-9081-b4557604fdd4",
      "name": "Hookah Burner",
      "brand":"Fumo(1000 watt)",
      "discountPrice": 0,
      "regularPrice": 1350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/ffeae65f-9650-45b2-b54c-6182b58adce8",
      "name": "Hookah Burner",
      "brand":"Cocoyaya (500 watt)",
      "discountPrice": 0,
      "regularPrice": 1050
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/d3200204-f012-4cbd-b490-a9c16d1a2aa4",
      "name": "Hookah Burner",
      "brand":"Boko Hot Plate (500 watt)",
      "discountPrice": 0,
      "regularPrice": 850
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/d8d421ee-d96e-45a2-9877-6775a251db68",
      "name": "Hookah Burner",
      "brand":"Fumo Mini (500 watt)",
      "discountPrice": 0,
      "regularPrice": 850
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/1b38a23d-2451-4105-b83d-9d61f891aa75",
      "name": "Hookah Starter Pump",
      "brand":"Hookah Pump Mini (chargeable)",
      "discountPrice": 0,
      "regularPrice": 1250
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/8cba0402-8e70-4d03-ab70-363995aab50f",
      "name": "Hookah Starter Pump",
      "brand":"Shisha Pump (chargeable)",
      "discountPrice": 0,
      "regularPrice": 1250
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/f8d0d235-1b50-45b1-87a6-ea9c9da4ce25",
      "name": "Hookah Plate Ring Light",
      "brand":"RGB Led Light",
      "discountPrice": 0,
      "regularPrice": 1250
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/ce76b867-aa45-4966-9b9c-211029bde960",
      "name": "Hookah Chiller",
      "brand":"Hookah Chiller",
      "discountPrice": 0,
      "regularPrice": 350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/ebdf32eb-1283-45eb-b423-5c0aa5e2c236",
      "name": "Hookah Chillam",
      "brand":"Funnel",
      "discountPrice": 0,
      "regularPrice": 290
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/7040a91e-02bf-46cf-9940-4f8d899050ae",
      "name": "Hookah Chillam",
      "brand":"Silicon",
      "discountPrice": 0,
      "regularPrice": 290
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/a2286c91-045b-42a7-94c9-caed0ff0e5c5",
      "name": "Hookah Chillam",
      "brand":"Apple",
      "discountPrice": 0,
      "regularPrice": 550
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/12b2d285-51f3-4fd1-82a8-d723e0b5066f",
      "name": "Hookah Chillam",
      "brand":"Pikachu",
      "discountPrice": 0,
      "regularPrice": 650
    } ,
    


    {
      "image": "https://github.com/shwetra/assa/assets/104376252/0ee05bb8-705b-4de0-a880-382de38619d5",
      "name": "Hookah Chillam",
      "brand":"Mini Skull",
      "discountPrice": 0,
      "regularPrice": 160
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/321ce1a8-be16-4820-8e20-c694aeece45d",
      "name": "Hookah Chillam",
      "brand":"Skull",
      "discountPrice": 0,
      "regularPrice": 350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/79ef05f8-3a08-4195-9ee1-d78249f4a090",
      "name": "Hookah Chillam",
      "brand":"Ceramic",
      "discountPrice": 0,
      "regularPrice": 100
    },

    {
      "image": "https://github.com/shwetra/assa/assets/104376252/b8331c70-b156-474a-977a-76256e4d2991",
      "name": "Hookah Chillam",
      "brand":"Silicon Tornado",
      "discountPrice": 0,
      "regularPrice": 350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/5b080889-2094-4204-be43-03b9b99064ce",
      "name": " Hookah Kloud",
      "brand":" Lotus",
      "discountPrice": 0,
      "regularPrice": 350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/62bedc0b-8fd5-46b2-82a6-fb7a9c4f109e",
      "name": " Hookah Kloud",
      "brand":" Lotus Premium",
      "discountPrice": 0,
      "regularPrice": 350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/5aedcb82-f5f7-4614-b8c3-f8b8ef620c79",
      "name": " Hookah Kloud",
      "brand":"HMD",
      "discountPrice": 0,
      "regularPrice": 450
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/edc1bac0-a33e-42e7-8b3b-22f7f8553211",
      "name": " Hookah Heat Management Device",
      "brand":"Cocoyaya (Rose Gold)",
      "discountPrice": 0,
      "regularPrice": 1250
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/9e079673-4f53-44ae-8015-264dd3b48020",
      "name": " Hookah Heat Management Device",
      "brand":"Cocoyaya (Rainbow)",
      "discountPrice": 0,
      "regularPrice": 1200
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/1b24b83e-c1cd-4223-bbe6-d402d53ee9f3",
      "name": " Hookah Base Gliter",
      "brand":"VG (France) All Colour Available",
      "discountPrice": 0,
      "regularPrice": 100
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/464fc5aa-06e9-4130-b12a-ed9bb3456b1a",
      "name": " Hookah Pipe Handle",
      "brand":"Silicone",
      "discountPrice": 0,
      "regularPrice": 180
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/9b4e5a5d-1655-43b2-92a3-c767962cf913",
      "name": " Hookah Tong",
      "brand":"Hookah Tong",
      "discountPrice": 0,
      "regularPrice": 350
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/35496398-f627-420a-a708-9c440531585b",
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
      "image": "https://github.com/shwetra/assa/assets/104376252/c8afd71c-076c-437a-b1d5-f037ed9264cf",
      "name": " Hookah Herbal Gel Flavour",
      "brand":"Foggit (All Flavour Available)",
      "discountPrice": 0,
      "regularPrice": 240
    },

    {
      "image": "https://github.com/shwetra/assa/assets/104376252/70cc2cf6-bc9b-4522-aa3e-f4c62928d98f",
      "name": " Cigarette Filter",
      "brand":"Bio-Pipe",
      "discountPrice": 0,
      "regularPrice": 100
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/1183a6a1-3059-49a4-b940-69b3aa08e818",
      "name": " Hookah Flavour",
      "brand":"Royal Smokin (All Flavour Available)",
      "aditional":"Rs.120 (Single Piece) Rs.1150 (Box 10 Piece)",
      "discountPrice": 0,
      "regularPrice": 120
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/791bdc42-7a00-48fc-bd7f-0f03c81b4e0d",
      "name": " Hookah Flavour",
      "brand":"Alfakher (All Flavour Available)",
      "aditional":"Rs.160 (Single Piece) Rs.1450 (Box 10 Piece)",
      "discountPrice": 0,
      "regularPrice": 160
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/a15bf4d8-d78e-44c5-ac7b-004e8034eca4",
      "name": "Hookah Base",
      "brand":"Khalil",
      "discountPrice": 0,
      "regularPrice": 950
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/f33979f3-3e4e-484c-8bbc-5610e3e1d2b6",
      "name": "Hookah Base",
      "brand":"Mya Petite",
      "discountPrice": 0,
      "regularPrice": 350
    },
   
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/17917513-bca3-435c-b0ca-891a29fe3337",
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
    <Box  overflow={"hidden"} m="20px" h="190px" borderRadius={"10px"}>
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
