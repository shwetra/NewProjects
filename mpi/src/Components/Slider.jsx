import React from "react";
import { useEffect, useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";


const Slider = () => {
  const [counter, setCounter] = useState(0); 

  const craouselData = [
    {
      url:"https://github-production-user-asset-6210df.s3.amazonaws.com/104376252/251555015-c92e76d9-39d9-43ac-90fa-4a5f1cee8566.png"
    },
    {
        url:"https://github.com/shwetra/assa/assets/104376252/6c5534ee-689b-4c49-bc56-0b84d8a1d64d"
      },
    {
        url:"https://github.com/shwetra/assa/assets/104376252/61dede2f-fcb1-47ac-8ad2-da87eaf2b2c2"
      },
      {
      url:"https://github.com/shwetra/assa/assets/104376252/558a5913-1e5b-47cc-a147-f3352ca06590"
    },{
        url:"https://github.com/shwetra/assa/assets/104376252/d314156a-a9de-44de-ad54-1c0eb8ebca1f"
    }
];


  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === craouselData.length - 1) {
        setCounter(-1);
      }setCounter((prev) => prev + 1);
    },3000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
   
        <Box position="relative" h={{base:"200px",md:"350px",lg:"600px"}}>
          <Image
            boxSize={"100%"}
            objectFit="fill"
            src={craouselData[counter].url}
            alt=""
            width={"100%"}
            className="darken"
          />
        </Box>
       
  );
};

export default Slider;