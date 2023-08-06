import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormLabel,
    Heading,
    Image,
    Input,
    Stack,
    Text,
    useToast,
  } from "@chakra-ui/react";


  import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

  
  function Login() {
    const nav=useNavigate()
    const toast = useToast();
    const [data, setData] = useState({
      email: "",
      password: "",
    });
    const { email, password } = data;
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
      if (data.email === "vikashsir@gmail.com" && data.password=== "123456789") {
        localStorage.setItem("ak", JSON.stringify("qwertyhgfdsa"));
        toast({
          title: "Login Successfully",
          description: "Hello Vikash 🙆‍♂️",
          status: "success",
          position: "top",
        });
        nav("/dashboard");
      } else {
        toast({
          title: "Information Required",
          description: "Kindly fill all details",
          status: "error",  // Issue: Should be "error" instead of "falure"
          position: "top",
        });
      }
    };
    
  
  
  
    return (
      <Box m={"auto"} mt={"100px"}  >
     <Flex w={{base:"90%",md:"80%",lg:'60%'}} h={{base:'600px',md:'300px',lg:'300px'}} m={'auto'} border={'2px solid black'} borderRadius={"20px"} direction={{base:"column",md:"row",lg:"row"}}>
        <Box bg="teal" w={{base:'100%',md:'40%',lg:'30%'}} borderRadius={"19px"} > 
        <Image  pt="40px" src='https://github-production-user-asset-6210df.s3.amazonaws.com/104376252/251547112-5bbe02c4-243b-407d-8206-ff2d25bdec0d.png'/>
        </Box>
        <Box ml="20px" w={{base:'90%',md:'40%',lg:'60%'}}>
            <Heading fontSize={"20px"}>Consultant Login</Heading>
            <Box>
              <FormLabel>Email:</FormLabel>
              <Input
              
               color={"black"}
                border={"2px solid gray"}
                type="email"
                name="email"
                placeholder="Username"
                value={email}
                onChange={handleChange}
              />
            </Box>
  
            <Box>
              <FormLabel>Password:</FormLabel>
              <Input
                color={"black"}
                border={"2px solid gray"}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
            </Box>
            
            <Box mt={'10px'}>
            <Stack>
                <Checkbox colorScheme="green" defaultChecked>
                      Remeber me!
                </Checkbox>
              </Stack>
              </Box>
           
              <Box
                w={"100%"}
                display={"flex"}
                justifyContent={"center"}
                
              >
                <Box>
                  {/* Button */}
                  <Button
                    p={"5px"}
                    mt={"10px"}
                    border={"2px solid teal"}
                    w={"100px"}
                    color={"black"}
                    bg={"teal.100"}
                    fontSize={"18px"}
                    fontWeight={"600"}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
  
                <Box  display={'flex'} justifyContent={'left'}>
                  <Text
                    fontSize={"15px"}
                    mt={"15px"}
                    mb={"10px"}
                    align="end"
                    fontWeight={"400"}
                    color={"red"}
                  >
                    Forget Password? <a href="/signin">Recover now!</a>{" "}
                  </Text>
                  </Box>
                </Box>
  
              </Box>
          
          </Box>
      </Flex>
  
  
      </Box>
    );
  }
  
  export default Login;