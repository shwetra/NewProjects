import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import React, { useEffect, useState } from 'react';
import axios from "axios";

export const Dashboard = () => {
  const [Data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get("https://mpieducation.cyclic.app/other");
      console.log("Response:", response.data); // Log the response data
      setData(response.data); // Set response data to the Data state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
  
    try {
      const response = await axios.delete(`https://mpieducation.cyclic.app/other/${id}`);
      console.log("Delete Response:", response.data);
  
      // Call fetchdata to refresh the data after deleting
      fetchdata();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  
  
  
  
  
  

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <Box overflowX="auto" mt="70px" border="3px solid black" borderRadius="15px">
      <Table size="md" variant="simple">
        <Thead bgColor="teal.100">
          <Tr>
            <Th color="black" fontWeight="bold">Name</Th>
            <Th color="black" fontWeight="bold">Number</Th>
            <Th color="black" fontWeight="bold">Email</Th>
            <Th color="black" fontWeight="bold">State</Th>
            <Th color="black" fontWeight="bold">DELETE</Th>
          </Tr>
        </Thead>
        <Tbody bgColor="gray.100">
          {Data && Data.map((e) => (
            <Tr key={e._id} border="2px solid black">
              <Td color="black" textAlign="left" fontWeight="500"  overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">{e.firstName}</Td>
              <Td color="black" textAlign="left" fontWeight="500"  overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">{e.number}</Td>
              <Td color="black" textAlign="left" fontWeight="500"  overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">{e.email}</Td>
              <Td color="black" textAlign="left" fontWeight="500"  overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">{e.state}</Td>
              <Td>
                <Button colorScheme="red" size="sm" onClick={() => handleDelete(e.id)}>
                  <AiFillDelete />
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
