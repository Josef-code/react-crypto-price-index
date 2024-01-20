import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react';

const Crypto = () => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://api.coincap.io/v2/assets";

    //Use Axios to make API within the useEffect
    axios
      .get(apiUrl)
      .then((response) => {
        //update the state with the response data

        const responseData = response.data.data;

        setData(responseData);
        setisLoading(false);

        //get the price from the table
        const price = document.querySelector('.price');
        const priceData = price.textContent;
        // const currencyFormatted = priceData.toLocaleString('en-US', {
        //   style: 'currency',
        //   currency: 'USD',
        // });

        console.log(priceData);
      })
      .catch((error) => {
        //Handle any errors here
        console.error("API call Error: ", error);
        setisLoading(false);
      });
  }, []);

  return (
    <>
    <div className="flex justify-center h-full p-10 mx-auto my-auto">

    { isLoading ? (<Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>) : ( 
        <TableContainer className="bg-white text-black rounded">
        <Table size="md">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Rank</Th>
              <Th>Symbol</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
              {
                  data.map(crypto => (              
                  <Tr key={crypto.id}>
                      <Td>{crypto.name}</Td>
                      <Td>{crypto.rank}</Td>
                      <Td>{crypto.symbol}</Td>
                      <Td className="price">{crypto.priceUsd}</Td>
                  </Tr>
                  ))
              } 
          </Tbody>
        </Table>
      </TableContainer>
     ) }

    </div>
    </>
  );
};

export default Crypto;
