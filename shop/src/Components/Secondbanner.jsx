import { Box, Button, Flex, Heading, Image, SimpleGrid, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import{AiFillFire} from "react-icons/ai"

export const Secondbanner = () => {
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
    <Box >
        <Image w="100%" src='https://github.com/shwetra/assa/assets/104376252/ddc1941b-b60b-4a6b-bb08-1b0a9ebb440b' alt='banner' />
    </Box>


<Box bg="gray.100">
{/* new hookah by thugs */}
<Flex ml={{base:"10px",md:"50px",lg:"120px"}} pt="30px">
<Heading fontSize={"40px"}>Trending Deals</Heading>
<Text color={"red"} fontSize={"45px"}>{<AiFillFire/>}</Text>
</Flex>

<SimpleGrid columns={[1,2,3,4]}  w="85%" m="auto">
      {card.map((card ,index) => (
        <Box key={index} border="1px solid gray" borderRadius="20px"   m={4} bg="gray.100">    
    <Box  overflow={"hidden"} m="20px">
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
    <Heading fontSize="18px" fontWeight={600} pl="20px" marginTop="2">{card.name}</Heading>
    <Box mt="10px" pb="20px" pl="20px"  w="100%" >
        <Text  fontSize={"14px"}  textDecoration="line-through">
          Rs : {card.discountPrice}
        </Text>
        <Text  fontWeight={600}>
         From Rs : {card.discountPrice}
        </Text>
        </Box>
       
        </Box>
        <Button onClick={()=>handleCart(card)} mb="20px" border={"1px solid black"} w="80%" borderRadius={"20px"} ml="10%"> Add to Cart</Button>

        </Box>
      ))}
      </SimpleGrid>

      </Box>





{/* hand mixed flavoure */}

<Box>
    <Flex w={{base:"100%",md:"100%",lg:"70%"}} m="auto"   direction={{base:"column-reverse",md:"row",lg:"row"}}>

<Box w={{base:"100%",md:"50%",lg:"40%"}}   m="auto" lineHeight={"7"} p="20px">
    <Heading fontSize={"36px"}>Hand-mix Flavors</Heading>
    <Text>- Premium Hand mix hookah flavors</Text>
    <Text>- 17+ tastes are available</Text>
    <Text>- Mixed with branded molasses</Text>
    <Text>- Taste which you may never have had.</Text>
    <Text>- 250g Glass Jar full of molasses</Text>
<Text>- Taste which you may never have had.Shop now</Text>
<Flex justifyContent={"center"} mt="20px" mb="20px">
<Button borderRadius={"20px"} bg="#0E1B4D" color={"white"}>Shop Now</Button>
</Flex>

</Box>
<Box w={{base:"100%",md:"50%",lg:"50%"}} ><Image src='https://github.com/shwetra/assa/assets/104376252/65e5ea87-e05d-4238-ac64-e2cc3fcd693e'/></Box>

    </Flex>
</Box>









{/* pro hokaaas lover  */}

<Box bg="#0E1B4D">
{/* new hookah by thugs */}
<Box ml={{base:"10px",md:"50px",lg:"120px"}} pt="30px">
<Heading fontSize={"40px"} color={"white"}>for pro hookah lovers</Heading>
<Text color={"gray"} mt="20px" >Try different...!!!</Text>
</Box>

<SimpleGrid columns={[1,2,3,4]}  w="85%" m="auto">
      {newcard.map((card ,index) => (
        <Box key={index} border="1px solid gray" borderRadius="20px"   m={4} bg="gray.100">    
    <Box  overflow={"hidden"} m="20px">
        <Image
       
          transform="scale(1.0)"
          src={
            card.image
          }
          h="250px"
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
    <Heading fontSize="18px" fontWeight={600} pl="20px" marginTop="2">{card.name}</Heading>
    <Box mt="10px" pb="20px" pl="20px"  w="100%" >
        <Text  fontSize={"14px"}  textDecoration="line-through">
          Rs : {card.discountPrice}
        </Text>
        <Text  fontWeight={600}>
         From Rs : {card.discountPrice}
        </Text>
        </Box>
       
        </Box>
        <Button onClick={()=>handleCart(card)} mb="20px" border={"1px solid black"} w="80%" borderRadius={"20px"} ml="10%"> Add to Cart</Button>

        </Box>
      ))}
      </SimpleGrid>

      </Box>



    </>
  )
}















