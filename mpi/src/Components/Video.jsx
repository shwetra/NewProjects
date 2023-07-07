import { Box } from '@chakra-ui/react';
import React from 'react'

export const Video = () => {
  return (
    <Box
    as="video"
    width="97%"
    m="auto"
    mt="60px"
    mb="50px"
    _hover={{ all: "none" }}
    borderRadius={"20px"}
    objectFit={{base:"cover",lg:"inherit"}}
    height={{ base: "200px", md: "400px", lg: "600px" }}
    autoPlay
    loop
    onEnded={(e) => {
      e.target.currentTime = 0; // Reset video playback
      e.target.play(); // Start playing again
    }}
  >
    <source src="https://github.com/shwetra/assa/assets/104376252/cfafcc95-c450-4e25-b4e4-d0c9b52fb609" />
  </Box>

  )
}
