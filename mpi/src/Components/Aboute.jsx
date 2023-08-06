import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  return (
    <Box>
        <Image w="100%" src="https://www.ditostech.com/wp-content/uploads/2021/02/about-banner.jpg"/>



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
            <Text>Welcome to our education and placement consultancy, where we've been making waves in the industry since 2011. With a legacy that spans over a decade, we have grown to establish our presence with pride across India, boasting a remarkable count of 4 branches strategically placed throughout the nation. In fact, our influence stretches far and wide, as we proudly hold the title of being the official consultants in nearly every state.</Text>
        </Box>
        <Flex direction={{base:"column",md:"column",lg:"row"}} gap="30px" mt="20px">
            <Text w={{base:"100%",md:"100%",lg:"45%"}}>We have Universities that offer online courses for working professionals and those who cannot complete their studies for any reason. We have a team of professionals who help with the guidance and support that you need throughout the completion of your course till the end.</Text>
            <Text w={{base:"100%",md:"100%",lg:"45%"}}>We believe that education is an investment in yourself, your career and society at large. We are committed to helping you realize your full potential by providing the right kind of guidance and support throughout the duration of your training program</Text>
        </Flex>
        </Box>
    </Flex>
</Box>




{/* TEXT  */}
<Box  textAlign={"justify"} w="90%" m="auto">
    <Text mb="30px">At the core of our services lies our dedication to guiding students towards their educational aspirations. Whether you're inclined towards the realms of Tradition, Technicality, Law, Pharmacy, Computer Science, or Marketing courses, our doors are open to provide comprehensive admission assistance. But our offerings don't stop there. Our team of seasoned professionals is adept at navigating the complex pathways leading to admissions in esteemed MBBS and Ph.D. programs within India's most prestigious colleges and universities.</Text>
    <Text mb="30px">Recognizing the changing landscape of education, we've embraced the digital age. For those juggling work and study, or those who've faced unforeseen hurdles, our partner universities provide a robust collection of online courses. These offerings cater to the needs of working professionals and individuals who seek education without compromising their current commitments. Our dedicated team of experts is here to stand by your side, offering unwavering guidance and support from the moment you embark on your educational journey till the triumphant finish.</Text>
    <Text mb="50px">Our philosophy centers on the belief that education is a multi-faceted investment – in oneself, in one's career, and in the broader society. This belief underscores our commitment to empower you with the right tools and insights needed to unearth your true potential. Throughout the entirety of your training program, we're not just a consultancy; we're your partners, your mentors, and your staunch advocates. Here's to unlocking the doors of opportunity and enlightenment, together.</Text>

    <Text mb="30px">In a rapidly evolving world, where knowledge is the key that unlocks countless doors of opportunity, our education and placement consultancy stands as a steadfast beacon of guidance and empowerment. Over the years, we've seen the educational landscape transform, and we've evolved with it, adapting our strategies and offerings to meet the diverse needs of our students.</Text>
    <Text mb="30px">With a legacy that spans over a decade, our journey began in 2011 with a vision to bridge the gap between aspirants and their dreams. Since then, we've not only fulfilled this vision but have also expanded our horizons. Today, our network spans the nation with four strategically located branches. Our outreach extends beyond mere physical presence – we're the trusted consultants that individuals from every state turn to when seeking a path to their educational goals.</Text>
   
    <Text mb="50px">As the world of academia continues to diversify, so do our services. Our commitment to aspiring minds remains unwavering. Whether you're pursuing a traditional course of study or diving into the intricacies of technical disciplines, law, pharmacy, or the dynamic realm of computer science and marketing, our expert team is poised to provide tailored admission assistance. We understand that the pursuit of higher education isn't limited to borders, which is why our professional counselors specialize in guiding students towards top-notch MBBS and Ph.D. programs within India's esteemed colleges and universities.</Text>
<Text mb="50px">However, our philosophy extends beyond classroom walls. We understand that life's commitments can sometimes challenge our educational pursuits. To cater to this reality, we've embraced the digital revolution. Our affiliations with universities offering online courses for working professionals and dedicated learners underline our commitment to accessibility and inclusivity. Our passionate team, comprising seasoned educators and industry experts, is your compass throughout this educational voyage, offering unyielding support and insights, irrespective of your chosen path.</Text>
<Text mb="50px">At the heart of our approach lies the conviction that education is more than a transaction; it's an investment. An investment in the growth of individuals, the betterment of careers, and the enrichment of societies at large. With this ethos in mind, we're devoted to accompanying you on this transformative journey. We're here to ensure that your potential isn't just realized, but maximized. Our consultancy is more than a service – it's a partnership that promises to unlock your potential and pave the way for a brighter future.</Text>
</Box>
    </Box>
  )
}