const card=[
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/ae6e1190-9927-4860-ad89-3c4cb0d8da37",
      "name": "Al Burj Flavors (Pack of 5) + 1 KG Al Afandi Coconut Coal",
      "discountPrice": 1200.00,
      "regularPrice": 899
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/9b7198e7-fcb1-492b-a3c2-f3df2b368863",
      "name": "Pack of 3 Different Coconut Coal (250g Boxes) - Trial Pack",
      "discountPrice": 1499,
      "regularPrice": 2499
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/f844a5aa-1226-4bd4-8950-55d29fd358ef",
      "name": "Black Mamba Herbal Flavors (Pack of 10) + 1 KG Coconut Coal",
      "discountPrice": 799,
      "regularPrice": 1299
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/aea724ab-3458-4305-89a2-90df652c04c3",
      "name": "Shopdop Hookah Mouth Tips Filters (Pack of 2)",
      "discountPrice": 1199,
      "regularPrice": 1999
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/5dd4e925-5b98-4e05-bb10-9c4efe2d0324",
      "name": "Black Mamba Leather Cases For Hookah - Black",
      "discountPrice": 899,
      "regularPrice": 1499
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/305b12cb-b508-4747-922c-1b7b30a25680",
      "name": "Herbal Moksha + Mint + 1 Als Bella Ciao Magic Coal 20pc",
      "discountPrice": 699,
      "regularPrice": 999
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/81499398-4d63-4e37-af7a-d918d2831391",
      "name": "Black Mamba Aluminum Foil 50pcs - 40 Micron (Pack of 2)",
      "discountPrice": 1699,
      "regularPrice": 2999
    },
    {
      "image": "https://github.com/shwetra/assa/assets/104376252/8120f104-6d63-4e10-9986-177c9d040163",
      "name": "Bolivian Hookah Wooden",
      "discountPrice": 599,
      "regularPrice": 1299
    },
    {
        "image": "https://github.com/shwetra/assa/assets/104376252/bfba78d0-faa9-4166-9082-2b3f5888aa53",
        "name": "Black Mamba Leather Cases For Hookah - Black",
        "discountPrice": 599,
        "regularPrice": 1199
      },
      {
        "image": "https://github.com/shwetra/assa/assets/104376252/1c7dc560-7e08-4633-820e-8c306ab2b5ef",
        "name": "Herbal Moksha + Mint + 1 Als Bella Ciao Magic Coal 20pc",
        "discountPrice": 1699,
        "regularPrice": 1999
      },
      {
        "image": "https://github.com/shwetra/assa/assets/104376252/baa9a3c2-7ebd-486c-baad-98e3df284ead",
        "name": "Black Mamba Aluminum Foil 50pcs - 40 Micron (Pack of 2)",
        "discountPrice": 1229,
        "regularPrice": 2199
      },
      {
        "image": "https://github.com/shwetra/assa/assets/104376252/07578889-d696-4822-8f98-678a8ab24c75",
        "name": "Bolivian Hookah Wooden",
        "discountPrice": 999,
        "regularPrice": 899
      }
  ]





//   nwe hoohas

const newcard=[
    {
      "image": "https://rukminim1.flixcart.com/image/612/612/xif0q/hookah/x/y/x/ahi-rf-bk-001-1-appraise-home-impex-original-imagmxgscvzzeprv.jpeg?q=70",
      "name": "Wish Divine Glass Hookah Pot Black Big Luna (Height 20 ...",
      "discountPrice": 699,
      "regularPrice": 999
    },
    {
      "image": "https://rukminim1.flixcart.com/image/612/612/jzn0tjk0/hookah/y/n/z/01230-mahison-lifestyle-original-imafjm2pzwu6sedz.jpeg?q=70",
      "name": "Misr Puff IRON TRAY 8 inch Glass, Earthenware, Iron Hoo...",
      "discountPrice": 208,
      "regularPrice": 999
    },
    {
      "image": "https://rukminim1.flixcart.com/image/612/612/xif0q/hookah/z/v/w/jc-salai02-1-misr-puff-original-imagpmgsssb3bngh.jpeg?q=70",
      "name": "Misr Puff Russian Base IRON TRAY 18.5 inch Glass Hookah",
      "discountPrice": 599,
      "regularPrice": 1500
    },
    {
      "image": "https://rukminim1.flixcart.com/image/612/612/l19m93k0/hookah/r/i/q/royal-edition-1-misr-puff-original-imagcv9yvhfcgsgv.jpeg?q=70",
      "name": "Misr Puff Limited Edition printed IRON TRAY 11 inch Gol...",
      "discountPrice": 299,
      "regularPrice": 800
    },
    {
      "image": "https://rukminim1.flixcart.com/image/612/612/klb78nk0/hookah/u/g/w/wd-hk083-wish-divine-original-imagygjjnavu6gwj.jpeg?q=70",
      "name": "Wish Divine Hookah Pot Black QT with Silver Stem (Heigh...",
      "discountPrice": 499,
      "regularPrice": 999
    },
    {
      "image": "https://rukminim1.flixcart.com/image/612/612/koenl3k0/hookah/l/y/h/ptmck20-the-new-look-original-imag2vh3zfh8zhww.jpeg?q=70",
      "name": "The New Look hukka 8 inch Glass Hookah",
      "discountPrice": 212,
      "regularPrice": 999
    },
    {
      "image": "https://rukminim1.flixcart.com/image/612/612/kyg5zm80/hookah/e/s/n/45q56-1-misr-puff-original-imaganr4qb4kr9ua.jpeg?q=70",
      "name": "Misr Puff IRON TRAY 11 inch Glass, Gold Plated Hookah",
      "discountPrice": 299,
      "regularPrice": 900
    },
    {
      "image": "https://rukminim1.flixcart.com/image/612/612/kylvr0w0/hookah/g/l/l/new-design-glass-hookah-pot-black-gamla-shaped-with-black-stem-original-imagaszpm8vdnffs.jpeg?q=70",
      "name": "PUFF KING 10 inch Glass Hookah",
      "discountPrice": 289,
      "regularPrice": 1499
    },  
   
   ]