import { Box, Flex, Spacer, chakra, HStack, Button, Select, IconButton, useDisclosure, Image, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  const handleCourseChange = (event) => {
    const coursePath = event.target.value;
    navigate(coursePath);
  };

  return (
    <Box  position="fixed" top={0} left={0} right={0} zIndex={999}>
    <Box color={"#f28524"} fontWeight={600} bg="#0E2A47"> <Text as={"span"} color={"white"}>Welcome to </Text>MPI Education and Placement Services LLP!</Box>
    <Box  bg="gray.100" h="80px" w="100%" >
      <Flex alignItems="center" justifyContent="space-between">
        <Link to={"/"}>
        <Image h="80px" ml="30px" src="https://github.com/shwetra/assa/assets/104376252/5bbe02c4-243b-407d-8206-ff2d25bdec0d" alt="Logo"  />
        </Link>
        <Flex display={{ base: 'none', md: 'none',lg:"flex" }} justifyContent="space-between" w="75%">
        
        <Flex  justifyContent="space-around" gap="40px" pt="15px" fontWeight={600}>
          <Link to="/"> <Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Home</Text> </Link>
          <Link to="/about"><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>About Us</Text></Link>
          <Select fontWeight={600} w="120px" placeholder="Courses" _hover={{ border: "none" }} border="none" mt="-10px" onChange={handleCourseChange}>
            <option value="/humanities">Department Of Humanities</option>
            <option value="/commerce">Department Of Commerce</option>
            <option value="/management">Department Of Management</option>
            <option value="/computer-application">Department Of Computer Application</option>
            <option value="/engineering">Department Of Engineering</option>
            <option value="/hotel-management">Department Of Hotel Management</option>
            <option value="/agriculture">Department Of Agriculture</option>
            <option value="/science">Department Of Science</option>
            <option value="/teaching">Department Of Teaching</option>
            <option value="/pharmacy">Department Of Pharmacy</option>
            <option value="/paramedical">Department Of Paramedical</option>
            <option value="/certificate-diploma">Certificate & Diploma</option>
          </Select>
          <Link   to="/placement" ><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Placement</Text> </Link>
          <Link to="/career"><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Career</Text></Link>
          <Link to="/contact"><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Contact</Text></Link>
          <Link to="/authorizedcenter"><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Authorized Center</Text></Link>
        </Flex>

            <Link to={"/consultantlogin"}>
        <Button mr="30px" mt="5px" _hover={{bg:"transparent", color:"#f28524"}} leftIcon={<FaUser />} size="md">
      Consultant Login
    </Button>
    </Link>
        </Flex>
        <IconButton
          icon={<HamburgerIcon />}
          mr="10px" 
          color={"black"}
          bg="transparent"
          aria-label="Open Menu"
          display={{ base: 'block', md: 'block', lg: 'none' }}
          onClick={onToggle}
        />
      </Flex>
      <HStack
        spacing={6}
        display={{ base: isOpen ? 'flex' : 'none', md: isOpen ? 'flex' : 'none' }}
        
        pl="30px"
        bg="white"
        flexDirection="column"
        fontWeight={600}
        alignItems={"start"}
      >
        <Link to="/"> <Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Home</Text> </Link>
          <Link to="/about"><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>About Us</Text></Link>
          <Select fontWeight={600} ml="-15px" placeholder="Courses" _hover={{ border: "none" }}  border="none" mt="-10px" onChange={handleCourseChange}>
            <option value="/humanities">Department Of Humanities</option>
            <option value="/commerce">Department Of Commerce</option>
            <option value="/management">Department Of Management</option>
            <option value="/computer-application">Department Of Computer Application</option>
            <option value="/engineering">Department Of Engineering</option>
            <option value="/hotel-management">Department Of Hotel Management</option>
            <option value="/agriculture">Department Of Agriculture</option>
            <option value="/science">Department Of Science</option>
            <option value="/teaching">Department Of Teaching</option>
            <option value="/pharmacy">Department Of Pharmacy</option>
            <option value="/paramedical">Department Of Paramedical</option>
            <option value="/certificate-diploma">Certificate & Diploma</option>
          </Select>
          <Link   to="/placement" ><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Placement</Text> </Link>
          <Link to="/career"><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Career</Text></Link>
          <Link to="/contact"><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Contact</Text></Link>
          <Link to="/authorizedcenter"><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Authorized Center</Text></Link>
          <Link to={"/consultantlogin"}>
        <Button ml="-20px" bg="transparent" mr="30px" mt="5px" _hover={{bg:"transparent", color:"#f28524"}} leftIcon={<FaUser />} size="md">
      Consultant Login
    </Button>
    </Link>
      </HStack>
    </Box>
    </Box>
  );
};

export default Navbar;
